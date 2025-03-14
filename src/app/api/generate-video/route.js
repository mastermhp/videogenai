import { NextResponse } from "next/server"
import Replicate from "replicate"

// Initialize Replicate with your API key
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
})

export async function POST(request) {
  try {
    const { script, style, aspectRatio } = await request.json()

    // Extract key scenes from the script
    const scenes = extractScenes(script)

    // Generate a video for each scene (in a real app, you'd combine these)
    const videoPromises = scenes.map(async (scene) => {
      // Using Replicate's text-to-video model
      const output = await replicate.run(
        "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
        {
          input: {
            prompt: scene.description,
            num_frames: 24,
            fps: 8,
            width: aspectRatio === "16:9" ? 768 : 576,
            height: aspectRatio === "16:9" ? 432 : 576,
          },
        },
      )

      return {
        sceneId: scene.id,
        videoUrl: output,
        timestamp: scene.timestamp,
      }
    })

    const videoScenes = await Promise.all(videoPromises)

    // In a real implementation, you would combine these scenes
    // For now, we'll return the individual scene URLs
    return NextResponse.json({
      success: true,
      videoScenes,
      previewUrl: videoScenes[0]?.videoUrl,
      metadata: {
        style,
        aspectRatio,
        sceneCount: scenes.length,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Video generation error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate video",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

// Helper function to extract scenes from a script
function extractScenes(script) {
  // Simple implementation - in a real app, you'd use NLP
  const lines = script.split("\n")
  const scenes = []
  let currentScene = { description: "", timestamp: "00:00" }
  let sceneId = 1

  lines.forEach((line) => {
    // Look for timestamp patterns like [00:30] or (1:45)
    const timestampMatch = line.match(/[[$$](\d+:?\d*):?(\d*)[\]$$]/)

    if (timestampMatch) {
      // Save previous scene if it exists
      if (currentScene.description.trim()) {
        scenes.push({ ...currentScene, id: sceneId++ })
      }

      // Start new scene
      const minutes = timestampMatch[1] || "0"
      const seconds = timestampMatch[2] || "00"
      currentScene = {
        description: line.replace(/[[$$](\d+:?\d*):?(\d*)[\]$$]/, "").trim(),
        timestamp: `${minutes}:${seconds.padStart(2, "0")}`,
      }
    } else if (line.trim()) {
      // Add to current scene description
      currentScene.description += " " + line.trim()
    }
  })

  // Add the last scene
  if (currentScene.description.trim()) {
    scenes.push({ ...currentScene, id: sceneId })
  }

  return scenes
}


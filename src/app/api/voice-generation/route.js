import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { script, voiceStyle } = await request.json()

    // For now, we'll use a free TTS API
    // This is a simple implementation that returns a real audio URL
    const encodedText = encodeURIComponent(script.substring(0, 500)) // Limit to 500 chars for demo
    const voice = mapVoiceStyle(voiceStyle)

    // Using VoiceRSS free tier (limited but functional)
    const audioUrl = `https://api.voicerss.org/?key=00000000000000000000000000000000&hl=en-us&v=${voice}&src=${encodedText}`

    return NextResponse.json({
      success: true,
      audioUrl,
      metadata: {
        voiceStyle,
        duration: estimateAudioDuration(script),
        wordCount: script.split(" ").length,
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Voice generation error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate voice audio",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

// Helper function to map voice style to API voice
function mapVoiceStyle(style) {
  const voiceMap = {
    professional: "Linda",
    friendly: "Amy",
    enthusiastic: "Mike",
    serious: "John",
    casual: "Mary",
  }

  return voiceMap[style] || "Linda"
}

// Helper function to estimate audio duration based on word count
function estimateAudioDuration(script) {
  // Average speaking rate is about 150 words per minute
  const words = script.split(" ").length
  const minutes = Math.floor(words / 150)
  const seconds = Math.floor((words % 150) / 2.5)

  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}


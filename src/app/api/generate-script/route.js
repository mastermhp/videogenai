import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(request) {
  try {
    const { topic, tone, length, keywords } = await request.json()

    // Create a prompt for Gemini
    const prompt = `
      Create a video script about "${topic}".
      Tone: ${tone || "Professional"}
      Length: ${length || "Medium (3-5 minutes)"}
      Keywords to include: ${keywords || "none specified"}
      
      Format the script with:
      1. An engaging introduction
      2. Main content with key points
      3. A strong call-to-action conclusion
      
      Include timestamps and scene descriptions.
    `

    // Generate content with Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({
      success: true,
      script: text,
      metadata: {
        wordCount: text.split(" ").length,
        estimatedDuration: Math.round(text.split(" ").length / 150) + " minutes",
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Script generation error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate script",
        details: error.message,
      },
      { status: 500 },
    )
  }
}


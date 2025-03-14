import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(request) {
  try {
    const { videoTitle, videoDescription, keywords, targetAudience } = await request.json()

    // Create a prompt for Gemini
    const prompt = `
      Optimize the following YouTube video content for maximum engagement and SEO:
      
      Original Title: "${videoTitle}"
      Original Description: "${videoDescription}"
      Target Keywords: ${keywords || "not specified"}
      Target Audience: ${targetAudience || "general"}
      
      Please provide:
      1. Three optimized title options (include emojis where appropriate)
      2. A fully optimized description with timestamps, links, and calls to action
      3. A list of 15-20 relevant tags
      4. Three hashtag suggestions
      
      Format the response clearly with sections for each element.
    `

    // Generate content with Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    // Parse the response to extract structured data
    const titleOptions = extractTitles(text)
    const optimizedDescription = extractDescription(text)
    const tags = extractTags(text)
    const hashtags = extractHashtags(text)

    return NextResponse.json({
      success: true,
      optimization: {
        titleOptions,
        optimizedDescription,
        tags,
        hashtags,
      },
      rawResponse: text,
      metadata: {
        seoScore: calculateSeoScore(titleOptions[0], optimizedDescription, tags),
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("YouTube optimization error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to optimize for YouTube",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

// Helper functions to parse the AI response
function extractTitles(text) {
  const titleSection = text.match(/title options:?.*?(?=description:|$)/is)
  if (!titleSection) return ["Optimized: " + text.substring(0, 60)]

  const titles = titleSection[0].match(/\d+\.\s*(.*?)(?=\d+\.|$)/gs)
  return titles ? titles.map((t) => t.replace(/^\d+\.\s*/, "").trim()) : ["Optimized: " + text.substring(0, 60)]
}

function extractDescription(text) {
  const descSection = text.match(/description:?.*?(?=tags:|$)/is)
  return descSection ? descSection[0].replace(/description:?/i, "").trim() : text
}

function extractTags(text) {
  const tagSection = text.match(/tags:?.*?(?=hashtags:|$)/is)
  if (!tagSection) return []

  const tagText = tagSection[0].replace(/tags:?/i, "").trim()
  return tagText
    .split(/,|\n/)
    .map((tag) => tag.trim())
    .filter((tag) => tag)
}

function extractHashtags(text) {
  const hashtagSection = text.match(/hashtags:?.*?(?=$)/is)
  if (!hashtagSection) return []

  const hashtagText = hashtagSection[0].replace(/hashtags:?/i, "").trim()
  return hashtagText
    .split(/,|\n/)
    .map((tag) => {
      tag = tag.trim()
      return tag.startsWith("#") ? tag : "#" + tag
    })
    .filter((tag) => tag)
}

function calculateSeoScore(title, description, tags) {
  // Simple SEO score calculation
  let score = 0

  // Title factors
  if (title && title.length > 30 && title.length < 60) score += 25

  // Description factors
  if (description) {
    if (description.length > 200) score += 25
    if (description.includes("http") || description.includes("www")) score += 10
  }

  // Tag factors
  if (tags && tags.length > 10) score += 20
  if (tags && tags.length > 15) score += 10

  // Cap at 100
  return Math.min(score, 100)
}


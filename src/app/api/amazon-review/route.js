import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(request) {
  try {
    const { productUrl, reviewStyle, keyPoints } = await request.json()

    // Extract ASIN from Amazon URL (simple implementation)
    const asin = extractAsin(productUrl)

    // Get product data (in a real app, you'd fetch this from Amazon API)
    const productData = await fetchProductData(asin)

    // Create a prompt for Gemini
    const prompt = `
      Create a comprehensive product review script for this Amazon product:
      
      Product Name: "${productData.title}"
      Price: ${productData.price}
      Rating: ${productData.rating} stars (${productData.reviewCount} reviews)
      Key Features: ${productData.features.join(", ")}
      
      Review Style: ${reviewStyle || "Balanced"}
      Key Points to Cover: ${keyPoints || "Cover all major aspects of the product"}
      
      Format the script with:
      1. Introduction to the product
      2. Unboxing experience
      3. Features and specifications analysis
      4. Pros and cons
      5. Comparison with alternatives
      6. Final verdict and recommendation
      
      Include timestamps and scene descriptions for a video review.
    `

    // Generate content with Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    const result = await model.generateContent(prompt)
    const response = await result.response
    const reviewScript = response.text()

    return NextResponse.json({
      success: true,
      productData,
      reviewScript,
      metadata: {
        reviewStyle,
        wordCount: reviewScript.split(" ").length,
        estimatedDuration: Math.round(reviewScript.split(" ").length / 150) + " minutes",
        generatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Amazon review error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate Amazon review",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

// Helper function to extract ASIN from Amazon URL
function extractAsin(url) {
  if (!url) return "B07PXGQC1Q" // Default ASIN as fallback

  // Try to extract ASIN from URL
  const asinMatch = url.match(/\/([A-Z0-9]{10})(?:\/|\?|$)/)
  return asinMatch ? asinMatch[1] : "B07PXGQC1Q"
}

// Function to fetch product data
// In a real app, you'd use Amazon Product API or web scraping
async function fetchProductData(asin) {
  try {
    // For demo purposes, we'll use a simple API to get real product data
    // This is a free API that doesn't require authentication
    const response = await fetch(
      `https://api.rainforestapi.com/request?api_key=demo&type=product&amazon_domain=amazon.com&asin=${asin}`,
    )

    if (!response.ok) {
      throw new Error("Failed to fetch product data")
    }

    const data = await response.json()

    // Extract relevant information
    return {
      title: data.product.title || "Wireless Bluetooth Earbuds",
      price: data.product.buybox_winner?.price?.value || "$49.99",
      rating: data.product.rating || 4.2,
      reviewCount: data.product.ratings_total || 1245,
      features: data.product.feature_bullets || [
        "Bluetooth 5.0",
        "Active Noise Cancellation",
        "30-hour Battery Life",
        "IPX7 Waterproof",
        "Touch Controls",
      ],
      imageUrl: data.product.main_image?.link || "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg",
    }
  } catch (error) {
    console.error("Error fetching product data:", error)

    // Return fallback data if API fails
    return {
      title: "Wireless Bluetooth Earbuds",
      price: "$49.99",
      rating: 4.2,
      reviewCount: 1245,
      features: [
        "Bluetooth 5.0",
        "Active Noise Cancellation",
        "30-hour Battery Life",
        "IPX7 Waterproof",
        "Touch Controls",
      ],
      imageUrl: "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg",
    }
  }
}


// Client-side API wrapper for making requests to our backend

// Generate a script
export async function generateScript(data) {
    try {
      const response = await fetch("/api/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error generating script:", error)
      throw error
    }
  }
  
  // Generate a video
  export async function generateVideo(data) {
    try {
      const response = await fetch("/api/generate-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error generating video:", error)
      throw error
    }
  }
  
  // Optimize for YouTube
  export async function optimizeForYouTube(data) {
    try {
      const response = await fetch("/api/youtube-optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error optimizing for YouTube:", error)
      throw error
    }
  }
  
  // Generate Amazon product review
  export async function generateAmazonReview(data) {
    try {
      const response = await fetch("/api/amazon-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error generating Amazon review:", error)
      throw error
    }
  }
  
  // Get analytics data
  export async function getAnalytics(period = "30days") {
    try {
      const response = await fetch(`/api/analytics?period=${period}`)
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error fetching analytics:", error)
      throw error
    }
  }
  
  // Generate voice audio
  export async function generateVoice(data) {
    try {
      const response = await fetch("/api/voice-generation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error generating voice:", error)
      throw error
    }
  }
  
  
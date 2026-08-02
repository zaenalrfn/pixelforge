export const config = {
  runtime: 'edge', // Using Edge runtime for fast, globally distributed execution
};

export default async function handler(request: Request) {
  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Read the secret API Key from Vercel's Environment Variables
    const API_KEY = process.env.API_KEY || '';

    // Forward the request to your Cloudflare Worker securely
    const cfResponse = await fetch('https://api-image.zaofficial24.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ prompt }),
    });

    // If Cloudflare returns an error (like 429 Rate Limit)
    if (!cfResponse.ok) {
      const contentType = cfResponse.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const errorData = await cfResponse.json();
        return new Response(JSON.stringify(errorData), {
          status: cfResponse.status,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        const errorText = await cfResponse.text();
        return new Response(JSON.stringify({ error: errorText }), {
          status: cfResponse.status,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Forward the successful image response back to the frontend
    const imageBlob = await cfResponse.blob();
    return new Response(imageBlob, {
      headers: {
        'Content-Type': cfResponse.headers.get('Content-Type') || 'image/jpeg',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

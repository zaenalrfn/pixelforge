export const generateImage = async (prompt: string): Promise<string> => {
  const url = '/api';
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    throw new Error('API Key tidak ditemukan. Harap atur VITE_API_KEY di .env');
  }

  try {
    // Assuming a standard POST request with prompt in JSON body.
    // If the API expects query params or different structure, we might need to adjust this.
    // The prompt is passed as { prompt: "..." }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gagal membuat gambar: ${response.status} ${response.statusText}. ${errorText}`);
    }

    // Assuming the API returns JSON with an imageUrl or imageBase64, or just directly an image blob.
    // We will check the content type.
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      // Adjust according to actual response format (e.g. data.url, data.image)
      return data.url || data.image || data.imageUrl || '';
    } else {
      // If it returns a blob (direct image)
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
  } catch (error: any) {
    throw new Error(error.message || 'Terjadi kesalahan saat memproses permintaan.');
  }
};

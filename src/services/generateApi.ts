export const generateImage = async (prompt: string): Promise<string> => {
  const url = import.meta.env.DEV ? '/api/dev-proxy' : '/api/generate';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      let errorMessage = `Gagal membuat gambar: ${response.status} ${response.statusText}`;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } else {
        const errorText = await response.text();
        errorMessage = `${errorMessage}. ${errorText}`;
      }
      
      throw new Error(errorMessage);
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

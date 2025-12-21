/**
 * Utilitários para integração com Pinterest e validação de URLs
 */

/**
 * Padrões de URL do Pinterest aceitos
 */
const PINTEREST_URL_PATTERNS = [
  /^https?:\/\/(www\.)?pinterest\.com\/pin\/(\d+)/i,
  /^https?:\/\/pin\.it\/[a-zA-Z0-9]+/i,
];

/**
 * Valida se uma URL é do Pinterest
 * @param {string} url - URL a ser validada
 * @returns {boolean} true se a URL é válida, false caso contrário
 */
export function isPinterestUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }
  
  try {
    new URL(url); // Valida se é uma URL válida
  } catch {
    return false;
  }
  
  return PINTEREST_URL_PATTERNS.some(pattern => pattern.test(url));
}

/**
 * Extrai o ID do pin da URL do Pinterest
 * @param {string} url - URL do Pinterest
 * @returns {string|null} ID do pin ou null se não conseguir extrair
 */
export function extractPinId(url) {
  // Padrão para pinterest.com/pin/XXXXX
  const match1 = url.match(/pinterest\.com\/pin\/(\d+)/i);
  if (match1?.[1]) {
    return match1[1];
  }
  
  // Para URLs encurtadas (pin.it), a URL já é suficiente
  if (url.includes('pin.it')) {
    return url;
  }
  
  return null;
}

/**
 * Baixa o vídeo do Pinterest usando a API pinterest-downloader-api
 * @param {string} url - URL do Pinterest
 * @param {string} apiUrl - URL base da API pinterest-downloader-api
 * @returns {Promise<string|null>} URL do vídeo ou null se falhar
 */
export async function downloadPinterestVideo(url, apiUrl) {
  try {
    // Validação básica
    if (!isPinterestUrl(url)) {
      throw new Error('Invalid Pinterest URL');
    }
    
    // Requisição à API pinterest-downloader-api
    const response = await fetch(`${apiUrl}/download`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Verifica se a resposta foi bem-sucedida
    if (!data.success) {
      throw new Error(data.error || data.message || 'Download failed');
    }
    
    // Extrai a URL do vídeo da resposta
    const videoUrl =
      data.data?.videoUrl ||
      data.data?.url ||
      data.data?.media?.[0]?.url;
    
    if (!videoUrl) {
      throw new Error('No video URL found in response');
    }
    
    return videoUrl;
  } catch (error) {
    console.error('Error downloading Pinterest video:', error);
    return null;
  }
}

/**
 * Valida se uma URL de vídeo é acessível
 * @param {string} videoUrl - URL do vídeo
 * @returns {Promise<boolean>} true se a URL é acessível, false caso contrário
 */
export async function validateVideoUrl(videoUrl) {
  try {
    const response = await fetch(videoUrl, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Obtém o tamanho do arquivo de vídeo em bytes
 * @param {string} videoUrl - URL do vídeo
 * @returns {Promise<number|null>} Tamanho em bytes ou null se não conseguir obter
 */
export async function getVideoFileSize(videoUrl) {
  try {
    const response = await fetch(videoUrl, { method: 'HEAD' });
    
    const contentLength = response.headers.get('content-length');
    return contentLength ? parseInt(contentLength, 10) : null;
  } catch {
    return null;
  }
}

/**
 * Converte bytes para formato legível (MB, GB, etc)
 * @param {number} bytes - Tamanho em bytes
 * @returns {string} String formatada
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

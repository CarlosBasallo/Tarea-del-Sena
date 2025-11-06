const DEFAULT_TIMEOUT = 10000;

const BASE_URL =
  (typeof process !== 'undefined' && process.env.API_URL) ||
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) ||
  (typeof window !== 'undefined' && window.__API_BASE__) ||
  'http://localhost:3000/api';

async function request(path, options = {}) {
  const controller = new AbortController();
  const timeout = options.timeout ?? DEFAULT_TIMEOUT;
  const signal = options.signal ?? controller.signal;
  if (!options.signal) setTimeout(() => controller.abort(), timeout);

  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };

  let body;
  if (options.body instanceof FormData) {
    body = options.body;
    delete headers['Content-Type'];
  } else if (options.body !== undefined) {
    body = JSON.stringify(options.body);
  }

  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers,
      body,
      signal,
      credentials: options.credentials ?? 'same-origin',
    });
  } catch (err) {
    const e = new Error(err.name === 'AbortError' ? 'Solicitud abortada / timeout' : 'Error de red');
    e.original = err;
    throw e;
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    // respuesta no-JSON o vacía
  }

  if (!res.ok) {
    const err = new Error((data && data.message) || res.statusText || 'Error en la solicitud');
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return (data && (data.data ?? data)) ?? null;
}

export const apiClient = {
  get: (p, opts) => request(p, { method: 'GET', ...opts }),
  post: (p, body, opts) => request(p, { method: 'POST', body, ...opts }),
  put: (p, body, opts) => request(p, { method: 'PUT', body, ...opts }),
  delete: (p, opts) => request(p, { method: 'DELETE', ...opts }),
};

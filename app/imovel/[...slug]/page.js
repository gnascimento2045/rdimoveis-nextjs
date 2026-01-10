import { redirect, notFound } from 'next/navigation'

export default function SlugRedirectPage({ params }) {
  const slugParts = params.slug || []
  const joined = Array.isArray(slugParts) ? slugParts.join('/') : slugParts

  // Tenta extrair um UUID no final do slug (ex: ...-<uuid>)
  const uuidMatch = joined.match(/([0-9a-fA-F-]{36})$/)
  let id = null
  if (uuidMatch) {
    id = uuidMatch[1]
  } else if (Array.isArray(slugParts) && slugParts.length > 0) {
    // fallback: último segmento
    id = slugParts[slugParts.length - 1]
  }

  if (!id) return notFound()

  // Redireciona para a rota existente por id; a página de detalhe cuidará de ajustar a URL no cliente
  return redirect(`/properties/${id}`)
}

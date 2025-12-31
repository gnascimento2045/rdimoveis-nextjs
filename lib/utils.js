import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '5561993336757'

export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getWhatsAppLink = (property) => {
  const message = property
    ? `Olá! Tenho interesse no imóvel: ${property.title}. Gostaria de agendar uma visita.`
    : 'Olá! Gostaria de mais informações sobre os imóveis.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
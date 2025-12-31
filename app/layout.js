import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'RD IMÓVEIS DF - Idealize! Sonhe! Realize!',
  description: 'Encontre o imóvel dos seus sonhos em Brasília. Apartamentos e casas para comprar e alugar.',
  keywords: 'imóveis, brasília, apartamentos, casas, comprar, alugar, df',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
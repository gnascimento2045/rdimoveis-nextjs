import Link from 'next/link'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import PropertyCard from '@/components/PropertyCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { propertyService } from '@/services/api'

export const revalidate = 60

export default async function Home() {
  let properties = []
  try {
    properties = await propertyService.getProperties({ active: true })
    properties = properties.slice(0, 6)
  } catch (error) {
    console.error('Error loading properties:', error)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />

      <section className="relative pt-20 pb-32 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1625426242633-3be4b3379dfb?crop=entropy&cs=srgb&fm=jpg&q=85)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            IDEALIZE!<br />SONHE!<br />REALIZE!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 drop-shadow-lg">
            Encontre o imóvel dos seus sonhos em Brasília
          </p>
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Confira nossas melhores ofertas
            </p>
          </div>

          {properties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Nenhum imóvel disponível no momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {properties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              href="/properties"
              className="inline-block bg-rd-blue hover:bg-rd-blue-hover text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg transition-colors"
            >
              Ver Todos os Imóveis
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-rd-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            VAMOS AGENDAR UMA VISITA
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e realize o sonho da casa própria
          </p>
          <a
            href="https://wa.me/5561993336757"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-rd-blue hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold shadow-xl transition-colors"
          >
            Falar com um Corretor
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
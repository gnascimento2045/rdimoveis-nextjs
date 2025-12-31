'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { propertyService } from '@/services/api'

export default function SearchBar() {
  const router = useRouter()
  const [type, setType] = useState('comprar')
  const [city, setCity] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [allCities, setAllCities] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    loadCities()
  }, [])

  const loadCities = async () => {
    try {
      const properties = await propertyService.getProperties({ active: true })
      const uniqueCities = [...new Set(properties.map(p => p.city))]
      setAllCities(uniqueCities)
    } catch (error) {
      console.error('Error loading cities:', error)
    }
  }

  const handleCityChange = (value) => {
    setCity(value)
    if (value.length > 0) {
      const filtered = allCities.filter(c => 
        c.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (selectedCity) => {
    setCity(selectedCity)
    setShowSuggestions(false)
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (type) params.append('type', type)
    if (city) params.append('city', city)
    router.push(`/properties?${params.toString()}`)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto"
    >
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setType('comprar')}
          className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
            type === 'comprar' ? 'bg-rd-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Comprar
        </button>
        <button
          onClick={() => setType('alugar')}
          className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
            type === 'alugar' ? 'bg-rd-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Alugar
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative" ref={inputRef}>
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Cidade ou região..."
            value={city}
            onChange={(e) => handleCityChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-rd-blue"
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors flex items-center"
                >
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-700">{suggestion}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="bg-rd-blue hover:bg-rd-blue-hover text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Search className="h-5 w-5" />
          <span>Buscar Imóveis</span>
        </button>
      </div>
    </motion.div>
  )
}
import { citiesSuggestions, neighborhoodsSuggestions } from './locationData'

function plusifySpaces(s) {
    return String(s).trim().replace(/\s+/g, '+')
}

function makeFilterUrl({ city, neighborhood } = {}) {
    const base = 'https://www.rdimoveisdf.com/properties?purpose=comprar'
    const parts = []
    if (city) parts.push(`city=${plusifySpaces(city)}`)
    if (neighborhood) parts.push(`neighborhood=${plusifySpaces(neighborhood)}`)
    return parts.length ? `${base}&${parts.join('&')}` : base
}

export function generateCitiesFilterLinks() {
    return citiesSuggestions.map((name) => ({
        name,
        href: makeFilterUrl({ city: name }),
    }))
}

export function generateNeighborhoodsFilterLinks() {
    return neighborhoodsSuggestions.map((name) => ({
        name,
        href: makeFilterUrl({ neighborhood: name }),
    }))
}

export default {
    generateCitiesFilterLinks,
    generateNeighborhoodsFilterLinks,
    makeFilterUrl,
}

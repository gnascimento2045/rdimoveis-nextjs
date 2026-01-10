import React from 'react'
import {
    generateCitiesFilterLinks,
    generateNeighborhoodsFilterLinks,
} from '../../lib/filterLinks'

export const metadata = {
    title: 'Regiões mais procuradas',
}

export default function RegiaoPage() {
    const cities = generateCitiesFilterLinks()
    const neighborhoods = generateNeighborhoodsFilterLinks()

    return (
        <main style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>
            <h1>Regiões mais procuradas</h1>

            <section style={{ marginTop: 20 }}>
                <h2>Cidades</h2>
                <ul>
                    {cities.map((c) => (
                        <li key={c.name}>
                            <a href={c.href} target="_blank" rel="noreferrer">
                                {c.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section style={{ marginTop: 20 }}>
                <h2>Bairros</h2>
                <ul>
                    {neighborhoods.map((n) => (
                        <li key={n.name}>
                            <a href={n.href} target="_blank" rel="noreferrer">
                                {n.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

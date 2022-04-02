import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react'
import { SearchResult } from '../Components/SearchResults'

type Results = {
  totalPrice: string
  data: any[]
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>({ totalPrice: '', data: [] })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()

    if (!search.trim()) return

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const totalPrice = data.reduce(
      (acc: number, product: { price: number }): number => (acc += product.price),
      0
    )

    const formatter = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

    const products = data.map(
      (product: { id: number; title: string; price: number; priceFormatted: string }) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          priceFormatted: formatter.format(product.price),
        }
      }
    )

    setResults({ data: products, totalPrice: formatter.format(totalPrice) })
  }

  const addToWishlist = useCallback((id: number) => {
    console.log(id)
  }, [])

  return (
    <>
      <Head>
        <script src="http://localhost:8097"></script>
      </Head>
      <div>
        <h1>Search</h1>
        <form onSubmit={handleSearch}>
          <input type="text" value={search} onChange={handleChange} />
          <button type="submit">Buscar</button>
        </form>
      </div>

      <SearchResult
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishlist={addToWishlist}
      />
    </>
  )
}

export default Home

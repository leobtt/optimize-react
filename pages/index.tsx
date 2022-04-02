import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { SearchResult } from '../Components/SearchResults'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()

    if (!search.trim()) return

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    setResults(data)
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

      <SearchResult results={results} onAddToWishlist={addToWishlist} />
    </>
  )
}

export default Home

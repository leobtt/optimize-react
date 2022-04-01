import type { NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react'
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

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResult results={results} />
    </div>
  )
}

export default Home

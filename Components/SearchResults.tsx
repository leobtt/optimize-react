import { ResultsProps } from './interface'
import { ProductItem } from './ProductItem'
import { useMemo } from 'react'

export const SearchResult = ({ results, onAddToWishlist }: ResultsProps) => {
  const totalPrice = useMemo(() => {
    return results.reduce((acc, product) => {
      return (acc += product.price)
    }, 0)
  }, [results])

  return (
    <div>
      {totalPrice}
      {results.map((product) => {
        return <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
      })}
    </div>
  )
}

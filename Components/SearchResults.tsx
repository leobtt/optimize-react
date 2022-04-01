import { ResultsProps } from './interface'
import { ProductItem } from './ProductItem'

export const SearchResult = ({ results }: ResultsProps) => {
  return (
    <div>
      {results.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  )
}

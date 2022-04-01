import { ProductProps } from './interface'

export const ProductItem = ({ product }: ProductProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

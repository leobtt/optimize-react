import { ProductProps } from './interface'
import { memo } from 'react'

function ProductItemComponent({ product, onAddToWishlist }: ProductProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>Adicionar aos favoritos</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})

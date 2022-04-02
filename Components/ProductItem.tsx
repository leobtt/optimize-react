import { ProductProps } from './interface'
import { memo, useState } from 'react'
import { AddProductToWishlistProps } from './interface'
/* import { AddProductToWishlist } from './AddProductToWishlist' */

import dynamic from 'next/dynamic'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import('./AddProductToWishlist').then((mod) => mod.AddProductToWishlist)
  },
  {
    /* mostra antes do conteúdo ser carregado */
    loading: () => <span>Carregando...</span>,
  }
)

function ProductItemComponent({ product, onAddToWishlist }: ProductProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onRequestClose={() => setIsAddingToWishlist(false)}
          onAddToWishlist={() => {
            onAddToWishlist(product.id)
            setIsAddingToWishlist(false)
          }}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})

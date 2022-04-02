interface data {
  id: number
  price: number
  title: string
  priceFormatted: string
}

export interface ResultsProps {
  totalPrice: string
  results: data[]
  onAddToWishlist: (id: number) => void
}
export interface ProductProps {
  product: data
  onAddToWishlist: (id: number) => void
}

export interface AddProductToWishlistProps {
  onAddToWishlist: () => void
  onRequestClose: () => void
}

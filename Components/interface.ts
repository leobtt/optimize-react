interface data {
  id: number
  price: number
  title: string
}

export interface ResultsProps {
  results: data[]
  onAddToWishlist: (id: number) => void
}
export interface ProductProps {
  product: data
  onAddToWishlist: (id: number) => void
}

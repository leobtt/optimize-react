import { AddProductToWishlistProps } from './interface'

export function AddProductToWishlist({
  onRequestClose,
  onAddToWishlist,
}: AddProductToWishlistProps) {
  return (
    <span>
      Desejda adicionar aos favoritos?
      <button type="button" onClick={onAddToWishlist}>
        Sim
      </button>
      <button type="button" onClick={onRequestClose}>
        Não
      </button>
    </span>
  )
}

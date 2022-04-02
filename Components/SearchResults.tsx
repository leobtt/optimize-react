import { ResultsProps } from './interface'
import { ProductItem } from './ProductItem'
import {
  List,
  ListRowRenderer /* AutoSizer (para ocupar o tamanho da tela toda)*/,
} from 'react-virtualized'

export const SearchResult = ({ results, totalPrice, onAddToWishlist }: ResultsProps) => {
  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        {' '}
        {/* style controla basicamente se o elemento está visivel ou não em tela */}
        <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300} /* tamanho da nossa lista */
        rowHeight={30} /* cada linha tem 30px de altura */
        width={900}
        overscanRowCount={
          5
        } /* significa que renderizará 5 itens a mais do que está demostrado na tela */
        rowCount={results.length} /* quantos itens tem na lista */
        rowRenderer={rowRender} /* uma função que renderizará a lista */
      />

      {/* {results.map((product) => {
        return <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
      })} */}
    </div>
  )
}

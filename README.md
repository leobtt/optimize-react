# Optimze React App

## 💻 Quando o React realiza a renderização do componente

---

### Pai para filho

```tsx
<Pai>
  <Filho />
</Pai>
```

### Propriedade

```tsx
<Pai title="" /* tota vez que a propriedade title atualizar */>
  <Filho />
</Pai>
```

### Hooks (useState, useContext, useReducer ...)

```tsx
function Component() {
  const [state, setState] = useState([])

  return <>Atualiza {state}</>
}
```

## ▶ Fluxo de renderização

---

1. Gerar uma nova versão do compnente que precisa ser renderizado.
2. Compara essa nova versão com a versão anterior já salva na página.
3. Se houver alguma alteração, o React renderiza essa nova versão em tela.

Com o reconcilation do React ele consegue recalcular quais são as diferenças (Componente, propriedades, hooks)

## ⏹ React.memo

---

Faz um shallow compare (comparação rasa)
comparando a igualdade referencial

### Quando devo utilizar o React.memo?

1. Componente de funções puras
2. Componentes que renderizam demais
3. Quando o Componente reenderiza com as mesmas props
4. Se o componente for médio pra grande, a utilização ganha mais performace, caso contrário. até em alguns casos não compensa utilizar o 'memo', pois o custo pro react usar o 'memo' é maior que fazer o fluxo de renderização, assim, não valendo a pena.

## 📷 useMemo

---

O useMemo guarda o valor de retorno na memória para que a função não calcule algo que não tenha necessidade

### Quando devo utilizar o React.useMemo?

1. Cálculos pesados (Não usé para cálculos simples, pois há um custo de processamento para o useMemo, ficando assim mais lento do que antes)
2. Igualdade referencial(quando a gente repassa a informação para um componente filho, ou seja, se o cálculo não for pesado porém estamos passando para um componente filho, ainda sim, vale a pena utilizar o React.useMemo)

## 📄 useCallback

---

Diferente do useMemo o useCallback memoriza uma função, utilizado para evitar que uma função crie um novo espaço na memória

## ✏️ Formatação de dados

---

Já temos que trazer os dados formatados para os outros componentes e não formatar quando a informação chegar no componente. Realizando esse processos na hora que requisitamos os dados evitamos que tenhamos que utilizar o useMemo | useCallback em alguma parte do código.

## 🃏 Dynamic import - Code-splitting

---

Tem o poder de importar alguma funcionalidade somente no momento que a funcionalidade será utilizada.

Em React:

```tsx
import { lazy } from 'react'
```

Em Next

```tsx
import dynamic from 'next/dynamic'

/* Se você usa com export default */
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  import('./AddProductToWishlist')
})

/* Se você não usa com export default */
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import('./AddProductToWishlist').then((mod) => mod.AddProductToWishlist)
  },
  {
    loading: () => <span>Carregando...</span>,
  }
)
```

Também podemos fazer essa importação dinâmica com funções

```tsx
async function algumaFunc() {
  const { format } = await import('date-fns')

  format()
}
```

## 🔄 Virtualização

---

```tsx
import {
  List,
  ListRowRenderer /* AutoSizer (para ocupar o tamanho da tela toda)*/,
} from 'react-virtualized'
```

```tsx
<List
  height={300} /* tamanho da nossa lista */
  rowHeight={30} /* cada linha tem 30px de altura */
  width={900}
  overscanRowCount={5} /* significa que renderizará 5 itens a mais do que está demostrado na tela */
  rowCount={results.length} /* quantos itens tem na lista */
  rowRenderer={rowRender} /* uma função que renderizará a lista */
/>
```

exemplo de função

````tsx
const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        {' '}
        {/* style controla basicamente se o elemento está visivel ou não em tela */}
        <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
      </div>
    )
  }
```
````

## 🔧 Bundle Amalyzer

---

Analisar e ver as depêndencias e o tanto que elas estão empactando no código final do nosso app

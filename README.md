# Optimze React App

## Quando o React realiza a renderização do componente

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

## Fluxo de renderização

1. Gerar uma nova versão do compnente que precisa ser renderizado.
2. Compara essa nova versão com a versão anterior já salva na página.
3. Se houver alguma alteração, o React renderiza essa nova versão em tela.

Com o reconcilation do React ele consegue recalcular quais são as diferenças (Componente, propriedades, atributos, hooks)

## React.memo

Faz um shallow compare (comparação rasa)
comparando a iguakdade referencial

### Quando devo utilizar o React.memo?

1. Componente de funções puras
2. Componentes que renderizam demais
3. Qunado o Componente reenderiza com as mesmas props
4. Se o componente for médio pra grande, a utilização ganha mais performace, caso contrário. até em alguns casos não compensa utilizar o 'memo', pois o custo pro react usar o 'memo' é maior que fazer o fluxo de renderização, assim, não valendo a pena.

## UseMemo

O useMemo guarda o valor de retorno na memória para que a função não calcule algo que não tenha necessidade

### Quando devo utilizar o React.useMemo?

1. Cálculos pesados (Não usé para cálculos simples, pois há um custo de processamento para o useMemo, ficando assim mais lento do que antes)
2. Igualdade referencial(quando a gente repassa a informação para um componente filho, ou seja, se o cálculo não for pesado porém estamos passando para um componente filho, ainda sim, vale a pena utilizar o React.useMemo)

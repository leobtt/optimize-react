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

Com o reconcilation do React ele consegue recalcular quais são as diferenças (Componente, propriedades, atributos , hooks)

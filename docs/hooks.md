## Funciones de Manipulacion

Antiguamente solo era posible acceder a algunas funcionalidades como el ciclo de vida, a través de clases, pero a partir de la _versión 16.8_ de React se introdujeron low __hooks__ que permiten utilizar recursos de forma sencilla. Estos permiten reutilizar la lógica de estado sin cambiar la jerarquía de los componentes. Esto facilita el compartir Hooks entre muchos componentes o incluso la comunidad.

## Tabla de Contenidos
* [Reglas](#reglas)
* [Estado](#Estado)
  * useState
  * useReducer
* [Efecto](#Efecto)
  * useEffect
  * useLayoutEffect
* [Contexto](#Contexto)
  * useContext
* [Referencia](#Referencia)
  * useRef
  * useImperativeHandle
* [Rendimiento](#Rendimiento)
  * useCallback
  * useTransition
* [Hooks Personalizados](#hooks-personalizados)
* [Ejemplos Prácticos](#ejemplos-prácticos)

### Reglas

* __Invocacion__: No se deben llamar Hooks dentro de bucles, condicionales o funciones anidadas. Siempre se utilizan _en el nivel superior de un componente funcional_.
* __Definicion__: No se deben llamar Hooks desde funciones JavaScript regulares. En su lugar, se pueden llamar _desde componentes funcionales de React o desde otros Hooks_.

### Estado

* __useState (`initialState`)__: Devuelve un valor con estado y una función para actualizarlo. Durante el renderizado inicial, el estado devuelto `state` es el mismo que el valor pasado como `initialState`
  ```jsx
  import { useState } from 'react';
  function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1)
    return <button onClick={increment}>clicks {count}</button>
  }
  ```
* __useReducer (`reducer`,`initialArg`,`init`?)__: Acepta un reducer de tipo __(`state`,`action`)=>`newState`__ y devuelve el estado actual emparejado con un _método dispatch_. Permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks
  ```jsx
  import { useReducer } from 'react';
  const initialState = {count: 0};
  function reducer(state,action){
  switch (action.type) {
    case 'increment': return {count: state.count+1};
    case 'decrement': return {count: state.count-1};
    default: throw new Error();
  }}
  function Counter() {
    const [state,dispatch] = useReducer(reducer, initialState);
    return (
    <p>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
      {state.count}
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
    </p>
  )}
  ```

### Efecto

* __useEffect (`setup`, `dependencies`)__: Acepta una función que contiene código imperativo, posiblemente código efectivo. Por defecto, los efectos se ejecutan después de cada renderizado completado, pero puede elegir ejecutarlo solo cuando ciertos valores han cambiado.
  ```jsx
  import { useState, useEffect } from 'react';
  function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => setTime(time => time + 1), 1000);
      return () => clearInterval(timer);
    },[]);
    return <p>{time} segundos</p>;
  }
  ```
* __useLayoutEffect(`effect`,`deps`)__: Similar a `useEffect`, pero se ejecuta sincrónicamente después de que _el DOM haya sido actualizado_. `effect` es una función de _efectos secundarios_ y opcionalmente una función de limpieza. deps es un array de dependencias.
  ```jsx
  import { useState, useLayoutEffect, useRef } from 'react';
  function Animation() {
    const titleRef = useRef()
    useLayoutEffect(() => {
      window.onresize = () => { 
        const css = titleRef.current.style
        css.fontSize = window.innerWidth < 600 ? "15vw" : "5rem",
        css.transition = "all .5 ease"
      }
    },[]);
    return <h1 ref={titleRef}> Bienvenido </h1>
  }
  ```
### Contexto

* __useContext (`context`)__: Acepta un objeto de contexto (devuelto por _React.createContext_) y devuelve el contexto actual, determinado por la propiedad value del __<MyContext.Provider>__ ascendentemente más cercano en el árbol al componente que hace la llamada
  ```jsx
  import { useContext, createContext } from 'react';
  const ThemeContext = createContext('claro');
  function ThemeButton(){
    const theme = useContext(ThemeContext);
    const background = theme==='claro'?'#eee':'#333'
    return <button style={{background}}>Tema {theme}</button>
  }
  const App = () =>
  <ThemeContext.Provider value="oscuro">
    <ThemeButton/>
  </ThemeContext.Provider>
  ```

### Referencia

* __useRef(`initialValue`)__: Devuelve un objeto mutable cuya propiedad _current_ se inicializa con el argumento pasado como `initialValue`, que se mantendrá persistente durante la vida completa del componente
  ```jsx
  import { useRef, useState } from 'react';
  function Counter() {
    const ref = useRef();
    const [value, setValue] = useState('');
    const onChange = () => setValue(ref.current.value)
    return <input type="number" {...{ref, value, onChange}}/>
  }
  ```
* __useImperativeHandle	(`ref`,`createHandle`)__	Personaliza el objeto de referencia expuesto por un componente hijo. `ref` es el objeto ref que se pasa desde el componente padre. `createHandle` es una función que retorna un objeto con propiedades y métodos que serán expuestos al componente padre.

### Rendimiento

* __useCallback(`fn`, `dependencies`)__: Pasa un callback en línea y un arreglo de dependencias. useCallback devolverá una versión memorizada que solo cambia si una de las dependencias ha cambiado. Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renderizados innecesarios
  ```jsx
  import { useState, useCallback } from 'react';
  function Counter() {
    const [count,setCount] = useState(0);
    const increment = useCallback(() => {setCount(count + 1)},[count]);
    return <button onClick={increment}>Total:{count}</button>
  }
  ```
* __useTransition()__: Marca una transición de estado como no bloqueante. Permite que actualizaciones importantes interrumpan la transición. Retorna un array con una función startTransition y un valor booleano isPending
  ```jsx
  import { useState, useTransition } from 'react';
  const setArray = (n) => Array.from({ length: n }, (_, i) => i+1);
  const List = ({ numbers, pow }: Product) => pow.map((p) => 
  <ul key={p}>
    { numbers.map(n => <li key={n}>{p}^{n}={p **n}</li>) }
  </ul> )
  function App() {
    const [isPending, startTransition] = useTransition();
    const [items, setItems] = useState<Product | null>(null);
    const handleClick = () => {
      startTransition(() => {
        const pow = setArray(100);
        const numbers = setArray(10);
        setItems({ numbers, pow });
      })
    }
  return (
    <>
      <button onClick={handleClick}>Load numbers</button>
      {isPending ? <p>Loading...</p> : items && <List {...items} />}
    </>
  )}
  ```

[volver](../readme.md)
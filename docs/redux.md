## Redux

Es una biblioteca para la administración del estado en aplicaciones JavaScript, utilizada comúnmente con React, pero agnóstica de la UI.
   
* __Estado único__: Toda la información de la aplicación se almacena en un único objeto.
* __Solo lectura__: La única forma de modificar el estado es enviando una acción describiendo los cambios.
* __Funciones Puras__: Los cambios en el estado se realizan a través de funciones reducers.

### Tabla de Contenidos

* [componentes](#componentes)
    * store
    * actions
    * reducers
* [caracteristicas](#caracteristicas)
    * sincronicidad
    * asincronicidad
    * control de flujo
    * configuracion basica
* [Redux Toolkit](#redux-toolkit-rtk)
    * [configuracion](#configuracion-rtk)
    * [implementacion](#implementacion-rtk)

### Componentes
   
* __Store__: Almacén central que contiene el estado de la aplicación. Solo debe haber una única store en una aplicación Redux.
    ```js
    import { createStore } from 'redux';
    const store = createStore(reducer);
    ```
* __Actions__: Las acciones son objetos que describen lo que sucedió. Son el único medio para modificar el estado en Redux.
    ```js
    const increment = () => ({ type: 'INCREMENT' })
    ```
* __Reducers__: Funciones puras que toman el _estado actual y una acción_, y devuelven un nuevo estado.
    ```js
    const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT': 
            return state - 1;
        default: 
            return state;
    } }
    ```

### Caracteristicas

* __Sincrónicidad__: Son las acciones que modifican el estado de manera inmediata.
    ```js
    const increment = () => ({ type: 'INCREMENT' });
    store.dispatch(increment());
    ```
* __Asincrónicidad__: Para manejar acciones que requieren tiempo, como solicitudes a servidores.
    ```js
    const fetchUser = () => (dispatch) => 
    fetch('/user')
    .then(response => response.json())
    .then(payload => dispatch({type:'FETCH_USER_SUCCESS', payload}))
    .catch(error => dispatch({type:'FETCH_USER_FAILURE', error}));
    ```  
* __Control de Flujo__: Los middlewares son funciones que interceptan las acciones enviadas antes de que lleguen al reducer.
    ```js
    import logger from 'redux-logger';
    const store = createStore(reducer, applyMiddleware(logger));
    ```
* __Configuracion basica__: Herramientas de desarrollo (_DevTools_) para depurar aplicaciones Redux.
    ```js
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    ```

### Redux Toolkit (RTK)

Conjunto de herramientas que simplifican el uso de Redux, optimizando su eficiencia y reduciendo la cantidad de código necesario. Es la forma recomendada para escribir la lógica de Redux en aplicaciones modernas de React. RTK envuelve muchas de las funciones de Redux, facilitando la configuración del estado, la creación de reducers y el manejo de lógica asincrónica.

#### Configuracion RTK

*  __Store__: se crea utilizando la función `configureStore()`. Esta función no solo crea la tienda, sino que también aplica configuraciones útiles como la integración con DevTools y la configuración predeterminada de middlewares.
    ```js
    import { configureStore } from '@reduxjs/toolkit';
    const store = configureStore({
        reducer: rootReducer, // combina todos los slices
    });
    ```
*  __Reducers__: Los reducers en RTK se definen dentro de un `slice`, utilizando `createSlice()`. RTK maneja internamente la inmutabilidad del estado gracias a la librería `Immer`, lo que te permite modificar el estado directamente sin preocuparte por mutaciones.
    ```js
    const counterSlice = createSlice({
        name: 'counter ',
        initialState: 0,
        reducers: {
            increment : (state) => state + 1,
            decrement : (state) => state - 1,
        },
    });
    export default counterSlice.reducer;
    ```
*  __Actions__: no es necesario escribir manualmente las acciones. Utilizando la API `createSlice()`, se generan automáticamente las acciones junto con los reducers. Cada `slice` tiene su propio conjunto de acciones y reducers.
    ```js
    export const { 
        increment , 
        decrement  
    } = counterSlice.actions;
    ```

#### Implementacion RTK

*  __Sincronicidad__: Las acciones síncronas funcionan igual en RTK. Las acciones son enviadas y el estado se modifica de inmediato.
   ```js
   store.dispatch(increment ());
   ```
*  __Asincronicidad__: RTK facilita el manejo de operaciones asincrónicas con `createAsyncThunk()`. Esto simplifica la gestión de solicitudes a servidores, eliminando la necesidad de escribir manualmente los `dispatch()` y los estados intermedios (cargando, éxito, error).
    ```js
    import { createAsyncThunk } from '@reduxjs/toolkit';

    export const getUser  = createAsyncThunk(
        'user /getUser ',
        async () => {
        const respuesta = await fetch('/user ');
        return respuesta.json();
        }
    );
    ```
*  __Control de Flujo__: Aunque RTK no cambia el concepto de middlewares en Redux, facilita su integración. La función `configureStore` incluye `redux-thunk` de manera predeterminada.
    ```js
    import { configureStore } from '@reduxjs/toolkit';
    import logger from 'redux-logger';

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    });
    ```
*  __Configuración básica__: RTK ya tiene configurado DevTools de forma predeterminada, por lo que no es necesario hacer configuraciones adicionales para habilitar la extensión en el navegador.
    ```js
    import { configureStore } from '@reduxjs/toolkit';
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,  // Habilitado por defecto
    });
    ```
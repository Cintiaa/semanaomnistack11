import React from 'react';
import './global.css';
import Routes from './routes';


/**
 * JSX - Quando o HTML está integrado dentro do javascript
  */

/**
 * Estado - Informação que o componente precisa manter
 * Imutabilidade: Por questões de performance não se pode manipular a variável de estado de forma direta
 */

function App() {
  /* let [counter, setCounter] = useState(0);
  //Retorna um array [valor, funcção de atualizao desse valor]

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  ); */

  return (
    <Routes />
  );
}

export default App;

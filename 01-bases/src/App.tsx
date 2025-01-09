import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffects } from './bases/CounterEffects';
import './index.css';

function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <hr />

      <Counter initialValue={30}/>
      <CounterBy/>
      <CounterEffects/>
    </>
  )
}

export default App

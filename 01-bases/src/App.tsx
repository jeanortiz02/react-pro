import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffects } from './bases/CounterEffects';
import { CounterHook } from './bases/CounterHook';
// import { CounterReducerComponent } from './bases/CounterReducer';
import { CounterReducerComponent } from './counter-reducer/CounterReducer';
import './index.css';

function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <hr />

      <Counter initialValue={30}/>
      <CounterBy/>
      <CounterEffects/>
      <CounterHook/>
      <CounterReducerComponent/>
    </>
  )
}

export default App

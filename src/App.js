import './App.css';
import Counter from './component/Counter';
import CounterDis from './component/CounterDis';

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <Counter />
      <h1>redux</h1>
      <CounterDis />
        </div>
  );
}

export default App;

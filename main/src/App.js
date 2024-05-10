import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import TodoApp from './Component/TodoApp';
import DataFetching from './Component/DataFetching';

function App() {
  return (
    <div className="App">
   {/* <Counter/>
   <TodoApp/> */}
   <DataFetching/>
    </div>
  );
}

export default App;

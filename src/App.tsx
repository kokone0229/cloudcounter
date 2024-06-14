import './App.css';
import { useState } from 'react';

const IncButton = ({diff, val, setVal}: {
  diff: number,
  val: number,
  setVal: React.Dispatch<React.SetStateAction<number>>
}) => {
  const clicked = () => {
    setVal(val + diff);
  }
  return(
    <button onClick={clicked}>{diff}</button>  //{}押されたときに呼ぶ関数をかく
  );
};

function App() {
  const [cnt, setCnt] = useState(0);
  return (
    <div className="App">
      <IncButton diff={-1} val={cnt} setVal={setCnt}/>
      {cnt}
      <IncButton diff={1} val={cnt} setVal={setCnt}/>
    </div>
  );
}

export default App;

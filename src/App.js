// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ToolTip from './ToolTip';

function App() {
  let [position, setPosition] = useState('right');

  const onTopBtnClick = () => {
    setPosition('top');
  }

  const onBottomBtnClick = () => {
    setPosition('bottom');
  }

  const onLeftBtnClick = () => {
    setPosition('left');
  }

  const onRightBtnClick = () => {
    setPosition('right');
  }

  return (
    <div>
      <ToolTip position = {position} />
      <div className='btns' style={{marginTop: '100px'}}>
        <button onClick={onTopBtnClick}>Top</button>
        <button onClick={onBottomBtnClick}>Bottom</button>
        <button onClick={onLeftBtnClick}>Left</button>
        <button onClick={onRightBtnClick}>Right</button>
      </div>
    </div>
  );
}

export default App;

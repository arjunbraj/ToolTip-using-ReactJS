// for using state
import { useState } from 'react';

// importing ToolTip component
import ToolTip from './ToolTip';

function App() {
  // setting up position variable to get the position for the tooltip
  let [position, setPosition] = useState('right');

  // function to set position as top when button is clicked
  const onTopBtnClick = () => {
    setPosition('top');
  }

  // function to set position as bottom when button is clicked
  const onBottomBtnClick = () => {
    setPosition('bottom');
  }

  // function to set position as left when button is clicked
  const onLeftBtnClick = () => {
    setPosition('left');
  }

  // function to set position as right when button is clicked
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

import Player from './components/Player.jsx';
import Timerchallenge from './components/Timerchallenge.jsx';

function App() {
  return (
    <>
   
      <Player />
      <div id="challenges">
        <Timerchallenge title="Easy" targettime={1}/>
        <Timerchallenge title="Medium" targettime={5}/>
        <Timerchallenge title="Hard" targettime={10}/>
        <Timerchallenge title="Pro Only" targettime={15}/>
      </div>

     
    </>
  );
}

export default App;

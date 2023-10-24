import Countdown from './components/Countdown'

function App() {
  const birthday = new Date('Dec 1,2023 08:05').getTime()
  console.log(birthday);
  return (
   <div>
    <Countdown birthday={birthday} />
   </div>
  );
}

export default App;

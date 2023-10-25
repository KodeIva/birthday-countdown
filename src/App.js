import Countdown from './components/Countdown'

function App() {
  const birthday = new Date('Dec 1,2023 08:05').getTime()
  console.log(birthday);
  return (
   <div className='flex justify-center items-center h-screen w-full bg-blue-50'>
    <Countdown birthday={birthday} />
   </div>
  );
}

export default App;

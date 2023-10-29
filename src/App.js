import Countdown from './components/Countdown'

function App() {
  const birthday = new Date('Oct 29,2023 08:05').getTime()
  console.log(birthday);
  return (
   <div className='flex justify-center items-center h-screen w-full font-happy bg-blue-50'>
    <Countdown birthday={birthday} />
   </div>
  );
}

export default App;

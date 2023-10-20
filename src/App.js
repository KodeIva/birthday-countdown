

function App() {
  const birthday = new Date('Dec 1,2023 09:00').getTime()
  console.log(birthday);
  return (
   <div>
    <span>{birthday}</span>
   </div>
  );
}

export default App;

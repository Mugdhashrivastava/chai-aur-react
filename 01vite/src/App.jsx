import Chai from "./chai";

function App() {
  const inputHandler = (event) => {
    console.log(event.target.value);
  }

  return (
    <>
      <h1>mugzz aur react</h1>
      <p>test para</p>
      <Chai type="text" onChange={inputHandler} />
      
    </>
  );
}

export default App;



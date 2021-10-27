import { useState } from "react";
import { Message } from "./components/Message/Message";
import { Counter } from "./components/Counter/Counter";
import "./App.scss";

function App() {
  const [text, setText] = useState("I am a GB student");

  const handleClick = () => {
    alert("click");
    setText(Math.floor(Math.random()*100));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} onMessageClick={handleClick} />
        <p>My First React App</p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
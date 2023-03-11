import {React, useState} from "react";

function App() {

  const [word, setWord] = useState("")


  function handleChange(event){
    setWord(event.target.value)
  }

  function sendApi() {
    console.log("click")
    
    const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=e310c050-e024-4fb8-b013-fc82a6786891`
    let req = new Request(url);
  
    fetch(req)
      .then(function(response) {
          return (response.json());
      }).then(function(response) {
        console.log(response)
      }).catch(function(error) {
        console.log(error)
      })
  }

  return (
    <div className="App">
      
        <label>Choose a word</label>
        <input            
           type="text"
            placeholder='Word'
            name="word"
            onChange={handleChange}
            value={word}
        />
      <button onClick={sendApi}>Send Api</button>
      <p>{word}</p>
    </div>
  );
}

export default App;

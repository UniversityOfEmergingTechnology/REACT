import {useState , useEffect} from 'react'
function App() {
  const [text,setText] = useState("")

  function handleTextChange(event){
    setText(event.target.value)
    // console.log(text)
  }

  // useEffect(()=>{
  //   console.log("App component is rendered")
  // })

  // useEffect(()=>{
  //   console.log("App component is rendered")
  // },[])

  useEffect(()=>{
    console.log(text)
    console.log("Change observed")
  },[text])



  return (
    <div>
    <input type="text" onChange={handleTextChange} />
    </div>
  );
}

export default App;

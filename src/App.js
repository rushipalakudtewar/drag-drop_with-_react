import { useState } from "react";
import Notes from "./components/Notes";

function App() {
  const [notes,setNotes] = useState([
    {
      id:1,
      content:"Hello this new for me"
    },
    {
      id:2,
      content:"Hello this new for me2"
    }
  ])

  return (
   <div>
    <Notes notes={notes} setNotes={setNotes}/>
   </div>
  );
}

export default App;

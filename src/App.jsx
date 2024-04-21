import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      justifyContent : "space-around",
      border: "1px solid black",
      boxShadow: "1px 1px 3px",
      padding: "10px 2px",
      background: "black",
      margin : "0",
      color: "white",
      cursor: "pointer"
    }}>
      <div onClick={()=>navigate('/assignment1')}>Profile</div>
      <div onClick={()=>navigate('/assignment2')}>Background Changer</div>
      <div onClick={()=>navigate('/assignment3')}>Assignment-3</div>
      <div onClick={()=>navigate('/assignment4')}>Para Generator</div>
      <div onClick={()=>navigate('/assignment5')}>Assignment-5</div>
      <div onClick={()=>navigate('/assignment6')}>Assignment-6</div>
      <div onClick={()=>navigate('/assignment7')}>Assignment-7</div>
    </div>
  )
}

export default App
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { nameAtom } from "../store/atom/name-atom"
import {useRef} from 'react'

export default function Assignment7(){
    return (
      <RecoilRoot>
      <div style={{
      height: "94.5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column',
      backgroundImage: "url('../../images.jfif')",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
        // backgroundColor: "blue"
    }}>
      
        <InputName />
        <BirthdayCards />
      
    </div>
        </RecoilRoot>
    )
}

function InputName(){
  const setName = useSetRecoilState(nameAtom)
  const nameRef = useRef(null)
  function submitName(){
    setName(nameRef.current.value)
  }
  return (<div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddddff",
    padding: "4vh 2vw",
    borderRadius: "5px",
    opacity: "0.7",
  }}>
  <div style={{
    fontSize: "30px",
    marginBottom: "5vh",
    color: "white",
    fontWeight: "bold",
  }}>Enter your name</div>
  <input 
    ref = {nameRef}
    style={{
    fontSize: "20px",
    padding: "0.3vh 0.3vw",
    width: "35vw",
    marginBottom: "5vh",
    border: "1px solid black",
    borderRadius: "5px",
  }} placeholder="Enter your name"></input>
  <button 
    onClick={submitName}
    style={{
    color:"white",
    backgroundColor: 'blue',
    padding: "1.5vh 1vw",
    borderRadius: "4px",
    border: "none"
  }}>Done</button>
  </div>)
}

function BirthdayCards(){
  return(<div style={{
    display: "flex",
    justifyContent: "space-evenly",
    width: "100vw"
  }}>
    <BirthdayCard1 />
    <BirthdayCard2 />
  </div>)
}

function BirthdayCard1(){
  const name = useRecoilValue(nameAtom)
  return(<div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }}>
    <div>
      Happy Birthday
    </div>
    <div>
      {name}
    </div>
  </div>)
}

function BirthdayCard2(){
  const name = useRecoilValue(nameAtom)
  return(<div>
    <div>
      Wish you a very happy Birthday
    </div>
    <div>
      {name}
    </div>
  </div>)
}
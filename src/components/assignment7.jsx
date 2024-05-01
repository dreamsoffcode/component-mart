import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { nameAtom } from "../store/atom/name-atom"
import {useRef, useState} from 'react'

export default function Assignment7(){
    const [screen, setScreen] = useState(1)
    return (
      <RecoilRoot>
      <div style={{
      height: "95vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column',
      backgroundImage: "url('../../images.jfif')",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
        // backgroundColor: "blue"
    }}>
      
        {screen == 1 && <InputName setScreen={setScreen}/>}
        {screen == 2 && <BirthdayCards setScreen={setScreen}/>}
      
    </div>
        </RecoilRoot>
    )
}

function InputName({setScreen}){
  const setName = useSetRecoilState(nameAtom)
  const nameRef = useRef(null)
  function submitName(){
    setName(nameRef.current.value)
    setScreen(2)
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
    marginBottom: "10vh",
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

function BirthdayCards({setScreen}){
  return(<div style={{
    display: "flex",
    justifyContent: "space-evenly",
    width: "100vw"
  }}>
    <button style={{
        border: 'none',
        borderRadius: '2px',
        alignSelf: 'flex-start',
        backgroundColor: '#F4C2C2',
        paddingTop: '3px',
        cursor: "pointer",
    }}
    onClick={()=>setScreen(1)}
    ><img width="20px" src="../../previous.png"></img></button>
    <BirthdayCard1 />
    <BirthdayCard2 />
  </div>)
}

function BirthdayCard1(){
  const name = useRecoilValue(nameAtom)
  return(<div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    fontSize: "40px",
    backgroundColor: "#F4C2C2",
    borderRadius: "10vw",
    padding: "7vh 7vw",

  }}>
    <div style={{
        fontFamily: "cursive",
        color: "green",
        
    }}>
      Happy Birthday
    </div>
    <div style={{
        color: "blue"
    }}>
      {name}
    </div>
  </div>)
}

function BirthdayCard2(){
  const name = useRecoilValue(nameAtom)
  return(<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center',
    fontSize: "40px",
    backgroundColor: "#F4C2C2",
    borderRadius: "10vw",
    padding: "7vh 7vw",
    maxWidth: "70vw"
  }}>
    <div style={{
        color: "yellow",
        fontFamily: "cursive",
    }}>
      Wish you a very happy Birthday 
    </div>
    <div style={{
        color: "red"
    }}>
      {name}
    </div>
  </div>)
}
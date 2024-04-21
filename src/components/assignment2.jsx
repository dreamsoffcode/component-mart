import {useRecoilValue, useSetRecoilState } from 'recoil'
import {backgroundColorAtom} from '../store/atom/assignment2'
export default function Assignment2(){

  const backgroundColor = useRecoilValue(backgroundColorAtom)
    const style={
      display: "flex",
      height: '95.1vh',
      justifyContent: 'center',
      alignItems: "flex-end",
      backgroundColor: backgroundColor,
      margin: 0,
    }
    return (
        <div style={style}>
            <Pallete></Pallete>
        </div>
    )
}

function Pallete(){
  const palletteStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: screen.width * 0.4,
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#FAF9F6",
    marginBottom: '5vh'
  }
  return (
    <div style={palletteStyle}>
      <ColorButton color={"red"}></ColorButton>
      <ColorButton color={"yellow"}></ColorButton>
      <ColorButton color={"black"}></ColorButton>
      <ColorButton color={"purple"}></ColorButton>
      <ColorButton color={"green"}></ColorButton>
      <ColorButton color={"blue"}></ColorButton>
      <ColorButton color={"default"}></ColorButton>
    </div>
  )  
}

function ColorButton({color}){

  const setBackgroundColor = useSetRecoilState(backgroundColorAtom)
  
  const buttonStyle = {
    backgroundColor: color,
    border: "none",
    borderRadius: "10px",
    padding: "5px 19px",
    fontSize: "15px",
    cursor: "pointer",
  }
  if (color == 'black'){
    buttonStyle.color = "white"
  }else if(color == 'default'){
    buttonStyle.backgroundColor = 'orange'
  }
  
  return (
    <button style={buttonStyle} onClick={(e)=>{
      console.log(color)
      if(color == 'default'){
        setBackgroundColor('white')
      }
      else setBackgroundColor(color)
    }}>{color}</button>
  )
  
}
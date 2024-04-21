import { useSetRecoilState, useRecoilValue, RecoilRoot } from "recoil"
import { wordsAtom } from "../store/atom/words-atom"
import {useRef} from 'react'
import { paraSelector } from "../store/selector/para-selector"

export default function Assignment4() {
  const style = {
    height: "93vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  }
  const cardStyle = {
    marginTop: "20vh",
    display: "flex",
    flexDirection: "column",
    justifyConent: "center",
    alignItems: "center",
    fontWeight: "bold",
  }
  const headingStyle = {
    marginBottom: "5vh",
    fontSize: "40px",
  }
  return (
    <div style={style}>
      <div style={cardStyle}>
        <div style={headingStyle}>
          Para Generator
        </div>
        <RecoilRoot>
          <Input />
          <Paragraph />
        </RecoilRoot>
      </div>
    </div>
  )
}

function Input() {
  const setWords = useSetRecoilState(wordsAtom)
  const inputRef = useRef(null);
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "22px",
    padding: "12px 30px",
    cursor: "pointer",
  }
  const inputStyle = {
    fontSize: "22px",
    padding: "12px",
    marginRight: "40px",
    width: "60vw"
  }
  function generate(){
    try{
      const words = parseInt(inputRef.current.value)
      if(isNaN(words) || words <= 0 || words > 1000)throw new Error('error')
      setWords(words)
    }catch(err){
      window.alert('Please enter a valid number between 1 and 1000')
    }
  }
  return (
    <div>
      <input ref={inputRef} style={inputStyle} placeholder="Enter number of words" />
      <button style={buttonStyle} onClick={generate}>Generate</button>
    </div>
  )
}

function Paragraph(){
  const paragraph = useRecoilValue(paraSelector)
  const paraStyle = {
    fontSize: '14',
    fontWeight: 'bold',
    display: 'flex',
    justifyConent: 'center',
    font: 'arial',
    marginTop: "10vh",
    marginBottom: "1vh",
    marginLeft: "2vw",
    marginRight: "2vw",
  }
  return (
    <div style={paraStyle}>
      {paragraph}
    </div>
  )
}

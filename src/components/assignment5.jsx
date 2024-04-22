import axios from "axios";
import { useEffect } from "react";

export default function Assignment5(){
 useEffect(()=>{
    axios.get("https://api.github.com/users/dreamsoffcode")
 }, [])
    
 
 
 return (
    <div style={{
        height: '92.7vh',
        // flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <InputUsername />
    </div>
 )
}

function InputUsername(){
    return (
        <div style={{
            display: "flex",
            width: "70vw",
            justifyContent: 'center',
        }}>
            <input style={{
                flexGrow: 1,
                marginLeft: '3vw',
                marginRight: '2vw',
                padding: '5px',
                fontSize: "22px",
            }}
            placeholder="Enter your github username"
            />
            <button style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "22px",
                padding: "12px 30px",
                cursor: "pointer",
            }}>
                Submit
            </button>
        </div>
    )
}
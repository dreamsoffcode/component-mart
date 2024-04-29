import { useState, useRef } from "react"

export default function Assignment6(){
    return (
        <div style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '95.4vh',
            backgroundColor: 'black',
            color: 'white',
        }}>
            <OTPVerification></OTPVerification>
        </div>
    )
}


function OTPVerification(){

    const [screen, setScreen] = useState(1)
    
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid white',
            borderRadius: '10px 10px',
            padding: '3vh 3vw',
        }}>
            <div style={{
                fontSize: '30px',
                marginBottom: '5vh',
            }}>Login Via OTP</div>
            {screen ==  1 && <GetMobile setScreen={setScreen}></GetMobile>}
            {screen == 2 && <GetOTP setScreen={setScreen}></GetOTP>}
        </div>
    )
}

function GetMobile({setScreen}){
    function sendOTP(){
        setScreen(2)
    }

    return (<div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <input style={{
            border: '1px solid white',
            borderRadius: '5px',
            width: '20vw',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '20px',
            padding: '1vh 1vw'
        }}placeholder="Enter your mobile number"></input>
        <button style={{
            marginTop: '3vh',
            marginBottom: '10vh',
            border: '1px solid white',
            borderRadius: '5px',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '20px',
            padding: '1vh 1vw',
            cursor: 'pointer',
        }}
        onClick={sendOTP}>Send OTP</button>
    </div>)
}

function GetOTP({setScreen}){

    const digit1Ref = useRef(null)
    const digit2Ref = useRef(null)
    const digit3Ref = useRef(null)
    const digit4Ref = useRef(null)

    const inputStyle = {
        border: '1px solid white',
        borderRadius: '5px',
        // width: '1.3vw',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        padding: '1vh 1vw',
        marginRight: '1vw',
    }

    function submitOTP(){
        setScreen(1)
    }

    function moveToNext(event){
        const ref = event.target
        const value = event.target.value
        
        if(value){
            if(ref == digit1Ref.current)digit2Ref.current.focus()
            if(ref == digit2Ref.current)digit3Ref.current.focus()
            if(ref == digit3Ref.current)digit4Ref.current.focus()
        }
        
    }

    return (<div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}> 
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <input ref={digit1Ref} onChange={moveToNext} style={inputStyle} type="text" size="1" maxLength="1"></input>
            <input ref={digit2Ref} onChange={moveToNext} style={inputStyle} type="text" size="1" maxLength="1"></input>
            <input ref={digit3Ref} onChange={moveToNext} style={inputStyle} type="text" size="1" maxLength="1"></input>
            <input ref={digit4Ref} style={inputStyle} type="text" size="1" maxLength="1"></input>
        </div>
        <button style={{
            marginTop: '3vh',
            marginBottom: '10vh',
            border: '1px solid white',
            borderRadius: '5px',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '20px',
            padding: '1vh 1vw',
            cursor: 'pointer',
        }}
        onClick={submitOTP}>Login</button>
        
    </div>)

}
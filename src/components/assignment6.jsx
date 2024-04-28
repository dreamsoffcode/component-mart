export default function Assignment6(){
    return (
        <div style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '92.6vh'
        }}>
            <OTPVerification></OTPVerification>
        </div>
    )
}


function OTPVerification(){
    
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                fontSize: '20px',
                marginBottom: '5vh',
            }}>Login Via OTP</div>
            {/* <GetMobile></GetMobile> */}
            {/* <GetOTP></GetOTP> */}
        </div>
    )
}

function GetMobile(){
    function sendOTP(){

    }

    return (<div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <input placeholder="Enter your mobile number"></input>
        <button onClick={sendOTP}>Send OTP</button>
    </div>)
}

function GetOTP(){

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
            <input></input>
            <input></input>
            <input></input>
            <input></input>
        </div>
        <button>Login</button>
        
    </div>)

}
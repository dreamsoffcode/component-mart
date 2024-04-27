import React from "react";
import { useEffect, useRef } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { usernameAtom } from "../store/atom/usernameAtom";
import { githubSelector } from "../store/selector/github-selector";

export default function Assignment5(){

    const headingStyle = {
        marginBottom: "5vh",
        fontSize: "40px",
    }

    return (
        <div style={{
            height: '92.7vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={headingStyle}>
                Github Card
            </div>
            <RecoilRoot>
                <InputUsername />
                <React.Suspense fallback={<div>Loading...</div>}>
                    <GithubCard></GithubCard>
                </React.Suspense>
            </RecoilRoot>
        </div>
    )
}

function InputUsername(){
    const usernameRef = useRef(null)
    const setUsernameAtom = useSetRecoilState(usernameAtom)
    function submitUsername(){
        // console.log(usernameRef.current.value)
        setUsernameAtom(usernameRef.current.value)
    }
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
            ref={usernameRef}
            />
            <button style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "22px",
                padding: "12px 30px",
                cursor: "pointer",
            }}
            onClick={submitUsername}>
                Submit
            </button>
        </div>
    )
}

function GithubCard(){

    const {data, _error} = useRecoilValue(githubSelector)

    
    if(_error){
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            marginTop: '5vh',}}>
            Please Enter a valid Github Username
        </div>
    }

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            marginTop: '5vh',
            
        }}>
            <img src={data.avatar_url} style={{
                borderRadius: '50%',
                height: "30vh",
                border: '1px solid black',
            }} alt=""></img>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <a  style={{
                    color: 'black',
                    marginTop: '2vh',
                    fontSize: '18px',
                }} href={data.html_url}>{data.login}</a>
            </div>
            
        </div>
    )
}
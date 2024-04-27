import { selector, useSetRecoilState } from "recoil"
import { usernameAtom } from "../atom/usernameAtom"
import axios from "axios"



export const githubSelector = selector({
    key: 'githubSelector',
    get: async ({get})=>{
        console.log("hello world")
        const username = get(usernameAtom)
        console.log(username)
        try{
            const gitProfile = await axios.get(`https://api.github.com/users/${username}`)
            return gitProfile
        }catch(err){
            return {
                "_error": true
            }
        }
        
        
    }
})
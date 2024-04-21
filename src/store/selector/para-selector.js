import {selector} from 'recoil'
import { wordsAtom } from '../atom/words-atom'

export const paraSelector = selector({
    key: 'paraSelector',
    get: ({get})=>{
        const words = get(wordsAtom)
        let para = ""
        for(let i = 0; i < words; i++){
            const wordLen = Math.ceil(2 + Math.random()*5)
            for(let j = 0; j < wordLen; j++){
                para += String.fromCharCode(97 + Math.ceil(Math.random()*25))
            }
            para+=' '
        }
        return para;
    }
})
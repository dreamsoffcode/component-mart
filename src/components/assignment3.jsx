import { useEffect } from "react"

export default function Assignment3(){
    const element = {
        type: 'a',
        href: 'https://github.com/dreamsoffcode',
        innerHTML: 'Click me to visit Google'
    }

    function generateHTML(element){
        const HTMLElement = document.createElement(element.type)
        HTMLElement.innerHTML = element.innerHTML
        HTMLElement.href = element.href
        return HTMLElement
    }

    function customRender(element, id){
        if(document.getElementById(id))document.getElementById(id).appendChild(element)
    }

    useEffect (()=>customRender(generateHTML(element), "div1"), [])
    return (
        <div id="div1"></div>
    )
}



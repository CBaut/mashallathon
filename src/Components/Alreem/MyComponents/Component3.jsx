import style from './Component1.module.css'
import { useState } from 'react'

function Component3() {
    const [img, setimg] = useState("data:image/jpeg;base64,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")
    const [isClicked, setisClicked]= useState('')
    const handleClick = (e) => {
        console.log(isClicked)
        setisClicked('true')
        alert('look down :)')
    }

    return (
    <div>
        <img
            src={img}
            alt="img"
            className={ isClicked ? style.clicked: style.notclicked }
        />
        <button onClick={ handleClick }>Don't click me!</button>
    </div>
    )
}

export default Component3
import { useState } from "react"

const Page3 = () => {
    
    const [array, setArray] = useState([]);

    const [txt, setText] = useState("");
    const submitEvent = e => {
        e.preventDefault()
        if (txt === '') {return}
        setArray([txt, ...array])
        setText('')
    }
    
    return (
        <form onSubmit={submitEvent}>
            <input type='text' placeholder="글 작성하세요" value={txt} onChange={e => {
                console.log('input: ',e.target.value)
                setText(e.target.value)}} />
            <button type='submit'>입력</button>
            <div>
                {
                    array.map((v, i) => <p key={i}>{v}</p>)
                }
            </div>
        </form>
    )
}

export default Page3;
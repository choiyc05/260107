import { useState } from "react"

const Page2 = () => {

    const [num, setData] = useState(0);

    const event = () => setData(num + 1)

    return (
        <>
            <p style={{background:"#ff0"}}> 번호 : {num}</p>
            <button type="button"
            style = {{cursor: 'pointer'}} 
            onClick={event}>증가</button>
            <h1>{num}</h1>
        </>
    )
}

export default Page2;
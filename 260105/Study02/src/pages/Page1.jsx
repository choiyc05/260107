import { useState } from "react"

const Page1 = () => {
    console.log("app호출")
    const [data, setData] = useState("A");
    let 변수 = 0;
    

    const event = () => {
        console.log("1", data)
        setData("AA")
        console.log("2", data)
    }

    return (
        <>
            <button type="button" onClick={event}>증가</button>
            <h1>{data}</h1>
        </>
    )
}

export default Page1;
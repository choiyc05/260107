import { useState } from "react"
import { useNavigate } from 'react-router'

const Page4 = () => {

    const navigate = useNavigate()

    const routerMain = () => {
        navigate('/')
    }

    const [data, setData] = useState({ "name": "", "email": "", "pwd": "", "gender": true })
    const onChange = (e) => {
        let targetId = e.target.id
        let targetValue = e.target.value
        setData({ ...data, [targetId]: targetValue })
        if (targetId === "radio1") setData({ ...data, "gender": true })
        else if (targetId === "radio2") setData({ ...data, "gender": false })
        //e.target의 name에 따라 value 저장
        //e.target이 gender면 
    }

    const OnSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container mt-3">
            <h1 className="display-1 text-center">사용자 등록</h1>
            <form onSubmit={OnSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">이름:</label>
                    <input type="text" value={data.name} className="form-control" id="name" placeholder="이름을 입력하세요." name="name" onChange={onChange} />
                    <p>{data.name}</p>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">이메일:</label>
                    <input type="email" value={data.email} className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" onChange={onChange} />
                    <p>{data.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">비밀번호:</label>
                    <input type="password" value={data.pwd} className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" onChange={onChange} />
                    <p>{data.pwd}</p>
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="gender" value={true} checked={data.gender === true} onChange={onChange} />남성
                            <label className="form-check-label" htmlFor="radio1"></label>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="gender" value={false} checked={data.gender === false} onChange={onChange} />여성
                            <label className="form-check-label" htmlFor="radio2"></label>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill d-grid">
                        <button type="submit" className="btn btn-primary">생성</button>
                    </div>
                    <div className="p-2 flex-fill d-grid">
                        <button type="button" onClick={routerMain} className="btn btn-primary">취소</button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default Page4
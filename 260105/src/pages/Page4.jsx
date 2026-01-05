import { useState } from "react"
import { useNavigate } from 'react-router'

const Input = props => <input type={props.type} value={props.value} className="form-control" id={props.id} placeholder={props.placeholder} name={props.name} onChange={props.onChange} />
const Gender = props => <input type="radio" className="form-check-input" id={props.id} name="gender" checked={props.checked} onChange={props.onChange} />

const Page4 = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [gender, setGender] = useState(true)
    
    const navigate = useNavigate()
    const routerMain = () => navigate('/')
    
    const OnSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container mt-3">
            <h1 className="display-1 text-center">사용자 등록</h1>
            <form onSubmit={OnSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">이름:</label>
                    <Input type="text" id="name" name="name" value={name} placeholder="이름을 입력하세요." onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">이메일:</label>
                    <Input type="text" id="email" name="email" value={email} placeholder="이메일를 입력하세요." onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">비밀번호:</label>
                    <Input type="password" id="pwd" name="pwd" value={pwd} placeholder="비밀번호를 입력하세요." onChange={(e)=>{setPwd(e.target.value)}} />
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <Gender id="radio1" checked={gender === true} onChange={()=>{setGender(true)}} />
                            <label className="form-check-label" htmlFor="radio1">남성</label>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <Gender id="radio2" checked={gender === false} onChange={()=>{setGender(false)}} />
                            <label className="form-check-label" htmlFor="radio2">여성</label>
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
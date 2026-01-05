import { useNavigate, useLocation } from 'react-router'

const Select = () => {
	const navigate = useNavigate();
	const navigateList = () => navigate('/')
    const location = useLocation();
    const userKey = location.state.userKey;

    const userdata = [{ key : 1, name : "스티븐", email : "jobs@shellfolder.com", pwd : "111", gender : true },
               		 { key : 2, name : "에브릴", email : "lavigne@shellfolder.com", pwd : "222", gender : false }];
	
	const user = userdata.find( v => v.key === userKey ); 

    return (
    <div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 정보</h1>
		<form>
		  <div className="mb-3 mt-3">
		    <label htmlFor="name" className="form-label">이름:</label>
		    <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." value={user?.name || ""} readOnly="readonly" />
		  </div>
		  <div className="mb-3 mt-3">
		    <label htmlFor="email" className="form-label">이메일:</label>
		    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." value={user?.email || ""} readOnly="readonly" />
		  </div>
		  <div className="mb-3">
		    <label htmlFor="pwd" className="form-label">비밀번호:</label>
		    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." value={user?.pwd || ""} readOnly="readonly" />
		  </div>
			<div className="d-flex">
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" name="gender" checked={user?.gender === true} readOnly/>남성
					<label className="form-check-label" htmlFor="radio1"></label>
				</div>
			  </div>
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" name="gender" checked={user?.gender === false} readOnly /> 여성
					<label className="form-check-label" htmlFor="radio2"></label>
				</div>
			  </div>
			</div>
		</form>
		<div className="d-flex">
		  <div className="p-2 flex-fill d-grid">
		  	<button onClick={""} className="btn btn-primary">수정</button>
		  </div>
		  <div className="p-2 flex-fill d-grid">
			<button onClick={navigateList} className="btn btn-primary">삭제</button>
		  </div>
		  <div className="p-2 flex-fill d-grid">
			<button onClick={navigateList} className="btn btn-primary">취소</button>
		  </div>
		</div>
	</div>
    )
}

export default Select
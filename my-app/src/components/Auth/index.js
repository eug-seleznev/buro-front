import { useState } from "react"
import Login from './Login'
import Register from './Register'
import RegisterCustomer from './RegisterCustomer'
import {SmallContainer, Card} from '../../Styles/common'
import {LoginButton} from '../../Styles/buttons'



const Auth = () => {
    const [page, setPage] = useState(0)
    return (
        <SmallContainer >
            <Card>
                <div style={{width:'100%', borderBottom:'2px solid black', display:'flex', justifyContent:'space-between'}}>
                    <LoginButton style={{fontWeight:`${page===0?'bold':'normal'}`}} onClick={(() => setPage(0))}>Логин</LoginButton>
                    <LoginButton style={{fontWeight:`${page===1?'bold':'normal'}`}} onClick={(() => setPage(1))}>Регистрация </LoginButton>
                    <LoginButton style={{fontWeight:`${page===2?'bold':'normal'}`}} onClick={(() => setPage(2))}>Регистрация (клиент)</LoginButton>
                </div>

                <div>
                {page ==0 && <Login/>}
                {page ==1 && <Register />}
                {page ==2 && <RegisterCustomer />}

                </div>
            </Card>
        </SmallContainer>
    )
}




export default Auth

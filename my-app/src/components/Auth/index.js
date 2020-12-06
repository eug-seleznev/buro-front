import { useState } from "react"
import Login from './Login'
import Register from './Register'
import RegisterCustomer from './RegisterCustomer'





const Auth = () => {
    const [page, setPage] = useState(0)
    return (
        <div>

            <div className="auth_form">
                <button onClick={(() => setPage(0))}>Логин</button>
                <button onClick={(() => setPage(1))}>Регистрация </button>
                <button onClick={(() => setPage(2))}>Регистрация (клиент)</button>
            </div>

            <div>
               {page ==0 && <Login />}
               {page ==1 && <Register />}
               {page ==2 && <RegisterCustomer />}

            </div>

        </div>
    )
}




export default Auth

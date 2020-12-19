import { useSelector } from "react-redux"
import './user.css'
import { url } from '../utils/axios';



const MyProfile = ({match, history}) => {
    let {id} = match.params;
    const loaded = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)

    return (
        <div className="main__users"> 
            <h1> Мой профиль</h1>
            {!loaded ? <p> loading..</p> : (
                <div style={{display: 'flex'}}>
                <img  style={{width:'100px', height: '100px', marginRight:'40px',marginTop:'40px'}} className='logo' src={`${url}/${user.avatar}`}/>
                <div>
                    <p>Имя: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>Должность: {user.position}</p>
                    <p>Количество проектов:  {user.projects.length === 0?  'проектов нет' :  user.projects.length }</p>
                    <button onClick={() => history.replace(`/edit`)} >Редактировать профиль</button>
                </div>
                
            

                </div>
            )}
        </div>
    )
}



export default MyProfile
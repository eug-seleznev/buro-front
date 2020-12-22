import { useDispatch, useSelector } from "react-redux"
import './user.css'
import { url } from '../utils/axios';
import {Button} from '../../Styles/buttons'
import styled from 'styled-components'
import { useEffect } from "react";
import {changeLoaded, loadUser} from '../../redux/actions/auth'

const MyProfile = ({match, history}) => {
    let {id} = match.params;
    const dispatch = useDispatch ()
    const loaded = useSelector(state => state.auth.loaded)
    const user = useSelector(state => state.auth.user)
    useEffect (()=> {
        dispatch (loadUser())
    },[])
    return (
        <div className="main__users"> 
            <h1> Мой профиль</h1>
            {!loaded ? <p> loading..</p> : (
                <div style={{display: 'flex'}}>
                <img  style={{width:'100px', height: '100px', marginRight:'40px',marginTop:'40px', objectFit: 'cover'}} className='logo' src={`${url}/${user.avatar}`}/>
                <div>
                    <p>Имя: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>Должность: {user.position}</p>
                    <p>Количество проектов:  {user.projects.length === 0?  'проектов нет' :  user.projects.length }</p>
                    <Button primary onClick={() => history.replace(`/edit`)} >Редактировать профиль</Button>
                </div>
                
            

                </div>
            )}
        </div>
    )
}



export default MyProfile
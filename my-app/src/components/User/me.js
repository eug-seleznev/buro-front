import { useDispatch, useSelector } from "react-redux"
import './user.css'
import { url } from '../utils/axios';
import {Button} from '../../Styles/buttons'
import styled from 'styled-components'
import { useEffect } from "react";
import {changeLoaded, loadUser} from '../../redux/actions/auth'
import { Card, SmallContainer, } from "../../Styles/common";
import { H1, H3} from '../../Styles/typography'

const MyProfile = ({match, history}) => {
    let {id} = match.params;
    const dispatch = useDispatch ()
    const loaded = useSelector(state => state.auth.loaded)
    const user = useSelector(state => state.auth.user)
    useEffect (()=> {
        dispatch (loadUser())
    },[])
    return (
        <SmallContainer> 
            <Card>
            <H1> Мой профиль</H1>
            {!loaded ? <p> loading..</p> : (
                <div style={{display: 'flex', justifyContent:'space-around'}}>
                <img  style={{width:'150px', height: '150px', marginRight:'40px',marginTop:'20px', objectFit: 'cover'}} className='logo' src={`${url}/${user.avatar}`}/>
                <div>
                    <p>Имя: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>Должность: {user.position}</p>
                    <p>Количество проектов:  {user.projects.length === 0?  '0' :  user.projects.length }</p>
                    <Button primary onClick={() => history.replace(`/edit`)} >Редактировать профиль</Button>
                </div>
                
            

                </div>
            )}
            </Card>
        </SmallContainer>
    )
}



export default MyProfile
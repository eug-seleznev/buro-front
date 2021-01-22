import {useSelector} from 'react-redux'
import {MenuHead, StyledLink} from '../../Styles/layout'
import {ButtonText} from '../../Styles/buttons'
import {CSSTransition} from 'react-transition-group'
import styles from '../../Styles/modules/components/headerMenu.module.css'



const Menu = ({closeAll, state}) => {


const exit = () => {
  
    localStorage.removeItem('token')
    window.location.reload();
}


    const user = useSelector(state => state.auth.user)
    return (
        <>
        <CSSTransition
        in={state.menu}
        timeout={300}
        classNames={{
            enter:          styles.transitionsEnter,
            enterActive:    styles.transitionsEnterActive,
            exit:           styles.transitionsExit,
            exitActive:     styles.transitionsExitActive,
        }}
        unmountOnExit
        >
        <MenuHead right={state.mobile?'30px':'110px'} onMouseLeave={closeAll}>
            

                    <div className='my__name'>
                         
                   </div>

                    <StyledLink className='menu__nav' to='/help'>
                        Проблемы с компом
                    </StyledLink>

                    <StyledLink className='menu__nav' to='/admin/news'>
                        Добавить новость
                    </StyledLink>

                    <StyledLink className='menu__nav' to='/new'>
                        Создать проект
                    </StyledLink>

            
        </MenuHead>

        </CSSTransition>



        <CSSTransition
            in={state.menuProfile}
            timeout={300}
            classNames={{
                enter:   styles.transitionsEnter,
                enterActive:   styles.transitionsEnterActive,
                exit:  styles.transitionsExit,
                exitActive:   styles.transitionsExitActive,
            }}
            unmountOnExit
            >
            <MenuHead right={state.mobile?'30px':'30px'} onMouseLeave={closeAll}>
        
                   
                    <div className='my__name'>
                        {user.name}
                   </div>
                   
                    <StyledLink to='/users/me'>
                        Мой профиль
                    </StyledLink>

                    <StyledLink to='/projects/my'>
                        Мои проекты
                    </StyledLink>

                    <StyledLink to='/projects/my'>
                        Отдел
                    </StyledLink>

                    <StyledLink to='/projects/my'>
                        Новости
                    </StyledLink>

                    {user.permission==='admin'?(
                    <StyledLink to='/tickets'>
                        Панель сисадмина
                    </StyledLink>):<></>}
                    

                    <ButtonText fontSize='16px' onClick={()=>exit()}
                    >Выйти</ButtonText>
            
            </MenuHead>

        </CSSTransition>
        </>
    )
}



export default Menu
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../../Styles/modules/components/mobileMenu.module.css'
import {Light, Bold} from '../../Styles/typography'
import { MobMenuLink } from '../../Styles/layout'

const MenuMobile = ({open, closeAll}) => {


    return(
        <CSSTransition
        in={open}
        timeout={300}
        classNames={{
            enter:   styles.transitionsEnter,
            enterActive:   styles.transitionsEnterActive,
            exit:  styles.transitionsExit,
            exitActive:   styles.transitionsExitActive,
        }}
        unmountOnExit
        >
            <div className={styles.mobMenu}>
                <div className={styles.mobGrid}>
                    <Light className={styles.title} color='white' size='16'>Главное</Light>
                        <MobMenuLink to='/' className={styles.menuButton} onClick={closeAll}> Главная</MobMenuLink>
                        <MobMenuLink to='/projects' className={styles.menuButton} onClick={closeAll}>Проекты</MobMenuLink>
                        <MobMenuLink to='/users' className={styles.menuButton} onClick={closeAll}>Сотрудники</MobMenuLink>
                    <Light className={styles.title} color='white' size='16'>тут что-то будет</Light>
                </div>    
            </div> 
        </CSSTransition>

    )
}
export default MenuMobile
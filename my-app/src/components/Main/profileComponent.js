import { url } from '../utils/axios';
import { useSelector } from "react-redux"
import styles from '../../Styles/modules/components/profile.module.css'

import { Bold,Light,Thin, Regular } from '../../Styles/typography'

const ProfileComponent = () => {

const user = useSelector(state => state.auth.user)


    return(
        <div className={styles.profile}>
            <img className={styles.avatar} src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
            <Bold className={styles.name}> {user.name}</Bold>
                <Regular color='#3F496C 80 %;' size='12' className={styles.change}>изменить</Regular>
            <Bold color='black' size='24' className={styles.pos}>Position: {user.position}</Bold>
            <div className={styles.contacts}>Контакты:</div>
            <div className={styles.mail}>test@buro82.ru</div>
            <div className={styles.rocket}>rocket</div>
        </div>
    )
}
export default ProfileComponent
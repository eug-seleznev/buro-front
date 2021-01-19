import { url } from '../utils/axios';
import { useSelector } from "react-redux"
import styles from '../../Styles/modules/components/profile.module.css'

import {H1} from '../../Styles/typography'

const ProfileComponent = () => {

const user = useSelector(state => state.auth.user)


    return(
        <div className={styles.profile}>
            <img className={styles.avatar} src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
            <H1 className={styles.name}> {user.name}</H1>
                <div className={styles.change}>изменить</div>
            <div className={styles.pos}>Position: {user.position}</div>
            <div className={styles.contacts}>Контакты:</div>
            <div className={styles.mail}>test@buro82.ru</div>
            <div className={styles.rocket}>rocket</div>
        </div>
    )
}
export default ProfileComponent
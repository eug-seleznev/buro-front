import { url } from '../utils/axios';
import { useDispatch, useSelector } from "react-redux"
import styles from '../../Styles/modules/components/profile.module.css'

const ProfileComponent = () => {

const user = useSelector(state => state.auth.user)


    return(
        <div className={styles.profile}>
            <img classname={styles.avatar} src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
            <div className={styles.name}> {user.name}</div>
                <div className={styles.change}>изменить</div>
            <div className={styles.pos}>Position: {user.position}</div>
            <div className={styles.contacts}>Контакты:</div>
            <div className={styles.mail}>test@buro82.ru</div>
            <div className={styles.rocket}>rocket</div>
        </div>
    )
}
export default ProfileComponent
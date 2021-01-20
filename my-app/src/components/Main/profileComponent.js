import { url } from '../utils/axios';
import styles from '../../Styles/modules/components/profile.module.css'

import { Bold, Light } from '../../Styles/typography'

const ProfileComponent = ({user}) => {

    return(
        <div className={styles.profile}>
            <img className={styles.avatar} src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
            <Bold size='30' className={styles.name}> {user.name}</Bold>
                <Bold color='#3F496C 80 %;' size='12' className={styles.change}>изменить</Bold>
            <Light color='#4B4B4B' size='16' >Должность: {user.position}</Light>
            <Bold size='24' className={styles.contacts}>Контакты:</Bold>
            <Light color='#4B4B4B' size='16' className={styles.mail}>{user.email}</Light>
            <Light color='#4B4B4B' size='16' className={styles.rocket}>rocket</Light>
        </div>
    )
}
export default ProfileComponent
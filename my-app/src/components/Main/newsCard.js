import styles from '../../Styles/modules/components/newsCard.module.css'
import { Card } from '../../Styles/common'


const NewsCard = ({el}) => {



    return(
        <Card className={styles.newsContainer}>

                <div className={styles.name}>Имя Фамилия</div>
                <div className={styles.title}>{el.title}</div>
                <div className={styles.date}>{el.postDate.slice(0,16)}</div>
                <div className={styles.filter}>#фильтр</div>
                            
            
        </Card>
    )
}
export default NewsCard
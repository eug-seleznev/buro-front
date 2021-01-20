import styles from '../../Styles/modules/components/newsCard.module.css'
import { Card } from '../../Styles/common'
import { Light, Thin } from '../../Styles/typography'


const NewsCard = ({el}) => {


    return(
        <Card className={styles.newsContainer}>

                <Thin color='#3F496C' size='13' className={styles.name}>{el.author.name}</Thin>
                <Light size='16' className={styles.title}>{el.title}</Light>
                <Thin color='#3F496C' size='13' className={styles.date}>{el.postDate.slice(0,10).split('-').reverse().join('.')}</Thin>
                <Thin color='#3F496C' size='13' className={styles.filter}>#фильтр</Thin>            
            
        </Card>
    )
}
export default NewsCard
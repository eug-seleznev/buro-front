import styles from '../../Styles/modules/main/main.module.css'
import Profile from './profileComponent'
import NewsCard from './newsCard'
import ProjectsCard from './projectsCard'



//профиль пользователя по ID
import './main.css'
import { useSelector } from "react-redux"

// import { allUsers } from "../../redux/actions/user";
import { Container} from '../../Styles/common'
import { Bold, Thin } from '../../Styles/typography'

///////////////
const Main = ({history}) => {

    const loadedNews = useSelector(state => state.news.loaded)
    const listNews = useSelector(state => state.news.news)
    const loadedUser = useSelector(state => state.auth.loaded)
    const user = useSelector(state => state.auth.user)



    return (
        <>
        {!loadedUser ? <p> loading..</p> : (

            <Container className={styles.mainContainer}>

                <Profile className={styles.profile} user={user}/>
            

                <div className={styles.projects}>
                    <Bold color='black' size='36' className={styles.myProj}>Мои проекты</Bold>

                    {user.projects.map((el,i)=>{
                        
                        return(
                            <ProjectsCard project={el}  sprints={user.sprints} history={history}/>
                        )
                    })}
                    
                </div>


                <div className={styles.news}>
                    <Thin color='black' size='24'>Новости бюро:</Thin>

                    {!loadedNews? <p>loading...</p> : 
                        
                        listNews.map((el,i)=>{
                            
                                return(
                                i<3 && <NewsCard el={el}/>
                                )
                            })
                    }
                    
                    <Bold color='#3F496C' size='12' className={styles.allNews}>Все новости</Bold>       
                </div>


                
                        
            </Container>)
        }
        </>
    )
}



export default Main
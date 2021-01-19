import styles from '../../Styles/modules/components/projectsCard.module.css'
import { Card } from '../../Styles/common'
import { Button } from '../../Styles/buttons'
import { H1 } from '../../Styles/typography'
import { useEffect, useState } from 'react'
import  MySprint from './mySprint'

const ProjectsCard = ({project, sprints}) => {
    const [filt, setFilt] = useState(null)
useEffect(()=>{
    
     if (sprints!=undefined){

         let filterAll = (item) => {
             return project.sprints.some(el => el==item )
             }
             
         const filtered = sprints!=undefined && sprints.filter(item => filterAll(item._id))   
         setFilt(filtered)
    }
 
 },[sprints])

    return(
        <Card className={styles.projContainer}>

                
                    <H1 className={styles.title} >{project.title}</H1>
                    <div className={styles.description}>Короткое описание проекта</div>
                    <div className={styles.dates} >{project.dateStart.slice(8,10)+'.'+project.dateStart.slice(5,7)+' \u2014 '+project.dateFinish.slice(8,10)+'.'+project.dateFinish.slice(5,7)} </div>
                    <div className={styles.left}>Осталось 3 дня</div>
                    <div className={styles.filter}>#ЭП</div>
                    <Button className={styles.button}>Подробнее</Button>
                    <div className={styles.sprints} onClick={()=>console.log(filt)}>
                        {sprints!= undefined && filt !=null && filt.map((item,i)=>{
                            
                            return(
                              <MySprint content={item}/>
                            )
                        })}
                    </div>              
                            
            
        </Card>
    )
}
export default ProjectsCard

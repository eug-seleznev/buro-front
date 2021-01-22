import styles from '../../Styles/modules/components/projectsCard.module.css'
import { Card } from '../../Styles/common'
import { Button } from '../../Styles/buttons'
import { Bold,Light,Thin, Regular } from '../../Styles/typography'
import { useEffect, useState } from 'react'
import  MySprint from './mySprint'

const ProjectsCard = ({project, sprints, history}) => {
    const [filt, setFilt] = useState(null)
    const [daysLeft, setDaysLeft] = useState(null)

useEffect(()=>{
    
    if (sprints!=undefined){

         let filterAll = (item) => {
             return project.sprints.some(el => el==item )
             }
             
         const filtered = sprints!=undefined && sprints.filter(item => filterAll(item._id))   
         setFilt(filtered)
    } 
 },[sprints])

 useEffect(()=>{
     const now = new Date()
     const finish = new Date(project.dateFinish)
     const left = (finish.getTime() - now.getTime()) / (1000*60*60*24)
     const days = Math.floor(left)
   
    setDaysLeft(days)
 },[])


    return(
        <Card className={styles.projContainer}>

                
                    <Bold size='24' className={styles.title} >{project.title}</Bold>
                    <Light size='16' className={styles.description}>{project.about!=null? project.about: 'Короткое описание проекта'}</Light>
                    <Light size='18' className={styles.dates} >{project.dateStart.slice(5,10).split('-').reverse().join('.') +' \u2014 '+ project.dateFinish.slice(5,10).split('-').reverse().join('.')} </Light>
                    <Light size='18' className={styles.left}>Осталось: {daysLeft} {daysLeft<1?'день': daysLeft<5? 'дня': 'дней'}</Light>
                    <Light size='16' className={styles.filter}>#ЭП</Light>
                    <Button className={styles.button} onClick={() => history.replace(`/projects/${project.crypt}`)}>Подробнее</Button>
                    <div className={styles.sprints}>

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

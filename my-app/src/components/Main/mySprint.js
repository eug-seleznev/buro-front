import styles from '../../Styles/modules/components/mySprint.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { finishTask, } from '../../redux/actions/projects'
import { Bold, Light } from '../../Styles/typography'

const MySprint = ({content}) => {
const dispatch = useDispatch()
const user = useSelector(state => state.auth.user)
const sprint = content
const [progress, setProgress] = useState(0)
const [sprintDaysLeft, setSprintDaysLeft] = useState(null)


useEffect(()=>{

    const done = sprint.tasks.reduce((sum,curr)=>{
    return curr.taskStatus == true ? (sum = sum + 1) : sum = sum
    }, 0)

    setProgress(done)
    

    if(sprint.dateClosePlan!=null){
        const now = new Date()
        const finish = new Date(sprint.dateClosePlan)
        const left = (finish.getTime() - now.getTime()) / (1000*60*60*24)
        const days = Math.floor(left)
      
        setSprintDaysLeft(days)
    } else {
        setSprintDaysLeft('?')
    }

},[sprint])

const onCheck = (e,id) => {

    let taskid = e.target.value;
    dispatch(finishTask({taskid, id}))

    setProgress(e.target.checked?progress+1:progress-1)
}



    return(
        <div className={styles.sprintContainer}>

               <Light size='18' className={styles.date}>{sprint.dateOpen.slice(5,10).split('-').reverse().join('.') +' \u2014 '+ (sprint.dateClosePlan!=null ? sprint.dateClosePlan.slice(5,10).split('-').reverse().join('.') : '')}</Light> 
               <Light size='18' className={styles.left}>Осталось: {sprintDaysLeft} {sprintDaysLeft<1?'день': sprintDaysLeft<5? 'дня': 'дней'}</Light>
               <Bold size='20' className={styles.tasks}>Задачи</Bold>
               <Bold size='20' className={styles.progress}>
                    <progress className={styles.progressBar} id="file" value={progress} max={sprint.tasks.length}>  </progress>
                    {' ' + progress + '/' + sprint.tasks.length}
                </Bold>
               <div className={styles.list}>
                            
                   {sprint.tasks.map((el,i)=>{

                       return(
                            <Light size='16'  className={styles.parag}>
                                <input className={styles.input} style={{pointerEvents: user.permission=='user'?'none':'block'}} type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={el.taskStatus} value={el._id} onChange={(e)=>onCheck(e,sprint._id)}/> 
                                {el.taskTitle!=''?el.taskTitle:'Без названия'}
                            </Light>
                       )
                   })
                   }
               </div>
                            
            
        </div>
    )
}

export default MySprint
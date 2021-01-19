import styles from '../../Styles/modules/components/mySprint.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { finishTask, } from '../../redux/actions/projects'
import { Bold, Light, Thin } from '../../Styles/typography'

const MySprint = ({content}) => {
const dispatch = useDispatch()
const user = useSelector(state => state.auth.user)
const sprint = content
const [progress, setProgress] = useState(0)


useEffect(()=>{

    const done = sprint.tasks.reduce((sum,curr)=>{
    return curr.taskStatus == true ? (sum = sum + 1) : sum = sum
    }, 0)

    setProgress(done)
},[sprint])

const onCheck = (e,id) => {

    let taskid = e.target.value;
    dispatch(finishTask({taskid, id}))

    setProgress(e.target.checked?progress+1:progress-1)
}



    return(
        <div className={styles.sprintContainer}>

               <Light size='18' className={styles.date}>date</Light> 
               <Light size='18' className={styles.left}>left</Light>
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
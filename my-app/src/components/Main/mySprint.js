import styles from '../../Styles/modules/components/mySprint.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { finishTask, } from '../../redux/actions/projects'

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

               <div className={styles.date}>date</div> 
               <div className={styles.left}>left</div>
               <div className={styles.tasks}>Задачи</div>
               <div className={styles.progress}>
                    <progress className={styles.progressBar} id="file" value={progress} max={sprint.tasks.length}>  </progress>
                    {' ' + progress + '/' + sprint.tasks.length}
                </div>
               <div className={styles.list}>
                            
                   {sprint.tasks.map((el,i)=>{

                       return(
                            <div className={styles.parag}>
                                <input className={styles.input} style={{pointerEvents: user.permission=='user'?'none':'block'}} type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={el.taskStatus} value={el._id} onChange={(e)=>onCheck(e,sprint._id)}/> 
                                {el.taskTitle!=''?el.taskTitle:'Без названия'}
                            </div>
                       )
                   })
                   }
               </div>
                            
            
        </div>
    )
}

export default MySprint
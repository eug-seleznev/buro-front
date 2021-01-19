import styles from '../../Styles/modules/components/mySprint.module.css'
import { Card } from '../../Styles/common'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getSprint, finishTask, } from '../../redux/actions/projects'

const MySprint = ({content}) => {
const dispatch = useDispatch()
// const sprint = useSelector(state => state.projects.sprint)
const user = useSelector(state => state.auth.user)
const sprint = content
useEffect(()=>{
console.log(sprint,'jnjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
// dispatch(getSprint(id))
},[sprint])

const onCheck = (e,id) => {
       
    let taskid = e.target.value;
    dispatch(finishTask({taskid, id}))
   
}

    return(
        <div className={styles.sprintContainer}>

               <div className={styles.date}>date</div> 
               <div className={styles.left}>left</div>
               <div className={styles.tasks}>Задачи</div>
               <div className={styles.progress}>progress bar</div>
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
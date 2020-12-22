import { useEffect, useState, useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTasks, finishSprint, finishTask, getSprint,addToChosen } from "../../redux/actions/projects";
import { useForm, FormProvider, useFormContext, useFieldArray, Controller } from "react-hook-form";
import './sprint.css'
import {Button} from '../../Styles/buttons'


const Sprint = ({match, history}) => {
  const dispatch = useDispatch();
    let {id} = match.params;
    let back = match.url;
    const sprint = useSelector(state => state.projects.sprint)
    const taskArr = useSelector(state => state.projects.sprint)
    // const project = useSelector(state => state.projects.project)
    const loading = useSelector(state => state.projects.sprintLoad)
    const msg = useSelector(state => state.projects.msg)
    const user = useSelector(state => state.auth.user)


    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            tasks: [{ taskTitle: "задача", workVolume: "5", taskState: false }]
          }
    });

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "tasks", // unique name for your Field Array
    });
    
    



    //submit for new tasks array;
    const onSubmit = (data) =>{
            let tasks = data;
            dispatch(addTasks({tasks, id }))
           
            setTimeout(() => {
              return history.push(`${back.slice(0,14)}`);
          }, 200);
            

    }
  
    useEffect(() => {
        
            dispatch(getSprint(id));
 console.log(user,'iiiiiiiiiiiiiiiiiiiiiiii')
            
           
    }, [])


 
    const chosenSprint = (e) => {
      console.log('sprint tыk')

      dispatch(addToChosen(id));
    console.log ('hi')
     
  }
   
    const onChange = (e) => {
       
    
        let taskid = e.target.value;
        dispatch(finishTask({taskid, id}))
       
    }


   const handleSprint = (e) => {
      
        dispatch(finishSprint(id));
        setTimeout(() => {
          return history.replace(`${back.slice(0,14)}`);
  }, 200);
   }


   const handleBack = (e) => {

    
    // //зачем тут таймаут? 
    // setTimeout(() => {
      return history.push(`${back.slice(0,14)}`);
    // }, 200);
    
   }

    return (
        <div className="sprint__main">
           {!loading ? <p> loading...</p> : (
             <>
          <div style={{
                            marginTop:'200px',filter: 'drop-shadow(0 0 5px black)', backgroundColor:'white', paddingLeft:'20px', padding:'20px', height:'fit-content',width:'400px'}}>
            
               
                    <div >
                                  <h1>{sprint.status?'Выполненные задачи:':'Текущие задачи:'}</h1> 

                        {taskArr.tasks.map((task, ind) => {
                            return (
                              
                                <div key={ind} >
                                  
                                    <form >
                                    <div className="sprint__tasks">
                                      {/* task.taskTitle == 0?????? */}
                                    <p className="sprint__row">{ind+1}.  {task.taskTitle!==''?task.taskTitle:'Без названия'}</p>
                                
                                  <label style={{display:`${sprint.status?'none':'block'}`}}></label>
                                <input style={{display:`${sprint.status?'none':'block'}`}} type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={task.taskStatus} value={task._id} onChange={onChange}/>

                                </div>
                                    </form>
                                    
                                </div>
                                 )
                        })}

                        {sprint.status && <div>
                            <h3>невыполненные задачи</h3>
                            {taskArr.tasks.filter(task => !task.taskStatus).map((task, ind) => {
                            return (
                              
                                <div key={ind} className="sprint__tasks">
                                    <p></p>
                                    <form>
                                    <div>
                                      {/* task.taskTitle == 0?????? */}
                                    <p>{ind+1}.  {task.taskTitle!==0?task.taskTitle:'Без названия'}</p>
                                
                                  <label style={{display:`${sprint.status?'none':'block'}`}}></label>
                                <input style={{display:`${sprint.status?'none':'block'}`}} type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={task.taskStatus} value={task._id} onChange={onChange}/>

                                </div>
                                    </form>
                                    
                                </div>
                                 )
                        })}
                          </div>}
                        
                    </div>
             
                <Button onClick={()=>handleBack()} style={{marginTop: '20px'}}>Вернуться к проекту</Button>
                <Button onClick={handleSprint} style={{display:`${sprint.status?'block':'none'}`,marginTop: '20px'}}> Восстановить спринт</Button>
            </div>
<br></br>
<div style={{opacity: `${sprint.status?0: 1}`,pointerEvents: `${sprint.status?'none': 'auto'}`,textAlign: 'right',marginTop:'200px',filter: 'drop-shadow(0 0 5px black)', backgroundColor:'white', paddingLeft:'20px', padding:'20px', height:'fit-content'}}>


<h1> Добавить задачи </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul style={{ listStyleType: 'none'}}>

        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              name={`tasks[${index}].taskTitle`}
              ref={register()}
              placeholder="Название задачи" // make sure to set up defaultValue
            />
          <input
          type="number"
        
              name={`tasks[${index}].workVolume`}
              ref={register()}
              style={{width:'125px'}}
              placeholder="Объем в часах" 
            />
            
            <Button type="button" style={{display: `${fields.length===1?'none':'block'}`, marginTop: '10px', marginBottom: '10px',marginLeft:'auto', marginRight:'0'}} onClick={() => remove(index)}>Удалить</Button>
          </li>
        ))}
      </ul>
      
      <Button
        type="button"
        onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
      >
        Добавить
      </Button>
      <Button type="submit">Сохранить</Button>
    </form>

            <br>
            </br>
            <Button onClick={handleSprint}>Завершить спринт</Button>
            <br></br> <br></br>
            <Button onClick={chosenSprint}>Добавить спринт в избранное</Button>
            </div>
            </>
               )}
        </div>
    )
}

export default Sprint
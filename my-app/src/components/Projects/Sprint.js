import { useEffect, useState, useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTasks, finishSprint, finishTask, getSprint } from "../../redux/actions/projects";
import { useForm, FormProvider, useFormContext, useFieldArray, Controller } from "react-hook-form";
import './sprint.css'



const Sprint = ({match, history}) => {
  const dispatch = useDispatch();
    let {id} = match.params;
    let fuck = match.url;
    const sprint = useSelector(state => state.projects.sprint)
    const taskArr = useSelector(state => state.projects.sprint.tasks)
    const project = useSelector(state => state.projects.project)
    const [loaded, setLoaded] = useState (false)
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            tasks: [{ taskTitle: "задача", workVolume: "5", taskState: false }]
          }
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "tasks", // unique name for your Field Array
      
      // keyName: "id", default to "id", you can change the key name
    });
    
    



    //submit for new tasks array;
    const onSubmit = (data) =>{
            console.log(project)
            let tasks = data;
            dispatch(addTasks({tasks, id }))
            setLoaded (!loaded)
            setTimeout(() => {
              return history.push(`${fuck.slice(0,14)}`);
          }, 200);
            

    }
    // const sprint = useSelector(state => state.projects.sprint)
  
    useEffect(() => {
        

            dispatch(getSprint(id));
            // setTimeout(() => {
            //   if(!window.location.hash) {
            //     window.location = window.location + '##';
            //     window.location.reload();
            // }
            // }, 1);
            setTimeout(() => {
              setLoaded (!loaded)
            }, 300);
           
    }, [])
    useEffect(()=> {
      console.log (loaded)
    },[loaded])
    // useEffect (() => {
    //   if(loaded){
    //     dispatch(addSprint(project.crypt))
    // }
    // },[loaded])
   
    const onChange = (e) => {
       
        console.log(fuck)
        let taskid = e.target.value;
        dispatch(finishTask({taskid, id}))
       
    }


   const handleSprint = (e) => {
    setLoaded (!loaded)
    dispatch(finishSprint(id));
    setTimeout(() => {
      return history.replace(`${fuck.slice(0,14)}`);
  }, 200);
   }
   const handleBack = (e) => {
    // let taskid = inputref.current.value;
    // dispatch(finishTask({taskid, id}))
    setLoaded (!loaded)
    setTimeout(() => {
      return history.push(`${fuck.slice(0,14)}`);
    }, 200);
    
   }
//     const onSubmit = async e => {
//         e.preventDefault();

// console.log(task)    
    
           
//         }
    return (
        <div className="sprint__main">
          <div>
            <h1>{sprint.status?'Выполненные задачи:':'Текущие задачи:'}</h1> 
            
                {!loaded ? <p> loading...</p> : (
                    <div >
                        {taskArr.map((task, ind) => {
                            return (
                              
                                <div key={ind} className="sprint__tasks">
                                    <p></p>
                                    <form>
                                    <div>
                                    <p>#{ind+1} / {task.taskTitle!==0?task.taskTitle:'Без названия'}</p>
                                
                                    <label style={{display:`${sprint.status?'none':'block'}`}}> завершить задачу</label>
                                <input style={{display:`${sprint.status?'none':'block'}`}} type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={task.taskStatus} value={task._id} onChange={onChange}/>

                                </div>
                                    </form>
                                    
                                </div>
                                 )
                        })}
                        
                    </div>
                )}
                <button onClick={()=>handleBack()} style={{marginTop: '20px'}}>Вернуться к проекту</button>
                <button onClick={handleSprint} style={{display:`${sprint.status?'block':'none'}`,marginTop: '20px'}}> Восстановить спринт</button>
            </div>
<br></br>
<div style={{opacity: `${sprint.status?0: 1}`,pointerEvents: `${sprint.status?'none': 'auto'}`,textAlign: 'right'}}>
<h1> Добавить задачи в спринт:</h1>
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
          min="1" 
          max="10"
              name={`tasks[${index}].workVolume`}
              ref={register()}
              style={{width:'75px'}}
              placeholder="Важность" // make sure to set up defaultValue
            />
            
            <button type="button" style={{display: `${fields.length===1?'none':'block'}`, marginTop: '10px', marginBottom: '10px',marginLeft:'auto', marginRight:'0'}} onClick={() => remove(index)}>Удалить</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
      >
        Добавить
      </button>
      <input type="submit"></input>
    </form>
            <br>
            </br>
            <button onClick={handleSprint}> Завершить спринт</button>
            </div>
        </div>
    )
}

export default Sprint
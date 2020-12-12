import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTasks, finishTask, getSprint } from "../../redux/actions/projects";
import { useForm, FormProvider, useFormContext, useFieldArray, Controller } from "react-hook-form";




const Sprint = ({match}) => {
    let {id} = match.params;
    const taskArr = useSelector(state => state.projects.sprint.tasks)

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
    const dispatch = useDispatch();
   



    //submit for new tasks array;
    const onSubmit = (data) =>{
            console.log(data.task)
            let tasks = data;
            dispatch(addTasks({tasks, id }))

    }
    // const sprint = useSelector(state => state.projects.sprint)

    useEffect(() => {
        console.log(id)
        
            dispatch(getSprint(id));
        
    }, [])

   
    const onChange = (e) => {
        let taskid = e.target.value;
        dispatch(finishTask({taskid, id}))        
    }

//     const onSubmit = async e => {
//         e.preventDefault();

// console.log(task)    
    
           
//         }
    return (
        <div>
            <h1>Текущие задачи:</h1> 
            
                {!taskArr ? <p> loading...</p> : (
                    <div>
                        {taskArr.map((task, ind) => {
                            return (
                                <div>
                                    <p></p>
                                    <form>
                                    <div>
                                    <p>#{ind+1} / Название:  {task.taskTitle}</p>
                                
                                    <label> завершить задачу</label>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value={task._id} onChange={onChange}/>

                                </div>
                                    </form>
                                </div>
                                 )
                        })}
                    </div>
                )}

<br></br>
<h3> Добавить задачи в спринт:</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              name={`tasks[${index}].taskTitle`}
              ref={register()}
              defaultValue={item.taskTitle} // make sure to set up defaultValue
            />
          <input
          type="number"
              name={`tasks[${index}].workVolume`}
              ref={register()}
              defaultValue={item.workVolume} // make sure to set up defaultValue
            />
            
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
      >
        append
      </button>
      <input type="submit" />
    </form>
            <br>
            </br>
            {/* <form onSubmit={onSubmit}>

                <div className="task">


                {task.map(el => {
                    return (
                        <div>
                            <input 
                                type='text'
                                placeholder='task'
                                name='taskTitle'
                                value={el.taskTitle}
                                onChange={e => onChange(e)}/>
                                
                                <input 
                                type='text'
                                placeholder='task'
                                name='workVolume'
                                value={el.workVolume}
                                onChange={e => onChange(e)}/>
                                
                                <input 
                                type='text'
                                placeholder='task'
                                name='taskState'
                                value={el.taskState}
                                onChange={e => onChange(e)}/>
                                
                        </div>
                    )
                })}
                    
            </div>

            <button onClick={() => addTask(state => [...state, 'value'])}>add task</button>
            <br>
            </br>
            <button type="submit" >Создать новый спринт</button>
            </form> */}


        </div>
    )
}

export default Sprint
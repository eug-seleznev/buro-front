import { useEffect, useState, useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addInfoSprint, addTasks, finishSprint, finishTask, getSprint, } from "../../redux/actions/projects";
import { addToChosen } from '../../redux/actions/auth'
import { useForm, FormProvider, useFormContext, useFieldArray, Controller } from "react-hook-form";
import './sprint.css'
import {Button} from '../../Styles/buttons'
import { Table, Td, Tr } from "../../Styles/tables";
import { Container, Card, } from "../../Styles/common";
import { H1, H3} from '../../Styles/typography'

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

  const [formData, setFormData] = useState(
    {
        description: ``, 
        date: 0,  
         
    }
  )
  const {description, date} = formData;
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            tasks: [{ taskTitle: "задача", workVolume: "5", taskState: false }],
            info: [{ date:`0`, description:'Без описания'}]
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
    const onEnter = e => {
      e.preventDefault();
      console.log(formData)
      dispatch(addInfoSprint(id, formData))

      console.log (sprint)
      setTimeout(() => {
        return history.replace(`${back.slice(0,14)}`);
}, 200);
    }
    const onChange2 = e => {
      e.preventDefault(); 
      console.log (e.target.value)
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }
    useEffect(() => {
        
            dispatch(getSprint(id))    
           console.log(user)
    }, [])


 
    const chosenSprint = (e) => {

      dispatch(addToChosen(id));

     
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
        <div>
           {!loading ? <p> loading...</p> : (
           <div className='sprint__grid'> 
          <Card style={{height:'fit-content', paddingBottom:'20px'}} >
            
               
                    
                                  <H1>{sprint.status?'Выполненные задачи:':'Текущие задачи:'}</H1> 

                        {taskArr.tasks.map((task, ind) => {
                            return (
                              
                                <div key={ind} >
                                  
                                    <form >
                                      <div className="sprint__tasks">
                                      
                                          <p className="sprint__row">{ind+1}.  {task.taskTitle!==''?task.taskTitle:'Без названия'}</p>
                                          <label style={{display:`${sprint.status?'none':'block'}`}}></label>
                                          <input style={{display:`${sprint.status?'none':'block'}`}} type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={task.taskStatus} value={task._id} onChange={onChange}/>

                                       </div>
                                    </form>
                                    
                                </div>
                                 )
                        })}
{/* 
                        {sprint.status && <div>
                            <H1>невыполненные задачи</H1>
                            {taskArr.tasks.filter(task => !task.taskStatus).map((task, ind) => {
                            return (
                              
                                <div key={ind} className="sprint__tasks">
                                    <p></p>
                                    <form>
                                        <div>
                                          
                                            <p>{ind+1}.  {task.taskTitle!==0?task.taskTitle:'Без названия'}</p>
                                            <label></label>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" defaultChecked={task.taskStatus} value={task._id} onChange={onChange}/>

                                        </div>
                                    </form>
                                    
                                </div>
                                 )
                        })}
                          </div>} */}
                        
                   
             
                <Button onClick={()=>handleBack()} style={{marginTop: '20px'}}>Вернуться к проекту</Button>
                <Button onClick={handleSprint} style={{display:`${sprint.status?'block':'none'}`,marginTop: '20px'}}> Восстановить спринт</Button>
            </Card>
            {/* addInfoSprint */}

<Card style={{opacity: `${sprint.status?0: 1}`,pointerEvents: `${sprint.status?'none': 'auto'}`,textAlign: 'right', height:'fit-content', paddingBottom:'20px'}}>

<form onSubmit={(e)=>onEnter(e)}>
    <input 

      type='text'
      name="description"
      value={description}
      placeholder="Описание спринта"
      onChange={e => onChange2(e)}>
        
    </input>
    <div>Предпологаемая дата завершения</div>
    <input 
     value={date}
      name="date"
       onChange={e => onChange2(e)}
      type="date">
    </input>
    <Button type="submit">Сохранить</Button>
</form>
<H1> Добавить задачи </H1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul style={{ listStyleType: 'none'}}>

        {fields.map((item, index) => (
          <li key={item.id} style= {{display:'flex'}}>
            <input
            style={{width:'125px',height: '20px'}}
              name={`tasks[${index}].taskTitle`}
              ref={register()}
              placeholder="Название задачи" // make sure to set up defaultValue
            />
          <input
          type="number"
        
              name={`tasks[${index}].workVolume`}
              ref={register()}
              style={{width:'125px',height: '20px'}}
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
    </Card>
            </div>
               )}
        </div>
    )
}

export default Sprint
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSprint } from "../../redux/actions/projects";




const Sprint = ({match}) => {
    let {id} = match.params;

    const dispatch = useDispatch();
    const [task, addTask] = useState([{
        taskTitle: '',
        workVolume: 0,
        taskState: false
    }])

    const sprint = useSelector(state => state.projects.sprint)

    useEffect(() => {
        console.log(id)
        
            dispatch(getSprint(id));
        
    }, [])
    return (
        <div>
            <h1>hello sprit</h1> 
            <form>
                <div className="task">


                {task.map(el => {
                    return (
                        <div>
                            <input 
                                type='text'
                                placeholder='task'
                                name='dateFinish'
                                value={el}
                                />
                                <input 
                                type='text'
                                placeholder='task'
                                name='dateFinish'
                                value={el}
                                />
                                <input 
                                type='text'
                                placeholder='task'
                                name='dateFinish'
                                value={el}
                                />
                        </div>
                    )
                })}
                    
            </div>

            </form>
            <button onClick={() => addTask(state => [...state, 'value'])}>add task</button>
            <br>
            </br>
            <button >Создать новый спринт</button>

        </div>
    )
}

export default Sprint
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";



import { useLocation} from "react-router";
import { addSprint, getProject, allSprints, deleteProject } from "../../redux/actions/projects";
import { getTicket } from "../../redux/actions/tikets";

import {  Redirect } from 'react-router-dom';


const Project = ({match, history}) => {
    let {id} = match.params;
    const dispatch = useDispatch();
    const loaded = useSelector(state => state.projects.loadProject);
    const sprintsLoad = useSelector(state => state.projects.loadSprints)

    const sprintLoad = useSelector(state => state.projects.sprint_load)
    const reload = useSelector(state => state.projects.reload)

    const sprint = useSelector(state => state.projects.sprint)

    const project = useSelector(state => state.projects.project)
    const sprints = useSelector(state => state.projects.sprints)


    useEffect(() => {
        dispatch(getProject(id));
    }, [])


    useEffect(() => {
        if(loaded){
            dispatch(allSprints(project.crypt))
        }
    }, [loaded])

    useEffect(() => {
        if(reload){
            return history.push(`${id}/${sprint.id}`)
        }
    }, [reload])

    const createSprint = () => {
        dispatch(addSprint(project.crypt))
    }

    const handleDelete = () => {
        dispatch(deleteProject(id))
        return history.push(`./`)

    }


    return (
        <div>
            {!loaded ? <p> loading...</p>: (
                <div>
                    <h1>{project.title}</h1>

                    <br>
                    </br>
                    <button onClick={createSprint}> Создать спринт</button>
                    
                    {!sprintsLoad ? <p> loading..</p> : (
                        <div>
                            
                            
                        <h3> Текущий спринт: </h3>

                        {sprints.filter(sprint => !sprint.status).map(sprint => {

                        
                            return (
                                <div onClick={() => history.push(`/projects/${id}/${sprint._id}`)}>
                            <p>
                                id: {sprint._id} / tasks: /  
                                {sprint.tasks.length}
                                {sprint.status ? ' complete' : ' ongoing'}
                            </p>
                        </div>
                            )
                        })}

                            <br />
                            <h3> Завершенные спринты</h3>

                        {sprints.filter(sprint => sprint.status).map(sprint => {

        
                        return (
                            <div onClick={() => history.push(`${id}/${sprint._id}`)}>
                        <p>
                            {sprint._id} / tasks: 
                            {sprint.tasks.length}
                            {sprint.status ? 'complete' : 'ongoing'} : status
                        </p>
                        </div>
                        )
                        })}
                        <br />
                        <div>
                            <h3>Команда проекта:</h3>
                            <p>{project.team.length} : человек</p>
                            
                        </div>
                        <br />
                        <button onClick={handleDelete}> Удалить проект</button> 



                        </div>
                    )}
                    
                </div>
                
            )}
        </div>
    )
}



export default Project
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";



import { useLocation} from "react-router";
import { addSprint, getProject, allSprints } from "../../redux/actions/projects";
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
                        <p>спринты: {sprints.length} </p>

                        {sprints.map(sprint => {
                            console.log(sprint.status)
                            return (
                            <p>
                                {sprint._id}
                            </p>
                            )
                        })}
                        </div>
                    )}
                    
                </div>
                
            )}
        </div>
    )
}



export default Project
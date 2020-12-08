import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";



import { useLocation} from "react-router";
import { getProject } from "../../redux/actions/projects";
import { getTicket } from "../../redux/actions/tikets";



const Project = ({match}) => {
    let {id} = match.params;
    const dispatch = useDispatch();
    const loaded = useSelector(state => state.projects.loadProject)
    const project = useSelector(state => state.projects.project)

    useEffect(() => {
        dispatch(getProject(id));
    }, [])
    return (
        <div>
            {!loaded ? <p> loading...</p>: (
                <div>
                    <h1>{project.title}</h1>
                </div>
            )}
        </div>
    )
}



export default Project
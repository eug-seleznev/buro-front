import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./oneproject.css"

import style from '../../Styles/modules/components/Project/oneproj.module.css'
import { useLocation} from "react-router";
import { addSprint, getProject, allSprints, deleteProject, joinTeam, finishProject} from "../../redux/actions/projects";
import { getTicket } from "../../redux/actions/tikets";
import {Button} from '../../Styles/buttons'
import {  Redirect } from 'react-router-dom';
import { Table, Td, Tr } from "../../Styles/tables";
import { Status } from "../../Styles/project";
import { Container, Card,} from "../../Styles/common";
import { H1, H3} from '../../Styles/typography'
import SprintDescription from './components/SprintDescrForOneProj'

const Project = ({match, history}) => {
    let {id} = match.params;
    const dispatch = useDispatch();
    const loaded = useSelector(state => state.projects.loadProject);
    const sprintsLoad = useSelector(state => state.projects.loadSprints)
    const user = useSelector(state => state.auth.user) 
    const sprintLoad = useSelector(state => state.projects.sprint_load)
    const reload = useSelector(state => state.projects.reload)
   

    const sprint = useSelector(state => state.projects.sprint)
    const users = useSelector(state => state.users.users)
    const project = useSelector(state => state.projects.project)
    const sprints = useSelector(state => state.projects.sprints)
    // const project = useSelector(state => state.projects.project.team)

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
    const handleEnd = () => {
        
        dispatch(finishProject(id))
        return history.push(`.`)

    }
    const handleDelete = () => {
        dispatch(deleteProject(id))
        return history.push(`./`)

    }
    const hadleTeam = () => {
        console.log (project.team)
        console.log  (project.msg)
        dispatch(joinTeam(id))

    }

    return (
      <div>
        {!loaded ? (
          <p> loading...</p>
        ) : (
          <div className={style.main}>
            {!sprintsLoad ? (
              <p> loading...</p>
            ) : (
              <>
           
                  
                  <H1 className={style.title}>{project.title}</H1>
                  <div className={style.title__deadline}>Дней до дедлайна: ?</div> 
                <div>
                  
                  {sprints.length == 0 ? (
                    <p>Спринтов нет</p>
                  ) : (
                   <div className={style.sprintdescr__cont}>
                     {sprints.filter((sprint)=> !sprint.status)
                     .map ((sprint, i) => {
                       return (
                         <SprintDescription history={history} params={match.params} id={sprint._id} key={i} taskcomplite={sprint.tasks.filter((task) => task.taskStatus).length} 
                         alltasks={sprint.tasks.length} index={i+1}sprintname={sprint.name} dateOpen={sprint.dateOpen}></SprintDescription>
                       )
                     })}
                     <button
                     className={style.special__button}
                    onClick={createSprint}
                    style={{
                      display: `${
                        user.permission === "user" || project.status
                          ? "none"
                          : "block"
                      }`,
                    }}
                  >
                    {" "}
                    {user.permission === "user" ? "" : "Создать спринт"}
                  </button>
                   </div>
                  )}
                  
                  <br />
                  
                  <br />
                </div>

                <Card>
                  <H1>Завершенные спринты</H1>

                  {sprints.length == 0 ? (
                    <p>Завершенных спринтов нет</p>
                  ) : (
                    <Table>
                      <Tr columns="1fr 1fr 1fr 1fr" top>
                        <Td> Дата </Td>
                        <Td> Название</Td>
                        <Td> Задачи</Td>
                        <Td> Статус</Td>
                      </Tr>

                      {sprints
                        .filter((sprint) => sprint.status)
                        .map((sprint, i) => {
                          return (
                            <Tr
                              columns="1fr 1fr 1fr 1fr"
                              key={i}
                              title="Открыть спринт"
                              onClick={() =>
                                history.push(`/projects/${id}/${sprint._id}`)
                              }
                            >
                              <Td>
                                {" "}
                                {sprint.dateOpen
                                  .slice(0, 16)
                                  .replace(/T/g, "  ")}
                              </Td>
                              <Td>спринт {i}</Td>
                              <Td>
                                {" "}
                                {
                                  sprint.tasks.filter((task) => task.taskStatus)
                                    .length
                                }
                                /{sprint.tasks.length}
                              </Td>
                              <Td>
                                {sprint.tasks.length -
                                  sprint.tasks.filter((task) => task.taskStatus)
                                    .length ===
                                0 ? (
                                  <Status green />
                                ) : (
                                  <Status red />
                                )}
                              </Td>
                            </Tr>
                          );
                        })}
                    </Table>
                  )}
                </Card>

                <Card>
                  <H1> Команда</H1>

                  <Table>
                    <Tr columns="1fr 1fr 1fr" top>
                      <Td>Имя</Td>
                      <Td>email</Td>
                      <Td>Дожность</Td>
                    </Tr>

                    {project.team.map((user, i) => {
                      return (
                        <Tr
                          columns="1fr 1fr 1fr"
                          key={i}
                          title="Профиль сотрудника"
                          onClick={() => history.push(`/users/${user._id}`)}
                        >
                          <Td> {user.name}</Td>
                          <Td>{user.email}</Td>
                          <Td>{user.position}</Td>
                        </Tr>
                      );
                    })}
                  </Table>
                  <br />
                  {project.team.length == 0 && (
                    <Button
                      onClick={hadleTeam}
                      style={{
                        display: `${project.status ? "none" : "block"}`,
                      }}
                    >
                      Вступить в команду проекта
                    </Button>
                  )}
                  {project.team.map((empl, ind) => {
                    console.log(user, "emp id");
                    if (empl._id === user.id) {
                      console.log(ind, "INDEX USER");
                      return (
                        <Button
                          onClick={hadleTeam}
                          style={{
                            display: `${project.status ? "none" : "block"}`,
                          }}
                        >
                          Выйти из команды проекта
                        </Button>
                      );
                    } else if (project.team.length - 1 == ind) {
                      return (
                        <Button
                          onClick={hadleTeam}
                          style={{
                            display: `${project.status ? "none" : "block"}`,
                          }}
                        >
                          Вступить в команду проекта
                        </Button>
                      );
                    }
                  })}
                </Card>

                <Card>
                  <Button
                    onClick={handleEnd}
                    style={{
                      display: `${
                        user.permission === "user" ? "none" : "block"
                      }`,
                      marginBottom: "30px",
                    }}
                  >
                    {" "}
                    {user.permission === "user"
                      ? ""
                      : project.status
                      ? "Восстановить проект"
                      : "Завершить проект"}
                  </Button>
                  <Button
                    onClick={handleDelete}
                    style={{
                      display: `${
                        user.permission === "user" ? "none" : "block"
                      }`,
                      marginBottom: "30px",
                    }}
                  >
                    {" "}
                    {user.permission === "user" ? "" : "Удалить проект"}
                  </Button>
                </Card>
              </>
            )}
          </div>
        )}
      </div>
    );
}



export default Project
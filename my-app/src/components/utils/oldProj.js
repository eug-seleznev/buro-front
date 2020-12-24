import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./oneproject.css";

import { useLocation } from "react-router";
import {
  addSprint,
  getProject,
  allSprints,
  deleteProject,
  joinTeam,
  finishProject,
} from "../../redux/actions/projects";
import { getTicket } from "../../redux/actions/tikets";
import { Button } from "../../Styles/buttons";
import { Redirect } from "react-router-dom";

const Project = ({ match, history }) => {
  let { id } = match.params;
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.projects.loadProject);
  const sprintsLoad = useSelector((state) => state.projects.loadSprints);

  const sprintLoad = useSelector((state) => state.projects.sprint_load);
  const reload = useSelector((state) => state.projects.reload);
  const user = useSelector((state) => state.auth.user);

  const sprint = useSelector((state) => state.projects.sprint);
  const users = useSelector((state) => state.users.users);
  const project = useSelector((state) => state.projects.project);
  const sprints = useSelector((state) => state.projects.sprints);
  // const project = useSelector(state => state.projects.project.team)

  useEffect(() => {
    dispatch(getProject(id));
  }, []);

  useEffect(() => {
    if (loaded) {
      dispatch(allSprints(project.crypt));
    }
  }, [loaded]);

  useEffect(() => {
    if (reload) {
      return history.push(`${id}/${sprint.id}`);
    }
  }, [reload]);

  const createSprint = () => {
    dispatch(addSprint(project.crypt));
  };
  const handleEnd = () => {
    dispatch(finishProject(id));
    return history.push(`.`);
  };
  const handleDelete = () => {
    dispatch(deleteProject(id));
    return history.push(`./`);
  };
  const hadleTeam = () => {
    console.log(project.msg);
    dispatch(joinTeam(id));
  };

  return (
    <div>
      {!loaded ? (
        <p> loading...</p>
      ) : (
        <div className="one__proj__main">
          <h1 style={{ fontSize: "56px" }}>{project.title}</h1>

          <br></br>

          {!sprintsLoad ? (
            <p> loading..</p>
          ) : (
            <div>
              <div
                
              >
                <h1>Спринты</h1>
                <div style={{ display: "flex" }}>
                  <table style={{ width: "40vw" }}>
                    <thead>
                      <tr>
                        <th style={{ fontSize: "24px", paddingBottom: "20px" }}>
                          В работе
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sprints
                        .filter((sprint) => !sprint.status)
                        .map((sprint, i) => {
                          return (
                            <>
                              <tr>
                                <th
                                  key={i}
                                  style={{ cursor: "pointer" }}
                                  title="Открыть спринт"
                                  onClick={() =>
                                    history.push(
                                      `/projects/${id}/${sprint._id}`
                                    )
                                  }
                                >
                                  <br />
                                  <tr>
                                    {" "}
                                    Дата создания:{" "}
                                    {sprint.dateOpen.slice(0, 16)}
                                  </tr>
                                  <tr>
                                    Задачи:
                                    {
                                      sprint.tasks.filter(
                                        (task) => task.taskStatus
                                      ).length
                                    }
                                    /{sprint.tasks.length}
                                  </tr>
                                </th>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>{" "}
                  </table>
                  <table style={{ marginLeft: "-2px", width: "40vw" }}>
                    <thead>
                      <tr>
                        <th style={{ fontSize: "24px", paddingBottom: "20px" }}>
                          Готово
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sprints
                        .filter((sprint) => sprint.status)
                        .map((sprint, i) => {
                          return (
                            <>
                              <tr className="tr">
                                <th
                                  key={i}
                                  style={{ cursor: "pointer" }}
                                  title="Открыть спринт"
                                  onClick={() =>
                                    history.push(
                                      `/projects/${id}/${sprint._id}`
                                    )
                                  }
                                >
                                  <br />{" "}
                                  <tr className="tr">
                                    Дата создания:{" "}
                                    {sprint.dateOpen.slice(0, 16)}
                                  </tr>
                                  <tr className="tr">
                                    Задачи:{" "}
                                    {
                                      sprint.tasks.filter(
                                        (task) => task.taskStatus
                                      ).length
                                    }
                                    /{sprint.tasks.length}
                                  </tr>
                                </th>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>{" "}
                  </table>
                </div>
                <br />

                <Button
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
                </Button>
                <br />
              </div>

              <div
                style={{
                  filter: "drop-shadow(0 0 5px black)",
                  backgroundColor: "white",
                  paddingLeft: "20px",
                  paddingBottom: "20px",
                }}
              >
                <h1>Команда проекта</h1>
                <div style={{ display: "flex" }}>
                  <table style={{ width: "40vw" }}>
                    <thead>
                      <tr>
                        <th style={{ fontSize: "24px", paddingBottom: "20px" }}>
                          Имя
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.team.map((el, i) => {
                        return (
                          <>
                            <tr>
                              <th
                                key={i}
                                style={{ cursor: "pointer" }}
                                title="Открыть спринт"
                                onClick={() =>
                                  history.push(`/projects/${id}/${sprint._id}`)
                                }
                              >
                                <br />
                                <tr> {el.name}</tr>
                              </th>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>{" "}
                  </table>
                  <table style={{ marginLeft: "-2px", width: "40vw" }}>
                    <thead>
                      <tr>
                        <th style={{ fontSize: "24px", paddingBottom: "20px" }}>
                          Должность
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.team.map((el, i) => {
                        return (
                          <>
                            <tr>
                              <th
                                key={i}
                                style={{ cursor: "pointer" }}
                                title="Открыть спринт"
                                onClick={() =>
                                  history.push(`/projects/${id}/${sprint._id}`)
                                }
                              >
                                <br /> <tr>{el.position}</tr>
                              </th>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>{" "}
                  </table>
                </div>
                <br />
                <Button
                  onClick={hadleTeam}
                  style={{ display: `${project.status ? "none" : "block"}` }}
                >
                  {project.msg === `Вы были добавлены в команду проекта ${id}`
                    ? "Выйти из команды проекта"
                    : "Вступить в команду проекта"}
                </Button>
              </div>
              <br />
              <Button
                onClick={handleEnd}
                style={{
                  display: `${user.permission === "user" ? "none" : "block"}`,
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
                  display: `${user.permission === "user" ? "none" : "block"}`,
                  marginBottom: "30px",
                }}
              >
                {" "}
                {user.permission === "user" ? "" : "Удалить проект"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Project;

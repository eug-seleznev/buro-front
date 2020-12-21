import { useSelector } from "react-redux"

const { Container, Title } = require("../../Styles/layout")
const { Table } = require("../../Styles/tabel")





const MyProjects = ({history}) => {
    const projects = useSelector(state => state.auth.user.projects)
    return (
        <Container>
             <Title>Мои проекты</Title>
            {!projects ? <p> проектов нет  </p>: (

            <Table>
            <thead>
                <tr>
                    
                <th>Название</th>
                <th>Дата начала</th>
                <th>Дедлайн</th>
                <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project,index) => {
                    return(  
                    <tr key={index} onClick={() => history.replace(`/projects/${project.crypt}`)} title="Открыть проект">
                    
                        <td>{project.title}</td>
                        <td>{project.dateStart.slice(0, 10)}</td>
                        <td>{project.dateFinish!==undefined?project.dateFinish.slice(0, 10):'нет'}</td>
                        <td>{project.status ? <p>Завершен</p>:<p>В работе</p>}</td>
                    </tr>
                    )
                })}
                
            </tbody>
            </Table>
                        )}
        </Container> 
    )
}


export default MyProjects
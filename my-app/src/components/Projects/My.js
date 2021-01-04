import { useSelector } from "react-redux"
import { Card } from "../../Styles/common"

const { Container, Title, H1 } = require("../../Styles/common")
const { Table, Tr, Td } = require("../../Styles/tables")





const MyProjects = ({history}) => {
    const projects = useSelector(state => state.auth.user.projects)
    return (
        <Container>
            <Card>
             <H1>Мои проекты</H1>
            {!projects ? <p> проектов нет  </p>: (

            <Table>
           
                <Tr columns='1fr 1fr 1fr 1fr' top='top'>
                    
                <Td>Название</Td>
                <Td>Дата начала</Td>
                <Td>Дедлайн</Td>
                <Td>Статус</Td>
                </Tr>
          
                {projects.map((project,index) => {
                    return(  
                    <Tr columns='1fr 1fr 1fr 1fr' key={index} onClick={() => history.replace(`/projects/${project.crypt}`)} title="Открыть проект">
                    
                        <Td>{project.title}</Td>
                        <Td>{project.dateStart.slice(0, 10)}</Td>
                        <Td>{project.dateFinish!==undefined?project.dateFinish.slice(0, 10):'нет'}</Td>
                        <Td>{project.status ? <p>Завершен</p>:<p>В работе</p>}</Td>
                    </Tr>
                    )
                })}
                
           
            </Table>
                        )}
            </Card>
        </Container> 
    )
}


export default MyProjects
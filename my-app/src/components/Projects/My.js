import { useSelector } from "react-redux"
import { Card } from "../../Styles/common"
import { H1, H3} from '../../Styles/typography'
const { Container, Title,} = require("../../Styles/common")
const { Table, Tr, Td } = require("../../Styles/tables")






const MyProjects = ({history}) => {
    const projects = useSelector(state => state.auth.user.projects)
    return (
        <div>
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
        </div> 
    )
}


export default MyProjects
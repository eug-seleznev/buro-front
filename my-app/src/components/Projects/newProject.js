import  {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newProject } from '../../redux/actions/projects';
import { newTicket } from '../../redux/actions/tikets';
import './projects.css'

import {Container, Card, Title,} from '../../Styles/common'
import { Button } from '../../Styles/buttons';
import { H1, H3} from '../../Styles/typography'

const ProjectNew = ({history}) => {
    const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        title: '',   
        dateStart: '', 
        city: '',  
        type: '',
        stage: '',
        dateFinish: '',
        customer: '',


      
      });
   


      const { title, dateStart, dateFinish, city, type, stage, customer, area} = formData;

  
    const onChange = e => {
        e.preventDefault(); 

        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     

     const Redirect = () => {
     
             return history.push(`/projects`)
         
     }

     const onSubmit = async e => {
        e.preventDefault();
        dispatch(newProject(formData))
        setTimeout(() => Redirect(),100) 
        
            // register({ name, email, password});
    
           
        }

    return (
      <div>
        <Card>
          <H1>
       
            Тут можно создать новый проект
           
          </H1>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Название проекта"
              name="title"
              value={title}
              onChange={(e) => onChange(e)}
            />

            <input
              type="date"
              placeholder="date"
              name="dateStart"
              value={dateStart}
              onChange={(e) => onChange(e)}
            />

            <input
              type="date"
              placeholder="date"
              name="dateFinish"
              value={dateFinish}
              onChange={(e) => onChange(e)}
            />

            <input
              type="text"
              placeholder="Город"
              name="city"
              value={city}
              onChange={(e) => onChange(e)}
            />

            <input
              type="text"
              placeholder="Тип проекта"
              name="type"
              value={type}
              onChange={(e) => onChange(e)}
            />
            <input
              type="text"
              placeholder="Фаза"
              name="stage"
              value={stage}
              onChange={(e) => onChange(e)}
            />
            <input
              type="text"
              placeholder="Заказчик"
              name="customer"
              value={customer}
              onChange={(e) => onChange(e)}
            />

            <Button type="submit"> Создать новый проект</Button>
          </form>
        </Card>
      </div>
    );
}


export default ProjectNew
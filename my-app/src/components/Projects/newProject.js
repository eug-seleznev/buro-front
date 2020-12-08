import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { newProject } from '../../redux/actions/projects';
import { newTicket } from '../../redux/actions/tikets';


const ProjectNew = () => {
    const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        title: '',   //title
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
     


     const onSubmit = async e => {
        e.preventDefault();
        dispatch(newProject(formData))
    
            // register({ name, email, password});
    
           
        }

    return (
        <div>
            <h1> тут можно создать новый проект //wip</h1>
            <form onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder='title'
                name='title'
                value={title}
                onChange={e => onChange(e)}/>

           <input 
                type='date'
                placeholder='date'
                name='dateStart'
                value={dateStart}
                onChange={e => onChange(e)}/>


            <input 
                type='date'
                placeholder='date'
                name='dateFinish'
                value={dateFinish}
                onChange={e => onChange(e)}/>

            <input 
                type='text'
                placeholder='city'
                name='city'
                value={city}
                onChange={e => onChange(e)}/>

            <input 
                type='text'
                placeholder='Тип проекта'
                name='type'
                value={type}
                onChange={e => onChange(e)}/>
            <input 
                type='text'
                placeholder='Фаза'
                name='stage'
                value={stage}
                onChange={e => onChange(e)}/>
            <input 
                type='text'
                placeholder='заказчик'
                name='customer'
                value={customer}
                onChange={e => onChange(e)}/>





            <button  type="submit"> Создать новый проект</button>

            </form>
        </div>
    )
}


export default ProjectNew
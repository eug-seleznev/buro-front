import  {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getProject, editProject } from '../../redux/actions/projects';
import { newTicket } from '../../redux/actions/tikets';
import './projects.css'
import { SmallContainer, Card, } from '../../Styles/common';
import { Button } from '../../Styles/buttons';
import { H1, H3} from '../../Styles/typography'

const ProjectEdit = ({history, match}) => {
	let {id} = match.params;
    const dispatch = useDispatch();
	const project = useSelector(state => state.projects.project)
	const loadProject = useSelector(state => state.projects.loadProject)
    const [formData, setFormData ] = useState({
        
        title: '',   
        dateStart: '', 
        city: '',  
        type: '',
        stage: '',
        dateFinish: '',
        customer: '',


      
      });
	  
	  useEffect(() => {
		dispatch(getProject(id));
        console.log (project)
    }, [])
	useEffect(() => {
		if (loadProject ) {
			console.log (project.customer)
			setFormData ({...formData, title: project.title, 
				dateStart: project.dateStart,
				city: project.city,
				type: project.type,
				stage: project.stage,
				dateFinish: project.dateFinish,
				customer: project.customer
				})
		}
		
    }, [loadProject])
      const { title, dateStart, dateFinish, city, type, stage, customer} = formData;

  
    const onChange = e => {
        e.preventDefault(); 

        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     

     const Redirect = () => {
     
             return history.push(`/admin/editproj`)
         
     }

     const onSubmit = async e => {
        e.preventDefault();
        dispatch(editProject(formData, id))
        setTimeout(() => Redirect(),100) 
        
            // register({ name, email, password});
    
           
        }

    return (
		<SmallContainer>
            <Card>
		{!loadProject?<div>loading...</div>:(
			<div>
            <H1> Тут можно редактировать данные проекта </H1>
            <form className='form' onSubmit={onSubmit}>
            <input 

                type='text'
                placeholder={project.title}
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
                placeholder='Город'
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
                placeholder='Заказчик'
                name='customer'
                value={customer}
                onChange={e => onChange(e)}/>





            <Button  type="submit">Сохранить</Button>
			
			<Button  onClick={Redirect}>Ничего не менять</Button>
            </form>
			
        </div>

		)}
        </Card>
		</SmallContainer>
    )
}


export default ProjectEdit
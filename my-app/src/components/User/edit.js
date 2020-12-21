import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {changeData} from '../../redux/actions/user'
import { url } from '../utils/axios';



//styled components
import {Button} from '../../Styles/buttons'
import { Container } from "../../Styles/layout";


const Edit = ({match, history}) => {
	
	const loaded = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const [formData, setFormData ] = useState({
        
        name: '', 
        position: '',  
        email: '', 

      
      });
      

      const {name, position, email} = formData;

      const  [file, setFile] = useState(null) 


      const handleFile = e => {
        setFile(e.target.files[0])
    }
    const onChange = e => {
        e.preventDefault(); 

        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     


     const onSubmit = e => {
        e.preventDefault();
		console.log(formData)
		// dispatch(changeData({formData})) так не обязательно
		dispatch(changeData(formData))

    //dispatch (changeAvatar({file}))
    
           
        }
   
  
    return (
		<Container left>

        {!loaded? <div>loaded...</div> :
		  
		  (  
			  <>
		  <form  onSubmit={onSubmit}>

		<p>Сменить имя</p>
		  <input 
			  type='text'
			  placeholder={user.name}
			name="name"
			value={name}
			  onChange={e => onChange(e)}
			></input>
			<p>Сменить должность</p>
 		<input 
			  type='text'
			  placeholder={user.position}
			  name="position"
			  value={position}
			  onChange={e => onChange(e)}
			></input>
			<p>Сменить e-mail</p>
 		<input 
			  type='text'
			  placeholder={user.email}
			  value={email}
			  name="email"
			  onChange={e => onChange(e)}
			></input>
			
			
			<br/>
			<br/>
			<Button  type="submit" value="Submit" >Сохранить</Button>
				 
		  </form>
		  <form >
			  <p>Сменить аватар</p>
			 <input 
                type='file'
                placeholder='загрузите изображение'
				onChange={handleFile}></input><br/><br/>
				</form>
				</>
             
   )}
        	  		</Container>

    )
}



export default Edit
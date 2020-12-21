import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {changeData, changeAvatar} from '../../redux/actions/auth'
import { url } from '../utils/axios';



//styled components
import {Button} from '../../Styles/buttons'
import { Container } from "../../Styles/layout";


const Edit = ({match, history}) => {
	
	const loaded = useSelector(state => state.auth.loaded)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const [formData, setFormData ] = useState({
        
        name: user.name, 
        position: user.position,  
        email: user.email, 

      
      });
     const [text, setText] = useState ('') 

      const {name, position, email} = formData;

      const  [file, setFile] = useState(null) 


      const handleFile = e => {
        setFile(e.target.files[0])
	}
	// useEffect (()=> {
	// 	if (file !== null) {
	// 		setTimeout(() => {
	// 		dispatch (changeAvatar(file))
	// 	}, 200);
	// 	}
		
		
	// },[file])
    const onChange = e => {
        e.preventDefault(); 
		console.log (e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     
	 const changeMsg = () => {

		
		// setText ('Данные были изменены')
		// setTimeout(() => {
		// 	setText ('')
		// }, 4000);
	 }

     const onSubmit = e => {
        e.preventDefault();
		console.log(formData)
		// dispatch(changeData({formData})) так не обязательно
		dispatch(changeData(formData))
		if (file !== null && file !== undefined) {
		
			dispatch (changeAvatar(file))
		
	}
    setTimeout(() => {
		history.replace(`/users/me`)
	}, 200);
           
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
			<Button onClick={changeMsg} style={{position:'absolute', marginTop: '100px',marginLeft:'-87px'}} type="submit" value="Submit" >Сохранить</Button>
				 
		  </form>
		  <form >
			  <p>Сменить аватар</p>
			 <input 
                type='file'
                placeholder='загрузите изображение'
				onChange={handleFile}></input><br/><br/>
				</form>
				<div style={{opacity: `${text !==''?1:0}`, transition:'500ms ease opacity', marginTop: '70px'}}>{text}</div>
				</>
             
   )}
        	  		</Container>

    )
}



export default Edit
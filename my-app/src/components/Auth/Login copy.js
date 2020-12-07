import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';


const Login = () => {
    const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        problemname: '',   //title
        text: '',     //about problem
        emergency: '', 
        pcpass: '', // password 
        screenshot: null

      
      });
      

      const { problemname, text, emergency, pcpass, screenshot} = formData;

  
    const onChange = e => {
        e.preventDefault(); 

        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     


     const onSubmit = async e => {
        e.preventDefault();
        dispatch(login(formData))
    
            // register({ name, email, password});
    
           
        }

    return (
        <div>
            <h1> Если у вас есть проблема с компом - вы создать заявку тут</h1>
            <form onSubmit={onSubmit}>
            <input 
                type='text'
                placeholder='title'
                name='problemname'
                value={problemname}
                onChange={e => onChange(e)}/>

           <input 
                type='text'
                placeholder='about'
                name='text'
                value={text}
                onChange={e => onChange(e)}/>


            <input 
                type='text'
                placeholder='срочность'
                name='emergency'
                value={emergency}
                onChange={e => onChange(e)}/>

            <input 
                type='text'
                placeholder='пароль от компа (опционально)'
                name='pcpass'
                value={pcpass}
                onChange={e => onChange(e)}/>

            <input 
                type='file'
                placeholder='скриншот проблемы (опционально)'
                name='screenshot'
                value={screenshot}
                onChange={e => onChange(e)}/>




            <button  type="submit"> Отправить проблему</button>

            </form>
        </div>
    )
}


export default Login
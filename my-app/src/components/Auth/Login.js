import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';
// import Login from './Login copy';


const Login = () => {
    const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        email: '',
        password: ''

      
      });
      

      const { password, email} = formData;

  
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
            <form onSubmit={onSubmit}>
            <input 
                type='email'
                placeholder='email'
                name='email'
                value={email}
                onChange={e => onChange(e)}/>

           <input 
                type='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={e => onChange(e)}/>




            <button  type="submit"> Логин</button>

            </form>
        </div>
    )
}


export default Login
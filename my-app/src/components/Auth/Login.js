import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';
// import Login from './Login copy';
import {Input, LogForm} from '../../Styles/Forms'
import {Button} from '../../Styles/buttons'
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
        <div style={{display: 'flex', justifyContent:'center'}}>
            <LogForm onSubmit={onSubmit}>
                <Input 
                    type='email'
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}/>

                <Input
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}/>




            <Button style={{width:'20vw'}} type="submit"> Логин</Button>

            </LogForm>
        </div>
    )
}


export default Login
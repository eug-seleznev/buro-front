import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/auth';
import {Input, LogForm} from '../../Styles/Forms'
import {Button} from '../../Styles/buttons'

const Auth = () => {
const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        
        rocketname: '',
        email: ''
      
      });
      

      const { rocketname, email} = formData;

  
    const onChange = e => {
        e.preventDefault(); 
        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     

     const onSubmit = async e => {
        e.preventDefault();
        dispatch(register({formData}))
           
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
                type='text'
                placeholder='username for Rocket.Chat'
                name='rocketname'
                value={rocketname}
                onChange={e => onChange(e)}/>


           

            <Button style={{width:'20vw'}} type="submit"> Зарегистрироваться</Button>

            </LogForm>
        </div>
    )
}


export default Auth
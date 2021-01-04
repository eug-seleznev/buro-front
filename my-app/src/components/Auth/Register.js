import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/auth';
import {Input, LogForm} from '../../Styles/Forms'
import {Button} from '../../Styles/buttons'

const Auth = () => {
const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        email: '',
        password: '',
        name: '',
        position: '',
        permCode: ''
      
      });
      

      const { name, email, password, position, permCode } = formData;

  
    const onChange = e => {
        e.preventDefault(); 
        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     

     const onSubmit = async e => {
        e.preventDefault();
        let file = null;
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
                type='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={e => onChange(e)}/>


            <Input 
                type='name'
                placeholder='Имя'
                name='name'
                value={name}
                onChange={e => onChange(e)}/>



            <Input 
                type='position'
                placeholder='Должность'
                name='position'
                value={position}
                onChange={e => onChange(e)}/>
            <Input 
                type='text'
                placeholder='Код организации'
                name='permCode'
                value={permCode}
                onChange={e => onChange(e)}/>

            <Button style={{width:'20vw'}} type="submit"> Зарегистрироваться</Button>

            </LogForm>
        </div>
    )
}


export default Auth
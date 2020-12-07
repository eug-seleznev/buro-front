import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/auth';


const Auth = () => {
const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        email: '',
        password: '',
        name: '',
        position: ''
      
      });
      

      const { name, email, password, position } = formData;

  
    const onChange = e => {
        e.preventDefault(); 
        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     

     const onSubmit = async e => {
        e.preventDefault();
        dispatch(register(formData))
           
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


            <input 
                type='name'
                placeholder='name'
                name='name'
                value={name}
                onChange={e => onChange(e)}/>



            <input 
                type='position'
                placeholder='position'
                name='position'
                value={position}
                onChange={e => onChange(e)}/>


            <button  type="submit"> Зарегаться</button>

            </form>
        </div>
    )
}


export default Auth
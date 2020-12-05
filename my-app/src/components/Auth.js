import  {useState } from 'react'
import axios from 'axios'


const Auth = () => {

    const [formData, setFormData ] = useState({
        
        email: '',
        password: '',
        name: '',
        position: ''
      
      });

      const { name, email, password, position } = formData;

      const Post = (formData) => {
          console.log(formData)
          axios.post('http://195.2.71.115:7070/users', formData).then(res => console.log(res.data)).catch(() => console.log('hui'))
      }
     
    const onChange = e => {
        e.preventDefault();

        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     


     const onSubmit = async e => {
        e.preventDefault();
        Post(formData);
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
import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { newTicket } from '../../redux/actions/tikets';


const Admin = () => {
    const dispatch = useDispatch();

    const [formData, setFormData ] = useState({
        
        problemname: '',   //title
        text: '',     //about problem
        emergency: '', 
        pcpass: '', // password,

      
      });
      

      const { problemname, text, emergency, pcpass} = formData;

      const  [file, setFile] = useState(null) 


      const handleFile = e => {
        setFile(e.target.files[0])
    }
    const onChange = e => {
        e.preventDefault(); 

        setFormData({ ...formData, [e.target.name]: e.target.value });
     }
     


     const onSubmit = async e => {
        e.preventDefault();

        dispatch(newTicket({formData, file}))
    
            // register({ name, email, password});
    
           
        }

    return (
        <div>
            <h1> Если у вас есть проблема с компом - вы создать заявку тут //wip</h1>
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
                onChange={handleFile}/>




            <button  type="submit" value="Submit"> Отправить проблему</button>

            </form>
        </div>
    )
}


export default Admin
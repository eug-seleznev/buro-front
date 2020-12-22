import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { newTicket } from '../../redux/actions/tikets';
import './tickets.css'

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
        <div className="main__alltick">
            <h1> Если у вас есть проблема с компом - вы можете создать заявку тут //wip</h1>
            <form className='form__alltick' onSubmit={onSubmit}>
            <input className='alltik__1'
                type='text'
                placeholder='Проблема'
                name='problemname'
                value={problemname}
                onChange={e => onChange(e)}/>

         

            <input className='alltik__2'
                type='text'
                placeholder='срочность'
                name='emergency'
                value={emergency}
                onChange={e => onChange(e)}/>

            <input className='alltik__3'
                type='text'
                placeholder='пароль от компа (опционально)'
                name='pcpass'
                value={pcpass}
                onChange={e => onChange(e)}/>

            <span className='altik__span'>{'Скриншот проблемы (опционально):'}</span>
            <input className='alltik__4'
                type='file'
                
                placeholder='скриншот проблемы (опционально)'
                onChange={handleFile}/>




            <button className='alltik__6' type="submit" value="Submit"> Отправить проблему</button>

            <textarea className='alltik__5'
                // type='text'
                placeholder='Описание'
                name='text'
                value={text}
                onChange={e => onChange(e)}/>


            </form>
        </div>
    )
}


export default Admin
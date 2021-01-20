import  {useState } from 'react'
import { useDispatch } from 'react-redux';
import { newTicket } from '../../redux/actions/tikets';
import './tickets.css'

import {Table, Tr, Td} from '../../Styles/tables'
import {Container, Card, Title,} from '../../Styles/common'
import { Button } from '../../Styles/buttons';
import { H1, H3} from '../../Styles/typography'

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
            <Card>
            <H1> Если у вас есть проблема с компом - вы можете создать заявку тут //wip</H1>
            <br/>
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




            <Button className='alltik__6' type="submit" value="Submit"> Отправить проблему</Button>

            <textarea className='alltik__5'
                // type='text'
                placeholder='Описание'
                name='text'
                value={text}
                onChange={e => onChange(e)}/>


            </form>
            </Card>
        </div>
    )
}


export default Admin
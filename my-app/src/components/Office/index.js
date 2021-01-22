import { useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { newPropose, likedProposes, dateProposes, likePropose, deletePropose} from '../../redux/actions/office'


const Office = () => {

const dispatch = useDispatch()
const office = useSelector(state => state.office)
// const dated = useSelector(state => state.office.dateProposes)

    const [formData, setFormData ] = useState({
        
        title: '',   
        text: '',  
      
      });
      const { title, text,} = formData;


const onChange = e => {

    e.preventDefault(); 

    setFormData({ ...formData, [e.target.name]: e.target.value });
}


const onSubmit = (e) => {
    e.preventDefault();

    dispatch(newPropose(formData))

    setTimeout(() => {
        dispatch(dateProposes())
        dispatch(likedProposes())
    }, 100);  
    setFormData({
        title:'',subtitle:'',text:''
    })
}

useEffect(()=>{
    dispatch(likedProposes())
    console.log('liked',office)
    // console.log('dated',dated)
},[])

    return (
        <div> <h1> Офис</h1>
        
        
        <form className='form news__form' onSubmit={onSubmit}>
           
            <input 
                className='news__title'
                type='text'
                placeholder='Заголовок'
                name='title'
                value={title}
                onChange={e => onChange(e)}/>

   
    

            <textarea 
                className='news__texts'
                
                placeholder='Текст'
                name='text'
                value={text}
                onChange={e => onChange(e)}/>
            



            <button className='news__submit'  type="submit">Создать новость</button>

            </form>

            <button onClick={()=>console.log(office, 'liked')}>console log proposes</button>

        </div>
    )
}



export default Office
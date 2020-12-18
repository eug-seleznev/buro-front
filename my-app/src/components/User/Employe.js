import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from "../../redux/actions/user";




const Employe = ({match}) => {
    let {id} = match.params;
    const user = useSelector(state => state.users.user)
    const dispatch = useDispatch();
    const [y,set] = useState (false)
    useEffect(()=>{
        
        dispatch(getUser(id))
        setTimeout(() => {
            set (true)
            
        }, 1000);
    },[])
    useEffect(()=>{
        
        if (y) {
            console.log (user)
        }
    },[y])
    return (
        <>
        {!y? (<div>loaded...</div>):
          ( <div>
              <div>
                {/* <img src=></img> */}
                <h1 style={{marginLeft:'150px'}}>
                    {user.name}
                </h1>
              </div>
            
        </div> )
        }
        </>
    )
}



export default Employe
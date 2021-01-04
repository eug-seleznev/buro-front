

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Header, ItemHead} from '../../Styles/layout'
import { url } from '../utils/axios'
import Menu from './Menu'
import MenuProfile from './MenuProfile'



const HeaderL = () => {
    const loaded = useSelector(state => state.auth.loaded)
    const user = useSelector(state => state.auth.user)
    const [hover, setHover] = useState(false)
    const [open, setOpen] = useState({
        menu: false,
        menuProfile: false
    })

    return (
        <>
        {!loaded? <div>loaded...</div> :(
        <Header >
            <ItemHead onClick={() => setOpen({menu: !open.menu})} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <svg className='svg__plus' xmlns="http://www.w3.org/2000/svg" width="15" height="15"  fill={hover ? 'grey' : 'black'}  viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="-5 0 29 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
             </ItemHead>
            
            <ItemHead onClick={() => setOpen({menuProfile: !open.menuProfile})}>
                <img width="50px" style={{borderRadius:'50px'}} src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
                <svg xmlns="http://www.w3.org/2000/svg"  width="12" height="12" viewBox="-5 0 29 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>   
            </ItemHead>
            
           

        </Header>
)}
        <Menu menu={open} />



        {/* {open.menuProfile && <MenuProfile />} */}
          </>
    )
}


export default HeaderL


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
        {!loaded? <div>loading...</div> :(
        <Header >
            <ItemHead onClick={() => setOpen({...open, menu: !open.menu})} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src='/headerPlus.png'/>
                <img className='arrow' src='/headerArrow.png'/>
             </ItemHead>
            
            <ItemHead onClick={() => setOpen({...open, menuProfile: !open.menuProfile})}>
                <img  width="40px" style={{borderRadius:'50px'}} src={`${url}/${user != null? (user!= undefined? user.avatar:''):''}`}/>
                <img className='arrow' src='/headerArrow.png'/>
            </ItemHead>
            
           

        </Header>
)}
        <Menu menu={open.menu} menuProfile={open.menuProfile}/>



        {/* {open.menuProfile && <MenuProfile />} */}
          </>
    )
}


export default HeaderL
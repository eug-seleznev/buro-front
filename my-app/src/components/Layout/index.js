
import Header from './header'
import Sidebar from './sidebar'


const Layout = ({dimensions}) => {
    return <div style={{zIndex: '9999'}}>
        <Header dimensions={dimensions} />
        <Sidebar dimensions={dimensions} />
        </div>
}



export default Layout
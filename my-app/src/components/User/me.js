import { useSelector } from "react-redux"





const MyProfile = () => {
    const loaded = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)

    return (
        <div> 
            <h1> Мой профиль</h1>
            {!loaded ? <p> loading..</p> : (
                <div>
                    <p>Name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>Position: {user.position}</p>
                    <p>Projects: {user.projects.length === 0? <p>проетков нет </p> : <p> проекты есть </p>}</p>
                </div>
            )}
        </div>
    )
}



export default MyProfile
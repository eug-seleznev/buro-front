import { useEffect, useState } from "react"
import { Button } from "../../../Styles/buttons"
import { Card } from "../../../Styles/common"
import './sprintdescr.css'
import style from '../../../Styles/modules/components/Project/oneproj.module.css'

const SprintDescription = ({sprintname, index, dateOpen,taskcomplite, alltasks, history, params, id}) => {
	const [loaded, setLoaded] = useState (0)
	const [diff, setDiff] = useState (0)
	useEffect (()=> {
			let d1 = new Date ()
			let d2 = new Date (dateOpen.slice(0, 10).replace(/-/g, "/"))
			console.log (d1, d2)
			setTimeout (()=>{
				setDiff (Math.abs(d1-d2)/86400000)
				setLoaded (true)
			},50)
		
	},[])

		
		


	return (
	<>
		{!loaded?<div>loading...</div>:(
		<div className={style.card}>
		
			<Card>
			
				<div>{dateOpen.slice(5,10).replace(/-/g, ".")}-01.??</div>
				<div>Спринт №{index}</div>
				<div>Короткое описание</div>
				<div>Дней до дедлайна: {diff.toString().slice(0,1)}</div>
				<div>Задачи {taskcomplite}/{alltasks} </div>
				<div>
					<Button fontSize={'16px'} grey>Добавить в избранное</Button>
					<Button fontSize={'16px'} onClick={() => history.push(`/projects/${params}/${id}`)}>Подробнее</Button>
				</div>
				</Card>
			</div>
			
		)}
		</>
	)
}
export default SprintDescription
import { useEffect, useState } from "react"
import { Button } from "../../../Styles/buttons"
import { Card } from "../../../Styles/common"
import './sprintdescr.css'
import style from '../../../Styles/modules/components/Project/oneproj.module.css'
import { Thin, Bold, Light,Regular } from "../../../Styles/typography"

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
			
				<div className={style.card__date1}><Light size='20'>{dateOpen.slice(5,10).replace(/-/g, ".")}-01.??</Light></div>
				<div className={style.card__title}><Regular size='30'>Спринт №{index}</Regular></div>
				<div className={style.card__descr}><Light size='16'>Короткое описание</Light></div>
				<div className={style.card__date2}>Дней до дедлайна: {diff.toString().slice(0,1)}</div>
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
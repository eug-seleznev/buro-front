import { useEffect, useState } from "react"
import { Button } from "../../../Styles/buttons"
import { Card } from "../../../Styles/common"
import './sprintdescr.css'
import style from '../../../Styles/modules/components/Project/oneproj.module.css'
import { Thin, Bold, Light,Regular } from "../../../Styles/typography"

const SprintDescription = ({sprintname, index, dateOpen,taskcomplite, alltasks, history, id, params,descr, dateClosePlan}) => {
	const [loaded, setLoaded] = useState (0)
	const [diff, setDiff] = useState (0)
	useEffect (()=> {
			console.log (
			params.id,
			taskcomplite/alltasks,
			Math.trunc(taskcomplite/alltasks*100)
		)
		
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
		<div>
		
			<Card className={style.card}>
				<div>
					<div className={style.card__date1}><Light size='20'>{dateOpen.slice(5,10).replace(/-/g, ".")}-{dateClosePlan === null?'??': dateClosePlan.slice(5,10).replace(/-/g, ".")}</Light></div>
					<div className={style.card__title}><Regular size='30'>Спринт {dateOpen.slice(5,10).replace(/-/g, ".")}</Regular></div>
					<div className={style.card__descr}><Light size='16'>{descr}</Light></div>
				</div>
				<div>
					<div className={style.card__date2}> <Light size='16'>Дней до дедлайна: {diff.toString().slice(0,1)}</Light></div>
					<div className={style.card__tasks}> 
						<Regular>Задачи</Regular> 
						<div className={style.card__tasks}> 
							<div className={style.card__thing}><div style={{width:`${Math.trunc(taskcomplite/alltasks*100)}%`}} className={style.card__thing__full}></div></div>
							<Regular>{taskcomplite}/{alltasks}</Regular>
						</div>
						
						
					</div>
					<div className={style.card__buttons}>
						<Button fontSize={'16px'} grey>Добавить в избранное</Button>
						<Button fontSize={'16px'} onClick={() => history.push(`/projects/${params.id}/${id}`)}>Подробнее</Button>
					</div>
				</div>
				</Card>
			</div>
			
		)}
		</>
	)
}
export default SprintDescription
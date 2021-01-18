import { Button } from "../../../Styles/buttons"
import { Card } from "../../../Styles/common"
import './sprintdescr.css'


const SprintDescription = ({sprintname, index, dateOpen,taskcomplite, alltasks, history, params, id}) => {
	

	return (
		
		<Card>
			<div className='sprintdescr__grid__container'>
				<div>{dateOpen.slice(5,10).replace(/-/g, ".")}-01.??</div>
				<div>Спринт №{index}</div>
				<div>Короткое описание</div>
				<div>Осталось {Date()} дней</div>
				<div>Задачи {taskcomplite}/{alltasks} </div>
				<div>
					<Button fontSize={'16px'} grey>Добавить в избранное</Button>
					<Button fontSize={'16px'} onClick={() => history.push(`/projects/${params}/${id}`)}>Подробнее</Button>
				</div>
			</div>
			
		</Card>
	)
}
export default SprintDescription
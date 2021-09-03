import { VFC } from "react"
import { Todo as TodoType } from "lib/todo"

type Props = {
	todo: TodoType
	onRemove: (todoId: TodoType["id"]) => void
	onChangeDone: (todoId: TodoType["id"], done: TodoType["done"]) => void
}

const TodoListItem: VFC<Props> = (props) => {
	return (
		<li>
			<form>
				<label>
					<input
						type="checkbox"
						checked={props.todo.done}
						onChange={(event) => {
							props.onChangeDone(props.todo.id, event.currentTarget.checked)
						}}
					/>
					{props.todo.title}
				</label>
				<button
					onClick={() => {
						props.onRemove(props.todo.id)
					}}
				>
					削除
				</button>
			</form>
		</li>
	)
}

export default TodoListItem

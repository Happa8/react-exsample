import { VFC } from "react"
import { Todo as TodoType } from "lib/todo"
import TodoListItem from "./TodoListItem"

type Props = {
	todoList: TodoType[]
	onRemove: (todoId: TodoType["id"]) => void
	onChangeDone: (todoId: TodoType["id"], done: TodoType["done"]) => void
}

const TodoList: VFC<Props> = (props) => {
	return (
		<ul>
			{props.todoList.map((todo) => {
				return (
					<TodoListItem
						todo={todo}
						onChangeDone={props.onChangeDone}
						onRemove={props.onRemove}
						key={todo.id}
					/>
				)
			})}
		</ul>
	)
}

export default TodoList

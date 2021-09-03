import { VFC } from "react"
import { Todo as TodoType } from "lib/todo"

type Props = {
	todoList: TodoType[]
	onRemove: (todoId: TodoType["id"]) => void
	onChangeDone: (todoId: TodoType["id"], done: TodoType["done"]) => void
}

const TodoList: VFC<Props> = (props) => {
	return <ul>todolist</ul>
}

export default TodoList

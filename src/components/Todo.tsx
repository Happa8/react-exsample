import { VFC, useState } from "react"
import { Todo as TodoType } from "../lib/todo"
import NewTodo from "./NewTodo"
import TodoList from "./TodoList"

const Todo: VFC = () => {
	const [todoList, setTodoList] = useState<TodoType[]>([])

	// ToDoが追加された時に呼び出される関数
	const addTodo = (title: string) => {
		const newTodo: TodoType = {
			id: Math.random().toString(),
			title: title,
			done: false,
		}

		setTodoList([...todoList, newTodo])
	}

	// ToDoが削除された時
	const removeTodo = (todoId: TodoType["id"]) => {
		const newTodoList = todoList.filter((todo) => {
			return todo.id !== todoId
		})

		setTodoList(newTodoList)
	}

	// ToDoのdoneが変更された時
	const changeTodoDone = (todoId: TodoType["id"], done: TodoType["done"]) => {
		const newTodoList = todoList.map((todo) => {
			if (todo.id !== todoId) {
				return todo
			}

			return { ...todo, done: done }
		})

		setTodoList(newTodoList)
	}

	return (
		<div>
			<h2>ToDoアプリ</h2>
			<NewTodo onAdd={addTodo} />
			<TodoList
				todoList={todoList}
				onChangeDone={changeTodoDone}
				onRemove={removeTodo}
			/>
		</div>
	)
}

export default Todo

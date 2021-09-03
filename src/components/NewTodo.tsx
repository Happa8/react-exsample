import { VFC, useState, FormEvent } from "react"
import { Todo as TodoType } from "../lib/todo"

type Props = {
	onAdd: (title: TodoType["title"]) => void
}

const NewTodo: VFC<Props> = (props) => {
	const [inputText, setInputText] = useState<string>("")

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (inputText === "") {
			return
		}

		props.onAdd(inputText)
		setInputText("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputText}
				onChange={(event) => {
					setInputText(event.currentTarget.value)
					console.log(inputText)
				}}
			/>
			<button type="submit">追加</button>
		</form>
	)
}

export default NewTodo

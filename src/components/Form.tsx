import { useState, FormEvent } from "react"
import { VFC } from "react"

const Form: VFC = () => {
	const [inputText, setInputText] = useState<string>("")
	const [displayText, setDisplayText] = useState<string>("")

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (inputText === "") {
			return
		}

		setDisplayText(inputText)
		setInputText("")
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputText}
					onChange={(event) => {
						setInputText(event.currentTarget.value)
						console.log(inputText)
					}}
				/>
				<button type="submit">送信</button>
			</form>
			<div>送信された値は「{displayText}」です</div>
		</div>
	)
}

export default Form

import { VFC } from "react"
import Title from "./Title"
import Counter from "./Counter"
import Form from "./Form"

// コンポーネント
const App: VFC = () => {
	return (
		// JSX
		<div>
			<Title times={11} title="勉強会" />
			<Counter />
			<Form />
		</div>
	)
}

export default App

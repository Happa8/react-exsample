import { VFC, useState } from "react"

const Counter: VFC = () => {
	const [count, setCount] = useState<number>(0)
	return (
		<div>
			<button
				onClick={() => {
					console.log("Clicked!")
					setCount(count + 1)
				}}
			>
				Click Me
			</button>
			<span>Clicked {count} times</span>
		</div>
	)
}

export default Counter

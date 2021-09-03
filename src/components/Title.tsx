import { VFC } from "react"

type Props = {
	title: string
	times: number
}

const Title: VFC<Props> = (props) => {
	return (
		<h1>
			今日は第{props.times}回の{props.title}です
		</h1>
	)
}

export default Title

import {FC, MouseEventHandler} from "react"
import {IChildren} from "../../models/IChildren"

const Resources: FC<IChildren> = ({children}: IChildren) => {

	return (
		<div className="py-20">
			<div className="text-xl font-normal py-3">
				{/* <h1>Полезные ресурсы</h1> */}
			</div>

			<div className="relative w-full overflow-x-scroll overflow-y-hidden whitespace-no-wrap select-none cursor-pointer">
				{children}
			</div>
		</div>
	)
}

export default Resources

import type { ChildrenTypes } from "@/types"
import { FC } from "react"

const Container: FC<ChildrenTypes> = (props) => {
 return <div className="w-full max-w-7xl px-4 mx-auto">{props.children}</div>
}

export default Container

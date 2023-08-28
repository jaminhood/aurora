import type { HeaderContentTypes } from "@/types/header"
import { FC } from "react"

const HeaderContent: FC<HeaderContentTypes> = (props) => {
 return <>{props.desktop}</>
}

export default HeaderContent

import { MouseEventHandler } from "react"
import { ChildrenTypes } from ".."

export type ButtonTypes = ChildrenTypes & {
 isBlock: boolean
 isOutline: boolean
 handleClick?: () => void
}

export type SliderBtnTypes = {
 onClick?: MouseEventHandler<HTMLDivElement | HTMLButtonElement> | undefined
}

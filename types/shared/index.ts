import { ChildrenTypes } from ".."

export type ButtonTypes = ChildrenTypes & {
 isBlock: boolean
 isOutline: boolean
 handleClick: () => void
}

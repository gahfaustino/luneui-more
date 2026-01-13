import type { ReactOptionalHugProps } from './optionalhug'

const OptionalHug = ({ condition, wrapper, children }: ReactOptionalHugProps) =>
    condition ? wrapper(children) : children

export default OptionalHug

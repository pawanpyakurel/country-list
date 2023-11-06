import { Fragment, ReactNode, MutableRefObject } from 'react'
import classNames from 'classnames'

export interface ButtonProps {
  className?: string
  loading?: boolean
  value: string | ReactNode
  refButton?: MutableRefObject<HTMLButtonElement | null>
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  children?: ReactNode
  disabled?: boolean
}

const Button = ({
  className,
  loading,
  value,
  onClick,
  type,
  refButton,
  disabled = false,
}: ButtonProps) => {
  return (
    <Fragment>
      <button
        ref={refButton}
        contentEditable={false}
        type={type}
        onClick={!disabled ? onClick : undefined}
        className={classNames(
          `${className} ${disabled ? 'cursor-pointer' : 'cursor-pointer'}`
        )}
        disabled={loading}
      >
        {value}
      </button>
    </Fragment>
  )
}

export default Button

import styles from './Input.module.scss'
import classNames from 'classnames'
import _ from 'underscore'
import { Fragment, KeyboardEvent, useCallback } from 'react'
export interface InputProps {
  className?: string
  wrapperClassName?: string
  type: string
  placeholder: string
  value?: string | number
  defaultValue?: string
  error?: string[] | string | undefined
  label?: string | undefined
  disabled?: boolean
  setValue?: (str: string) => void
  onBlur?: (str: string) => void
  onDebounce?: (str: string) => void
  inputFormHook?: any
  handleKeyDown?: (event: KeyboardEvent) => void
  minValue?: number | string
  maxValue?: number | string
  debounceDuration?: number
  step?: number | string
  id?: string
  autoFocus?: boolean
  name?: string
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  placeholder,
  value,
  debounceDuration = 1000,
  maxValue = undefined,
  minValue = undefined,
  step = undefined,
  error,
  label,
  disabled,
  setValue,
  onDebounce = () => {},
  inputFormHook,
  onBlur,
  handleKeyDown,
  defaultValue,
  autoFocus = false,
  ...rest
}) => {
  const debounceFn = useCallback(_.debounce(onDebounce, debounceDuration), [])

  return (
    <Fragment>
      {label && (
        <label className='block mb-2 text-sm text-gray-600'>{label}</label>
      )}

      {inputFormHook ? (
        <input
          {...inputFormHook}
          defaultValue={value}
          // value={value}
          type={type}
          className={classNames(
            `block w-full  rounded-md border text-blueGray-600  p-2  text-md ${className} ${styles.rtInput}`,
            { 'border-red-500': error }
          )}
          placeholder={placeholder}
          min={minValue}
          max={maxValue}
          step={step}
          autoFocus={autoFocus}
          {...rest}
        />
      ) : (
        <input
          // defaultValue={value ??""}
          type={type}
          className={classNames(
            `block w-full  rounded-md border text-blueGray-600  p-2  text-md ${className} ${styles.rtInput}`,
            { 'border-red-500': error }
          )}
          placeholder={placeholder}
          value={value}
          min={minValue}
          max={maxValue}
          step={step}
          onChange={(e) => {
            !!setValue && setValue!(e.target.value)
            !!onDebounce && debounceFn(e.target.value)
          }}
          onBlur={(e) => onBlur !== undefined && onBlur!(e.target.value)}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          {...rest}
        />
      )}

      {error && <small className='font-medium text-red-800'>{error}</small>}
    </Fragment>
  )
}

export default Input

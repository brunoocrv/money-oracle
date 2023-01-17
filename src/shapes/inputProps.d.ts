import { InputHTMLAttributes } from 'react'

export type TextFieldProps = {
	onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>
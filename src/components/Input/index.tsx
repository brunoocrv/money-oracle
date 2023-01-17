import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export const Input = ({ 
	...props
 }: InputHTMLAttributes<HTMLInputElement>) => {
	const [value, setValue] = useState('')

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value
		setValue(newValue)
	}

	return (
		<S.Container>
			<S.InputWrapper>
				<S.Input
					onChange={onChange}
					value={value}
					{...props}
				/>
			</S.InputWrapper>
		</S.Container>
	)
}
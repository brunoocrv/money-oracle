import * as S from './styles'

export const Button = ({ children, ...props }: any) => {
	return (
		<S.Wrapper
			type={props.type}
		>
			{children}
		</S.Wrapper>
	)
}
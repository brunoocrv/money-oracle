import { ButtonHTMLAttributes } from 'react';

export type IButtonProps = {
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	as?: React.ElementType;
	icon?: JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement>
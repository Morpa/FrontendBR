import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'medium', ...props },
  ref
) => (
  <S.Wrapper size={size} ref={ref} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)

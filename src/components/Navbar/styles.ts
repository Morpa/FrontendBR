import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    img {
      height: 8rem;
    }
  `}
`

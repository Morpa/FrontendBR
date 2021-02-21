import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${theme.spacings.medium};
    align-items: center;
    justify-content: center;

    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;

  ${media.lessThan('medium')`
    font-size: 1.8rem;
  `}
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

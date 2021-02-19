import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    border-left: 1rem solid ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
    transition: 200ms;

    &:hover {
      transform: scale(1.02);
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: justify;
  `}
`
export const LabelsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: ${theme.spacings.xxsmall};
  `}
`
export const Label = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    margin: 0.4rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};

    > svg {
      cursor: pointer;
    }
  `}
`
export const Publication = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.lightBg};
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`

import { Container } from 'components/Container'
import Navbar from 'components/Navbar'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <>
    <Navbar />
    <Container>{children}</Container>
  </>
)

export default Base

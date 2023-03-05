import GetProps from '../utils/GetProps'
import Background from '../components/background/Background'
import Elevator from '../components/elevator/Elevator'
import Header from '../components/header/Header'

export default function Index() {
  const width = 3218
  const height = 1302
  const props = GetProps({ width: width, height: height })
  const { BackgroundProps } = { ...props }

  return (
    <>
      <Header />
      <Background {...BackgroundProps} />
      <Elevator />
    </>
  )
}

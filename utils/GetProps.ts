import * as Props from '../types/props'
import background from '../public/images/background.jpg'

const GetProps = (props: Props.GetPropsProps) => {
  const { width, height } = props

  const BackgroundProps: Props.BackgroundProps = {
    image: background,
    width: width,
    height: height,
  }

  const ContactProps: Props.ContactProps = {
    phoneNumber: '###-###-####',
    email: 'thewebdev@webdevsolutions.dev',
  }

  return {
    BackgroundProps,
    ContactProps,
  }
}

export default GetProps

import * as Props from '../types/props'
import background from '../public/images/fut.png'

const GetProps = () => {
  const BackgroundProps: Props.BackgroundProps = {
    image: background,
  }

  const ElevatorProps: Props.ElevatorProps = {
    pitch: 'Please pretty please let me work for you',
  }

  const ContactProps: Props.ContactProps = {
    phoneNumber: '240-808-4635',
    email: 'thewebdev@webdevsolutions.dev',
  }

  return {
    BackgroundProps,
    ElevatorProps,
    ContactProps,
  }
}

export default GetProps

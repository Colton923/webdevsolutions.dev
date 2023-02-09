import { StaticImageData } from 'next/image'

export type BackgroundProps = {
  image?: StaticImageData
}

export type ContactProps = {
  phoneNumber: string
  email?: string
}

export type ElevatorProps = {
  pitch: string
}

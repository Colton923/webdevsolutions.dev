import { StaticImageData } from 'next/image'

export type BackgroundProps = {
  image?: StaticImageData
  width?: number
  height?: number
}

export type ContactProps = {
  phoneNumber: string
  email?: string
}

export type GetPropsProps = {
  width?: number
  height?: number
}

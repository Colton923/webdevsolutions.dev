'use client'

import styles from './Background.module.css'
import { BackgroundProps } from '../../types/props'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { wrap } from 'module'

export default function Background(props: BackgroundProps) {
  const { width, height, image } = { ...props }
  const [time, setTime] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [backgroundHeight, setBackgroundHeight] = useState(0)
  const [backgroundWidth, setBackgroundWidth] = useState(0)
  const [poppedCount, setPoppedCount] = useState(0)
  const wrapper = document.getElementById('wrapper')
  const currentPop = document.getElementById('popcount')
  const stackList = [
    'Next JS',
    'React JS',
    'Firebase',
    'TypeScript',
    'Node JS',
    'HTML',
    'CSS',
    'JavaScript',
    'React-Hook-Form',
    'Stripe',
    'Squre Up',
    'Not Wordpress',
    'Not Wix',
    'Not a Template',
    'Not a Theme',
    'Not a Plugin',
    'Vercel',
    'GCP',
  ]

  const IncrementPop = () => {
    if (currentPop) {
      setPoppedCount(parseInt(currentPop.innerHTML) + 1)
    }
  }

  useEffect(() => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    setScreenHeight(screenHeight)
    setScreenWidth(screenWidth)
    if (height !== undefined && width !== undefined) {
      if (screenHeight > height) {
        setBackgroundHeight(screenHeight)
        const scale = screenHeight / height
        setBackgroundWidth(width * scale)
      } else {
        setBackgroundHeight(height)
        setBackgroundWidth(width)
      }
    }
  }, [height, width])

  useEffect(() => {
    const NewDiv = (x: number, y: number) => {
      const randomStackItem = stackList[Math.floor(Math.random() * stackList.length)]
      const maxX = screenWidth - 75
      const maxY = screenHeight - 75
      const minX = 75
      const minY = 75
      if (x > maxX) {
        x = maxX
      }
      if (x < minX) {
        x = minX
      }
      if (y > maxY) {
        y = maxY
      }
      if (y < minY) {
        y = minY
      }
      const div = document.createElement('div')
      div.innerHTML = `<p class="${styles.fireworksInnerText}">${randomStackItem}</p>`
      div.setAttribute(
        'style',
        `position: absolute; top: ${y}px; left: ${x}px; width: ${
          screenWidth / 4
        }px; height: ${
          screenHeight / 4
        }px; overflow: hidden; background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%); backdrop-filter: blur(1px); border-radius: 50%; z-index: 100; cursor: pointer;`
      )
      div.setAttribute('class', styles.fireworks)
      div.addEventListener('click', () => {
        div.remove()
        IncrementPop()
      })
      return div
    }
    const AddNewDiv = () => {
      const divX = Math.floor(Math.random() * screenWidth)
      const divY = Math.floor(Math.random() * screenHeight)
      const div = NewDiv(divX, divY)
      if (wrapper) {
        const children = wrapper?.childNodes
        if (children.length < 12) {
          wrapper.appendChild(div)
        } else {
          wrapper.removeChild(children[1])
        }
      }
    }

    const interval = setInterval(() => {
      AddNewDiv()
      setTime(time + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [time])

  return (
    <div style={{ height: 0, width: 0, overflow: 'hidden' }} id="wrapper">
      <div className={styles.wrapper}>
        <div
          className={styles.background}
          style={{
            width: backgroundWidth,
            height: backgroundHeight,
            overflow: 'hidden',
          }}
        >
          {image ? (
            <Image
              src={image}
              alt="image"
              width={backgroundWidth}
              height={backgroundHeight}
              className={styles.image}
              quality={100}
            />
          ) : null}
        </div>
        <div className={styles.fireworksCount}>
          <p className={styles.fireworksCountText}>Popped Bubbles</p>
          <p className={styles.fireworksCountText} id="popcount">
            {poppedCount}
          </p>
        </div>
      </div>
    </div>
  )
}

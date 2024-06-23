import { StaticImageData } from 'next/image'

import Axios from '/public/svg/landing/axios.svg'
import Css from '/public/svg/landing/css.svg'
import Git from '/public/svg/landing/git.svg'
import Html from '/public/svg/landing/html.svg'
import Javascript from '/public/svg/landing/js.svg'
import NextJs from '/public/svg/landing/next-js.svg'
import React from '/public/svg/landing/react.svg'
import ReactQuery from '/public/svg/landing/reactquery.svg'
import Recoil from '/public/svg/landing/recoil.svg'
import Rhf from '/public/svg/landing/rhf.svg'
import Storybook from '/public/svg/landing/storybook.svg'
import StyledComponent from '/public/svg/landing/styled-component.svg'
import Tailwind from '/public/svg/landing/tailwind-css.svg'
import Typescript from '/public/svg/landing/ts.svg'
import Vite from '/public/svg/landing/vite.svg'

type StackImageProps = {
  id: number
  src: StaticImageData
  alt: string
}

export const STACK_IMAGES: StackImageProps[] = [
  {
    id: 0,
    src: Html,
    alt: 'Html Logo'
  },
  {
    id: 1,
    src: Css,
    alt: 'Css Logo'
  },
  {
    id: 2,
    src: Git,
    alt: 'Git Logo'
  },
  {
    id: 3,
    src: Javascript,
    alt: 'Javascript Logo'
  },
  {
    id: 4,
    src: Typescript,
    alt: 'Typescript Logo'
  },
  {
    id: 5,
    src: React,
    alt: 'React Logo'
  },
  {
    id: 6,
    src: Vite,
    alt: 'Vite Logo'
  },
  {
    id: 7,
    src: Tailwind,
    alt: 'Tailwind Logo'
  },
  {
    id: 8,
    src: Storybook,
    alt: 'Storybook Logo'
  },
  {
    id: 9,
    src: NextJs,
    alt: 'NextJs Logo'
  },
  {
    id: 10,
    src: ReactQuery,
    alt: 'ReactQuery Logo'
  },
  {
    id: 11,
    src: Axios,
    alt: 'Axios Logo'
  },
  {
    id: 12,
    src: StyledComponent,
    alt: 'StyledComponent Logo'
  },
  {
    id: 13,
    src: Rhf,
    alt: 'Rhf Logo'
  },
  {
    id: 14,
    src: Recoil,
    alt: 'Recoil Logo'
  }
]

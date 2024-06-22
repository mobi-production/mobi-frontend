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

type Props = {
  id: string
  src: StaticImageData
  alt: string
}

export const STACK_IMAGES: Props[] = [
  {
    id: 'Html',
    src: Html,
    alt: 'Html Logo'
  },
  {
    id: 'Css',
    src: Css,
    alt: 'Css Logo'
  },
  {
    id: 'Git',
    src: Git,
    alt: 'Git Logo'
  },
  {
    id: 'Javascript',
    src: Javascript,
    alt: 'Javascript Logo'
  },
  {
    id: 'Typescript',
    src: Typescript,
    alt: 'Typescript Logo'
  },
  {
    id: 'React',
    src: React,
    alt: 'React Logo'
  },
  {
    id: 'Vite',
    src: Vite,
    alt: 'Vite Logo'
  },
  {
    id: 'Tailwind',
    src: Tailwind,
    alt: 'Tailwind Logo'
  },
  {
    id: 'Storybook',
    src: Storybook,
    alt: 'Storybook Logo'
  },
  {
    id: 'NextJs',
    src: NextJs,
    alt: 'NextJs Logo'
  },
  {
    id: 'ReactQuery',
    src: ReactQuery,
    alt: 'ReactQuery Logo'
  },
  {
    id: 'Axios',
    src: Axios,
    alt: 'Axios Logo'
  },
  {
    id: 'StyledComponent',
    src: StyledComponent,
    alt: 'StyledComponent Logo'
  },
  {
    id: 'Rhf',
    src: Rhf,
    alt: 'Rhf Logo'
  },
  {
    id: 'Recoil',
    src: Recoil,
    alt: 'Recoil Logo'
  }
]

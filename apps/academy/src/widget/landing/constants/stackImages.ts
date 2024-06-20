import { StaticImageData } from 'next/image'

import Css from '/public/svg/css.svg'
import Git from '/public/svg/git.svg'
import Html from '/public/svg/html.svg'
import Javascript from '/public/svg/js.svg'
import NextJs from '/public/svg/next-js.svg'
import ReactQuery from '/public/svg/reactquery.svg'
import Storybook from '/public/svg/storybook.svg'
import Tailwind from '/public/svg/tailwind-css.svg'
import Typescript from '/public/svg/ts.svg'
import Vite from '/public/svg/vite.svg'

type Props = {
  id: string
  src: StaticImageData
  alt: string
}

export const STACK_IMAGES: Props[] = [
  {
    id: 'Css',
    src: Css,
    alt: 'Css Logo'
  },
  {
    id: 'Html',
    src: Html,
    alt: 'Html Logo'
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
  }
]

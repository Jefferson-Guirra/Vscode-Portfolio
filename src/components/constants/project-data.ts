import { ProjectCardProps } from '../layouts/card/@types'
import { SiVisualstudiocode } from 'react-icons/si'
import { BiMoviePlay, BiTrip } from 'react-icons/bi'
import { GiBookshelf } from 'react-icons/gi'
import { MdFoundation } from 'react-icons/md'
import { TbDog } from 'react-icons/tb'
import { IoClipboardOutline } from 'react-icons/io5'
import { RiStethoscopeLine, RiTodoLine } from 'react-icons/ri'
import { GiFox } from 'react-icons/gi'
import { AiOutlineRocket } from 'react-icons/ai'
export const projectData: ProjectCardProps[] = [
  {
    colorLeft: '#e4be38',
    colorRight: '#f7d354',
    Icon: BiMoviePlay,
    title: 'Movies Net',
    contentText: 'website de informações de filmes',
    techs: [
      { name: 'React', borderColor: '#00d6ff' },
      { name: 'Redux', borderColor: '#764abd' },
      { name: 'Css-module', borderColor: '#3493ce' },
      { name: 'Firebase', borderColor: '#f58411' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/movies_net',
      },
      { title: 'LiveDemo', href: 'https://movies-net.netlify.app/' },
    ],
  },

  {
    colorLeft: '#001f3f',
    colorRight: '#001f3f98',
    Icon: GiBookshelf,
    title: 'Literando',
    contentText: 'E-commerce de livros',
    techs: [
      { name: 'Typescript', borderColor: '#007acd' },
      { name: 'Next', borderColor: '#00d6ff' },
      { name: 'Styled-components', borderColor: '#3493ce' },
      { name: 'Firebase', borderColor: '#f58411' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/e-commerce',
      },
      { title: 'LiveDemo', href: 'https://literando.vercel.app/' },
    ],
  },

  {
    colorLeft: '#1fa4e5',
    colorRight: '#1fa3e58f',
    Icon: MdFoundation,
    title: 'Fundação Dev',
    contentText: 'Website corporativo',
    techs: [
      { name: 'Typescript', borderColor: '#007acd' },
      { name: 'Next', borderColor: '#00d6ff' },
      { name: 'Styled-components', borderColor: '#3493ce' },
      { name: 'Firebase', borderColor: '#f58411' },
      { name: 'Prismic', borderColor: '#ed1e00' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Fundacao-Dev',
      },
      { title: 'LiveDemo', href: 'https://fundacao-dev.vercel.app/' },
    ],
  },

  {
    colorLeft: '#ffbb11',
    colorRight: '#ffbc11c4',
    Icon: TbDog,
    title: 'Dogs',
    contentText: 'Rede social para cachorros.',
    techs: [
      { name: 'React', borderColor: '#00d6ff' },
      { name: 'Redux', borderColor: '#764abd' },
      { name: 'Css-modules', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Dogs',
      },
      {
        title: 'LiveDemo',
        href: 'https://dogs-rede-social-cachorro.netlify.app/login',
      },
    ],
  },

  {
    colorLeft: '#17181f',
    colorRight: '#17181fa6',
    Icon: RiTodoLine,
    title: 'Todo List',
    contentText: 'Lista de tarefas interativa.',
    techs: [
      { name: 'React', borderColor: '#00d6ff' },
      { name: 'Typescript', borderColor: '#007acd' },
      { name: 'Styled-components', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Lista-de-Tarefas',
      },
      {
        title: 'LiveDemo',
        href: 'https://projeto-06-lista-de-tarefas.netlify.app/',
      },
    ],
  },

  {
    colorRight: '#3493ce',
    colorLeft: '#2fa7f3',
    Icon: SiVisualstudiocode,
    title: 'Vscode Portfolio',
    contentText: 'projeto de portfolio baseado no Vscode',
    techs: [
      { name: 'next', borderColor: '#2fa7f3' },
      { name: 'styled-components', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Vscode-Portfolio',
      },
      { title: 'LiveDemo', href: 'https://movies-net.netlify.app/' },
    ],
  },

  {
    colorLeft: '#141a29',
    colorRight: '#141a29c2',
    Icon: IoClipboardOutline,
    title: 'Meu Board',
    contentText: 'Lista de tarfas',
    techs: [
      { name: 'Next', borderColor: '#00d6ff' },
      { name: 'Typescript', borderColor: '#007acd' },
      { name: 'Styled-components', borderColor: '#3493ce' },
      { name: 'Firebase', borderColor: '#f58411' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Meu-Board',
      },
      { title: 'LiveDemo', href: 'https://meu-board-three.vercel.app/' },
    ],
  },
  {
    colorLeft: '#37216a',
    colorRight: '#37216abb',
    Icon: AiOutlineRocket,
    title: 'Portofolio',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Css', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Portfolio',
      },
      {
        title: 'LiveDemo',
        href: 'https://my-storage-jefferson.netlify.app/#project',
      },
    ],
  },
  {
    colorLeft: '#00856e',
    colorRight: '#00856fb4',
    Icon: RiStethoscopeLine,
    title: 'Doctor Care',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Css', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Doctor-Care',
      },
      { title: 'LiveDemo', href: 'https://doctor-care-clinica.netlify.app/' },
    ],
  },

  {
    colorLeft: '#ffbb55',
    colorRight: '#ffbb55c7',
    Icon: GiFox,
    title: 'Animais fantásticos',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Css', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Doctor-Care',
      },
      { title: 'LiveDemo', href: 'https://doctor-care-clinica.netlify.app/' },
    ],
  },
  {
    colorLeft: '#212529',
    colorRight: '#2125298f',
    Icon: BiTrip,
    title: 'Caravan',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Bootstrap', borderColor: '#764abd' },
    ],
    links: [
      {
        title: 'SourceDemo',
        href: 'https://github.com/Jefferson-Guirra/Caravan',
      },
      {
        title: 'LiveDemo',
        href: 'https://caravan-viagens-empresa.netlify.app/',
      },
    ],
  },
]
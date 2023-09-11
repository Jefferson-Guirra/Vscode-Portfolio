import { ProjectCardProps } from '../layouts/card/@types'
/*import { SiVisualstudiocode } from 'react-icons/si'
import { BiMoviePlay, BiTrip } from 'react-icons/bi'
import { GiBookshelf } from 'react-icons/gi'
import { MdFoundation } from 'react-icons/md'
import { TbDog } from 'react-icons/tb'
import { IoClipboardOutline } from 'react-icons/io5'
import { RiStethoscopeLine, RiTodoLine } from 'react-icons/ri'
import { GiFox } from 'react-icons/gi'
import { AiOutlineRocket } from 'react-icons/ai'*/
export const projectData: ProjectCardProps[] = [
  {
    colorLeft: '#e4be38',
    colorRight: '#f7d354',
    iconName: 'movie',
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
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/movies_net',
      },
      { title: 'Link', href: 'https://movies-net.netlify.app/' },
    ],
  },

  {
    colorLeft: '#001f3f',
    colorRight: '#001f3f98',
    iconName: 'book',
    title: 'Literando',
    contentText: 'E-commerce de livros',
    techs: [
      { name: 'Typescript', borderColor: '#007acd' },
      { name: 'Next', borderColor: '#00d6ff' },
      { name: 'Css', borderColor: '#3493ce' },
      { name: 'Nodejs',  borderColor: '#90C53F'},
      { name: 'Express', borderColor: '#000000'},
      { name: 'MongoDb', borderColor: '#489B49' }
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/e-commerce',
      },
      { title: 'Link', href: 'https://literando.vercel.app/' },
    ],
  },

  {
    colorLeft: '#1fa4e5',
    colorRight: '#1fa3e58f',
    iconName: 'foundation',
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
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Fundacao-Dev',
      },
      { title: 'Link', href: 'https://fundacao-dev.vercel.app/' },
    ],
  },

  {
    colorLeft: '#ffbb11',
    colorRight: '#ffbc11c4',
    iconName: 'dog',
    title: 'Dogs',
    contentText: 'Rede social para cachorros.',
    techs: [
      { name: 'React', borderColor: '#00d6ff' },
      { name: 'Redux', borderColor: '#764abd' },
      { name: 'Css-modules', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Dogs',
      },
      {
        title: 'Link',
        href: 'https://dogs-rede-social-cachorro.netlify.app/login',
      },
    ],
  },

  {
    colorLeft: '#17181f',
    colorRight: '#17181fa6',
    iconName: 'list',
    title: 'Todo List',
    contentText: 'Lista de tarefas interativa.',
    techs: [
      { name: 'React', borderColor: '#00d6ff' },
      { name: 'Typescript', borderColor: '#007acd' },
      { name: 'Styled-components', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Lista-de-Tarefas',
      },
      {
        title: 'Link',
        href: 'https://projeto-06-lista-de-tarefas.netlify.app/',
      },
    ],
  },

  {
    colorRight: '#3493ce',
    colorLeft: '#2fa7f3',
    iconName: 'visual-studio-code',
    title: 'Vscode Portfolio',
    contentText: 'projeto de portfolio baseado no Vscode',
    techs: [
      { name: 'next', borderColor: '#2fa7f3' },
      { name: 'styled-components', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Vscode-Portfolio',
      },
      {
        title: 'Link',
        href: 'https://vscode-portfolio-developer.vercel.app/',
      },
    ],
  },

  {
    colorLeft: '#141a29',
    colorRight: '#141a29c2',
    iconName: 'board-list',
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
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Meu-Board',
      },
      { title: 'Link', href: 'https://meu-board-three.vercel.app/' },
    ],
  },

  {
    colorLeft: '#37216a',
    colorRight: '#37216abb',
    iconName: 'space',
    title: 'Portfolio',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Css', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Portfolio',
      },
      {
        title: 'Link',
        href: 'https://my-storage-jefferson.netlify.app/',
      },
    ],
  },

  {
    colorLeft: '#00856e',
    colorRight: '#00856fb4',
    iconName: 'doctor',
    title: 'Doctor Care',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Css', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Doctor-Care',
      },
      { title: 'Link', href: 'https://doctor-care-clinica.netlify.app/' },
    ],
  },

  {
    colorLeft: '#ffbb55',
    colorRight: '#ffbb55c7',
    iconName: 'frog',
    title: 'Animais fantásticos',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Css', borderColor: '#3493ce' },
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Doctor-Care',
      },
      {
        title: 'Link',
        href: 'https://jefferson-guirra.github.io/-Projetos/projeto-02/',
      },
    ],
  },

  {
    colorLeft: '#212529',
    colorRight: '#2125298f',
    iconName: 'bus',
    title: 'Caravan',
    contentText: 'Landing Page',
    techs: [
      { name: 'Html', borderColor: '#e44d26' },
      { name: 'Javascript', borderColor: '#007acd' },
      { name: 'Bootstrap', borderColor: '#764abd' },
    ],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Jefferson-Guirra/Caravan',
      },
      {
        title: 'Link',
        href: 'https://caravan-viagens-empresa.netlify.app/',
      },
    ],
  },
]

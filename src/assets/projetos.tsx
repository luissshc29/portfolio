import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi'
import { FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiRecoil } from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'

export interface ProjetoType {
    id: number,
    nome: string,
    imagem: string,
    tecnologias: JSX.Element[],
    site: string,
    repositorio: string
}

const projetos:ProjetoType[] = [
    {
        id: 1,
        nome: 'Pokédex',
        imagem: '/images/projetos/pokedex.png',
        tecnologias: [
            <FaSass color='#fc03c6'/>,
            <BiLogoReact color='#03f2ff'/>,
            <BiLogoTypescript color='#4466fc'/>,
            <SiNextdotjs color='#ffffff'/>
        ],
        site: 'https://pokedex-luissshc29.vercel.app/',
        repositorio: 'https://github.com/luissshc29/pokedex'
    },
    {
        id: 2,
        nome: 'React Supplements',
        imagem: '/images/projetos/react-supplements.png',
        tecnologias: [
            <FaSass color='#fc03c6'/>,
            <BiLogoTypescript color='#4466fc'/>,
            <BiLogoReact color='#03f2ff'/>
        ],
        site: 'https://react-supplements.vercel.app/',
        repositorio: 'https://github.com/luissshc29/react-supplements'
    },
    {
        id: 3,
        nome: 'Página de Login',
        imagem: '/images/projetos/login.png',
        tecnologias: [
            <BiLogoReact color='#03f2ff'/>,
            <SiNextdotjs color='#ffffff'/>
        ],
        site: 'https://pagina-de-login-amber.vercel.app/',
        repositorio: 'https://github.com/luissshc29/pagina-de-login'
    },
    {
        id: 4,
        nome: 'Sorteador de Amigo Secreto',
        imagem: '/images/projetos/amigo-secreto.png',
        tecnologias: [
            <FaSass color='#fc03c6'/>,
            <BiLogoTypescript color='#4466fc'/>,
            <BiLogoReact color='#03f2ff'/>,
            <SiRecoil color='#ffffff'/>
        ],
        site: 'https://sorteador-amigo-secreto-ochre.vercel.app/',
        repositorio: 'https://github.com/luissshc29/sorteador-amigo-secreto'
    },
    {
        id: 5,
        nome: 'Movie Finder',
        imagem: '/images/projetos/movie-finder.png',
        tecnologias: [
            <AiFillHtml5 color='#fc6203'/>,
            <BiLogoCss3 color='#0349fc'/>,
            <BiLogoJavascript color='#fcd303'/>
        ],
        site: 'https://movie-finder-psi-lyart.vercel.app/',
        repositorio: 'https://github.com/luissshc29/Movie-Finder'
    },
    {
        id: 6,
        nome: 'Jogo da Velha',
        imagem: '/images/projetos/jogo-da-velha.png',
        tecnologias: [
            <AiFillHtml5 color='#fc6203'/>,
            <BiLogoCss3 color='#0349fc'/>,
            <BiLogoJavascript color='#fcd303'/>
        ],
        site: 'https://jogo-da-velha-five-beta.vercel.app/',
        repositorio: 'https://github.com/luissshc29/jogo-da-velha'
    },
    {
        id: 7,
        nome: 'Cinetag',
        imagem: '/images/projetos/cinetag.png',
        tecnologias: [
            <BiLogoCss3 color='#0349fc'/>,
            <BiLogoJavascript color='#fcd303'/>,
            <BiLogoReact color='#03f2ff'/>,
        ],
        site: 'https://cinetag-sage-alpha.vercel.app/',
        repositorio: 'https://github.com/luissshc29/cinetag'
    },
]

export default projetos
import { AiFillHtml5 } from "react-icons/ai";
import {
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoTypescript,
} from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { SiNextdotjs, SiRecoil } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";

export interface ProjetoType {
    id: string;
    nomeBR: string;
    nomeUS: string;
    imagem: string;
    tecnologias: JSX.Element[];
    site: string;
    repositorio?: string;
}

const projetos: ProjetoType[] = [
    {
        id: uuidv4(),
        nomeBR: "Catálogo Unicapas ®",
        nomeUS: "Unicapas® catalog",
        imagem: "/images/projetos/unicapas.png",
        tecnologias: [
            <SiTailwindcss color="#00c8ff" />,
            <BiLogoReact color="#03f2ff" />,
            <BiLogoTypescript color="#4466fc" />,
        ],
        site: "https://unicapas.com.br",
    },
    {
        id: uuidv4(),
        nomeBR: "Página de login com OAuth",
        nomeUS: "OAuth Login page",
        imagem: "/images/projetos/auth-system.png",
        tecnologias: [
            <SiTailwindcss color="#00c8ff" />,
            <BiLogoTypescript color="#4466fc" />,
            <SiNextdotjs color="#ffffff" />,
            <GrMysql color="#00c8ff" size={24} />,
        ],
        site: "https://auth-system-iota.vercel.app/",
        repositorio: "https://github.com/luissshc29/Auth-system",
    },
    {
        id: uuidv4(),
        nomeBR: "Pokédex",
        nomeUS: "Pokédex",
        imagem: "/images/projetos/pokedex.png",
        tecnologias: [
            <FaSass color="#fc03c6" />,
            <BiLogoReact color="#03f2ff" />,
            <BiLogoTypescript color="#4466fc" />,
            <SiNextdotjs color="#ffffff" />,
        ],
        site: "https://pokedex-luissshc29.vercel.app/",
        repositorio: "https://github.com/luissshc29/pokedex",
    },
    {
        id: uuidv4(),
        nomeBR: "Bloco de notas online",
        nomeUS: "Online notepad",
        imagem: "/images/projetos/notepad.png",
        tecnologias: [
            <SiTailwindcss color="#00c8ff" />,
            <BiLogoTypescript color="#4466fc" />,
            <TbBrandRedux color="#9d03fc" />,
            <SiNextdotjs color="#ffffff" />,
        ],
        site: "https://notepad-luissshc29.vercel.app/",
        repositorio: "https://github.com/luissshc29/Notepad",
    },
    {
        id: uuidv4(),
        nomeBR: "Countries Wiki",
        nomeUS: "Countries Wiki",
        imagem: "/images/projetos/countries-wiki.png",
        tecnologias: [
            <SiTailwindcss color="#00c8ff" />,
            <BiLogoTypescript color="#4466fc" />,
            <SiNextdotjs color="#ffffff" />,
        ],
        site: "https://countries-wiki-tau.vercel.app/",
        repositorio: "https://github.com/luissshc29/Countries-Wiki",
    },
    {
        id: uuidv4(),
        nomeBR: "React Supplements",
        nomeUS: "React Supplements",
        imagem: "/images/projetos/react-supplements.png",
        tecnologias: [
            <FaSass color="#fc03c6" />,
            <BiLogoTypescript color="#4466fc" />,
            <BiLogoReact color="#03f2ff" />,
        ],
        site: "https://react-supplements.vercel.app/",
        repositorio: "https://github.com/luissshc29/react-supplements",
    },
    {
        id: uuidv4(),
        nomeBR: "Sorteador de Amigo Secreto",
        nomeUS: "Secret Santa drawer",
        imagem: "/images/projetos/amigo-secreto.png",
        tecnologias: [
            <FaSass color="#fc03c6" />,
            <BiLogoTypescript color="#4466fc" />,
            <BiLogoReact color="#03f2ff" />,
            <SiRecoil color="#ffffff" />,
        ],
        site: "https://sorteador-amigo-secreto-ochre.vercel.app/",
        repositorio: "https://github.com/luissshc29/sorteador-amigo-secreto",
    },
    {
        id: uuidv4(),
        nomeBR: "Buscador de filmes",
        nomeUS: "Movie finder",
        imagem: "/images/projetos/movie-finder.png",
        tecnologias: [
            <AiFillHtml5 color="#fc6203" />,
            <BiLogoCss3 color="#0349fc" />,
            <BiLogoJavascript color="#fcd303" />,
        ],
        site: "https://movie-finder-psi-lyart.vercel.app/",
        repositorio: "https://github.com/luissshc29/Movie-Finder",
    },
    {
        id: uuidv4(),
        nomeBR: "Jogo da Velha",
        nomeUS: "Hash",
        imagem: "/images/projetos/jogo-da-velha.png",
        tecnologias: [
            <AiFillHtml5 color="#fc6203" />,
            <BiLogoCss3 color="#0349fc" />,
            <BiLogoJavascript color="#fcd303" />,
        ],
        site: "https://jogo-da-velha-five-beta.vercel.app/",
        repositorio: "https://github.com/luissshc29/jogo-da-velha",
    },
    {
        id: uuidv4(),
        nomeBR: "Cinetag",
        nomeUS: "Cinetag",
        imagem: "/images/projetos/cinetag.png",
        tecnologias: [
            <BiLogoCss3 color="#0349fc" />,
            <BiLogoJavascript color="#fcd303" />,
            <BiLogoReact color="#03f2ff" />,
        ],
        site: "https://cinetag-sage-alpha.vercel.app/",
        repositorio: "https://github.com/luissshc29/cinetag",
    },
];

export default projetos;

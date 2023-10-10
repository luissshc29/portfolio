import React, { useEffect, useState } from 'react'
import styles from './Apresentacao.module.scss'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { TbBrandRedux } from 'react-icons/tb'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi'
import { FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiRecoil } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import BotaoNav from 'Components/BotaoNav'
import Titulo from 'Components/Titulo'
import { useSelector } from 'react-redux'

export default function Apresentacao() {

    const tecnologias = [
        {
            id: 1,
            nome: 'HTML',
            component: <AiFillHtml5 color='#fc6203'/> , 
        },
        {
            id: 2,
            nome: 'CSS',
            component: <BiLogoCss3 color='#0349fc'/> , 
        },
        {
            id: 3,
            nome: 'Sass',
            component: <FaSass color='#fc03c6'/> , 
        },
        {
            id: 4,
            nome: 'Javascript',
            component: <BiLogoJavascript color='#fcd303'/> , 
        },
        {
            id: 5,
            nome: 'Typescript',
            component: <BiLogoTypescript color='#4466fc'/> , 
        },
        {
            id: 6,
            nome: 'React',
            component: <BiLogoReact color='#03f2ff'/> , 
        },
        {
            id: 7,
            nome: 'Recoil',
            component: <SiRecoil color='#ffffff'/> , 
        },
        {
            id: 8,
            nome: 'Redux',
            component: <TbBrandRedux color='#9d03fc'/> , 
        },
        {
            id: 9,
            nome: 'Next.js',
            component: <SiNextdotjs color='#ffffff'/> , 
        },
        {
            id: 10,
            nome: 'Git',
            component: <BsGit color='#fc6203'/> , 
        },
    ]

    const textoBR = `Me chamo Luis Henrique e sou um grande entusiasta do desenvolvimento web. Atualmente, desenvolvo aplicações há cerca de um ano utilizando ferramentas muito difundidas no mercado. Dentre as quais estão HTML, CSS, Javascript, Typescript, React, Redux, Next.js, Git e GitHub. Ao longo desse portfólio você verá mais sobre os meus principais projetos e poderá acessar todos que tiver interesse. Aproveite a visita!`

    const textoUS = `My name is Luis Henrique and I'm a huge web development enthusiast. Currently, I've been developing applications for about a year using tools that are widespread on the market. These include HTML, CSS, Javascript, Typescript, React, Redux, Next.js, Git and GitHub. Throughout this portfolio you will see more about my main projects and be able to access any projects you are interested in. Enjoy your visit!`

    const tituloBR = 'Olá, seja bem vindo(a)!'
    const tituloUS = 'Hello, welcome!'

    const linguagem = useSelector((state: any) => state.linguagem)

  return (
    <div className={styles.container}>
        <div className={styles.container_div}>
            <div className={styles.container_div_tech}>

            {
            
                tecnologias.map(item => (
                    <div key={item.id} className={styles.container_div_tech_item}>
                        {item.component}
                        <p>{item.nome}</p>
                    </div>
                ))
            
            }
            </div>
        </div>
        
        <Titulo tituloString={linguagem === 'PT' ? tituloBR : tituloUS}/>
        <p className={styles.container_descricao}>{linguagem === 'PT' ? textoBR : textoUS}</p>
        <BotaoNav avancar location='/projetos'>{linguagem === 'PT' ? 'Ir para projetos' : 'See projects'}</BotaoNav>
    </div>
  )
}

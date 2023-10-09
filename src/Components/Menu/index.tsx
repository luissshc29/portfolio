import React from 'react'
import { AiOutlineLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import styles from './Menu.module.scss'
import classNames from 'classnames'

export default function Menu() {

    const social = [
        {
            id:1,
            texto:'Linkedin',
            link:'https://www.linkedin.com/in/luis-henrique-6a7425165/',
            componente:<AiOutlineLinkedin/>    
        },
        {
            id:2,
            texto:'GitHub',
            link:'https://github.com/luissshc29',
            componente:<AiFillGithub/>
        },
        {
            id:3,
            texto:'Instagram',
            link:'https://www.instagram.com/luissshc_/',
            componente:<AiOutlineInstagram/>
        },
    ]

  return (
    <div className={styles.menu}>
        <img src='/images/instagram-pic.jpg' alt='Avatar' className={styles.menu_imagem}/>
        <div className={styles.menu_links}>

            {social.map(item => (
                <a key={item.id} href={item.link} className={`${styles.menu_links_link} ${styles[`${item.texto.toLowerCase()}`]}`}>
                    {item.componente}
                    <p className={styles.menu_links_link_texto}>{item.texto}</p>
                </a>
            ))}
        </div>
    </div>
  )
}

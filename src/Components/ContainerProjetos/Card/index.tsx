import { ProjetoType } from 'assets/projetos'
import React from 'react'
import styles from './Card.module.scss'
import { AiOutlineLink } from 'react-icons/ai'
import { PiBookBookmarkThin } from 'react-icons/pi'

export default function Card({item}: {item: ProjetoType}) {
    return (
        <div className={styles.card}>
            <img src={item.imagem} alt={item.nome} className={styles.card_imagem}/>
            <div className={styles.card_tech}>
                {item.tecnologias.map((tec, index) => (
                    <div key={index} className={styles.card_tech_item}>{tec}</div>
                ))}
            </div>
            <h1 className={styles.card_titulo}>{item.nome}</h1>
            <a className={styles.card_link} href={item.site}><span>Link</span><AiOutlineLink/></a>
            <a className={styles.card_link} href={item.repositorio}><span>Repositório</span><PiBookBookmarkThin/></a>
        </div>
    )
}

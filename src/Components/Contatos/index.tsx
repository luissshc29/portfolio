import React from 'react'
import styles from './Contatos.module.scss'
import Titulo from 'Components/Titulo'
import BotaoNav from 'Components/BotaoNav'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Contatos() {
    
    const tituloBR = 'Contatos'
    const tituloUS = 'Contacts'

    const linguagem = useSelector((state: any) => state.linguagem)

  return (
    <div className={styles.container}>
        <Titulo tituloString={linguagem === 'PT' ? tituloBR : tituloUS}/>
        <div className={styles.container_contatos}>
            <div className={styles.container_contatos_item}>
                <BsTelephone/>
                <h2>{linguagem === 'PT' ? 'Telefone: ' : 'Phone number: '} <span>+55 (85) 98951-3959</span></h2>
            </div>
            <div className={styles.container_contatos_item}>
                <AiOutlineMail/>
                <h2>E-mail: <span>luishcc2003@gmail.com</span></h2>
            </div>
        </div>
        <div style={{display:'flex', width: "100%", justifyContent:'space-evenly'}}>   
            <BotaoNav voltar location='/projetos'>{linguagem === 'PT' ? 'Voltar para projetos' : 'See projects'}</BotaoNav>
        </div>
    </div>
  )
}

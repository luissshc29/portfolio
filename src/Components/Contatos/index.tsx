import React from 'react'
import styles from './Contatos.module.scss'
import Titulo from 'Components/Titulo'
import BotaoNav from 'Components/BotaoNav'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contatos() {
  return (
    <div className={styles.container}>
        <Titulo tituloString='Contatos'/>
        <div className={styles.container_contatos}>
            <div className={styles.container_contatos_item}>
                <BsTelephone/>
                <h2>Telefone: <span>(85) 98951-3959</span></h2>
            </div>
            <div className={styles.container_contatos_item}>
                <AiOutlineMail/>
                <h2>E-mail: <span>luishcc2003@gmail.com</span></h2>
            </div>
        </div>
        <div style={{display:'flex', width: "100%", justifyContent:'space-evenly'}}>   
            <BotaoNav voltar location='/projetos'>Voltar para projetos</BotaoNav>
        </div>
    </div>
  )
}

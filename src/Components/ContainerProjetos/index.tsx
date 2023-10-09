import React from 'react'
import styles from './ContainerProjetos.module.scss'
import projetos from 'assets/projetos'
import Card from './Card'
import Titulo from 'Components/Titulo'
import BotaoNav from 'Components/BotaoNav'

export default function ContainerProjetos() {
  return (
    <div className={styles.container}>
        <Titulo tituloString='Principais projetos'/>
        {projetos.map(item => (
            <Card key={item.id} item={item}/>
        ))}
        <div style={{display:'flex', width: "100%", justifyContent:'space-evenly'}}>   
            <BotaoNav voltar location='/'>Voltar para home</BotaoNav>
            <BotaoNav avancar location='/contatos'>Ir para contatos</BotaoNav>
        </div>
    </div>
  )
}

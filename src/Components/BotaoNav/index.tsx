import React from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'  
import styles from './BotaoNav.module.scss'
import classnames from 'classnames'
import { useRouter } from 'next/router'

export default function BotaoNav({avancar = false, voltar = false, children, location}: {avancar?: boolean, voltar?: boolean, children: any, location: string}) {

    const router = useRouter()

  return (
    <div style={{display:'flex'}}>
        { 
            voltar &&
                <button className={classnames(styles.botao, styles.botao_voltar)} onClick={() => router.push(location)}>
                    <AiOutlineArrowLeft/>
                    <p className={styles.botao_texto}>{children}</p>
                </button>
        }
        {
            avancar &&
                <button className={styles.botao} onClick={() => router.push(location)}>
                    <p className={styles.botao_texto}>{children}</p>
                    <AiOutlineArrowRight/>
                </button>
        }

    </div>
    
  )
}

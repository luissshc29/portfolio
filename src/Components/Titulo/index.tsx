import React, { useEffect, useState } from 'react'
import styles from './Titulo.module.scss'
import { useSelector } from 'react-redux'

export default function Titulo({tituloString}: {tituloString:string}) {

    let i = 0
    function digitando (texto: string, veloc: number, setTexto: React.Dispatch<React.SetStateAction<string>>) {

        if (i < texto.length) {
            setTexto(textoAnterior => textoAnterior += texto.charAt(i))
        }

        setTimeout(() => {
            i++
            digitando(texto, veloc, setTexto)
        }, veloc)

    }

    const [titulo, setTitulo] = useState('')
    const linguagem = useSelector((state: any) => state.linguagem)
    
    useEffect(() => {

        const textoTitulo = tituloString

        setTitulo('')
        digitando(textoTitulo, 75, setTitulo)
    }, [linguagem])
    

  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <span className={styles.underline}>_</span>
    </div>
  )
}

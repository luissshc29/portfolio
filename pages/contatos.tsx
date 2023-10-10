import Contatos from 'Components/Contatos'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Contato() {

    const linguagem = useSelector((state: any) => state.linguagem)
    
  return (
    <>
        <Head>
            <title>Luis Henrique - {linguagem === 'PT' ? 'Contato' : 'Contact'}</title>
        </Head>
        <Contatos/>
    </>
  )
}

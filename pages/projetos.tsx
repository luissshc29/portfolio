import ContainerProjetos from 'Components/ContainerProjetos'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Projetos() {

    const linguagem = useSelector((state: any) => state.linguagem)
    
  return (
    <>
        <Head>
            <title>Luis Henrique - {linguagem === 'PT' ? 'Projetos' : 'Projects'}</title>
        </Head>
        <ContainerProjetos/>
    </>
  )
}

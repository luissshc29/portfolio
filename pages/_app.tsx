import Menu from 'Components/Menu'
import Rodape from 'Components/Rodape'
import GlobalStyles from 'Styles/GlobalStyles'
import { GetStaticPaths, GetStaticProps } from 'next'
import type { AppProps } from 'next/app'

export const getStaticPaths: GetStaticPaths = async () => {

    const URLs = ['/', '/projetos', '/contatos']

    const paths = URLs.map(item => {
        return {params: {nome: item}}
    })

    return {
      paths,
      fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            
        }
    }
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Menu />
            <Component {...pageProps} />
            <Rodape />
        </>

    )
}
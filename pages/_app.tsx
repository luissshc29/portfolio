import Menu from "Components/Menu";
import Rodape from "Components/Rodape";
import GlobalStyles from "Styles/GlobalStyles";
import { GetStaticPaths, GetStaticProps } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "store/store";
import { Analytics } from "@vercel/analytics/react";
import ContainerPadrao from "Components/ContainerPadrao";

export const getStaticPaths: GetStaticPaths = async () => {
    const URLs = ["/", "/experiencia", "/projetos", "/contatos"];

    const paths = URLs.map((item) => {
        return { params: { nome: item } };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <Menu />
                <ContainerPadrao>
                    <Component {...pageProps} />
                </ContainerPadrao>
            </Provider>
            <Rodape />
            <Analytics />
        </>
    );
}

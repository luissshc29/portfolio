import Apresentacao from "Components/Apresentacao";
import Botao from "Components/Botao";
import Head from "next/head";
import React from "react";
import { FaDownload } from "react-icons/fa";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Luis Henrique - Home</title>
            </Head>
            <Apresentacao />
        </>
    );
}

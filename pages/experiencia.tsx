import Apresentacao from "Components/Apresentacao";
import Botao from "Components/Botao";
import ExperienciaContainer from "Components/ExperienciaContainer";
import Head from "next/head";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ExperienciaPage() {
    const linguagem = useSelector((state: any) => state.linguagem);

    return (
        <>
            <Head>
                <title>
                    Luis Henrique -{" "}
                    {linguagem === "PT" ? "Experiências" : "Experience"}
                </title>
            </Head>
            <ExperienciaContainer />
        </>
    );
}

import React from "react";
import styles from "./ContainerProjetos.module.scss";
import projetos from "assets/projetos";
import Card from "./Card";
import Titulo from "Components/Titulo";
import BotaoNav from "Components/BotaoNav";
import { useSelector } from "react-redux";

export default function ContainerProjetos() {
    const linguagem = useSelector((state: any) => state.linguagem);

    const tituloBR = "Principais projetos";
    const tituloUS = "Main projects";

    return (
        <div className={styles.container}>
            <Titulo tituloString={linguagem === "PT" ? tituloBR : tituloUS} />
            {projetos.map((item) => (
                <Card key={item.id} item={item} />
            ))}
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                }}
            >
                <BotaoNav voltar location="/experiencia">
                    {linguagem === "PT"
                        ? "Ver experiência"
                        : "See work experience"}
                </BotaoNav>
                <BotaoNav avancar location="/contatos">
                    {linguagem === "PT" ? "Ver contatos" : "See contact page"}
                </BotaoNav>
            </div>
        </div>
    );
}

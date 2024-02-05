import React from "react";
import styles from "./ExperienciaContainer.module.scss";
import Titulo from "Components/Titulo";
import { useSelector } from "react-redux";
import BotaoNav from "Components/BotaoNav";
import experiencias from "assets/experiencias";
import Experiencia from "./Experiencia";

export default function ExperienciaContainer() {
    const linguagem = useSelector((state: any) => state.linguagem);

    const tituloBR = "Experiência";
    const tituloUS = "Work experience";

    return (
        <div className={styles.container}>
            <Titulo tituloString={linguagem === "PT" ? tituloBR : tituloUS} />

            <div className={styles.container_experiencias}>
                {experiencias.map((item) => (
                    <Experiencia key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

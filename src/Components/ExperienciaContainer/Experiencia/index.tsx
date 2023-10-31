import { ExperienciaType } from "assets/experiencias";
import React from "react";
import styles from "./Experiencia.module.scss";
import { useSelector } from "react-redux";

export default function Experiencia({ item }: { item: ExperienciaType }) {
    const linguagem = useSelector((state: any) => state.linguagem);

    return (
        <div className={styles.experiencia}>
            <div className={styles.experiencia_icone}>{item.icone}</div>
            {linguagem === "PT" ? (
                <div className={styles.experiencia_detalhes}>
                    <h2 className={styles.experiencia_detalhes_titulo}>
                        {item.tituloBR}
                    </h2>
                    <p className={styles.experiencia_detalhes_desc}>
                        {item.descricaoBR}
                    </p>
                    <p className={styles.experiencia_detalhes_data}>
                        {item.dataInicioBR} - {item.dataFimBR}
                    </p>
                </div>
            ) : (
                <div className={styles.experiencia_detalhes}>
                    <h2 className={styles.experiencia_detalhes_titulo}>
                        {item.tituloUS}
                    </h2>
                    <p className={styles.experiencia_detalhes_desc}>
                        {item.descricaoUS}
                    </p>
                    <p className={styles.experiencia_detalhes_data}>
                        {item.dataInicioUS} - {item.dataFimUS}
                    </p>
                </div>
            )}
        </div>
    );
}

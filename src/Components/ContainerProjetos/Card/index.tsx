import { ProjetoType } from "assets/projetos";
import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineLink } from "react-icons/ai";
import { PiBookBookmarkThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import classNames from "classnames";

export default function Card({ item }: { item: ProjetoType }) {
    const linguagem = useSelector((state: any) => state.linguagem);

    return (
        <div className={styles.card}>
            <img
                src={item.imagem}
                alt={linguagem === "PT" ? item.nomeBR : item.nomeUS}
                className={styles.card_imagem}
            />
            <div className={styles.card_tech}>
                {item.tecnologias.map((tec, index) => (
                    <div key={index} className={styles.card_tech_item}>
                        {tec}
                    </div>
                ))}
            </div>
            <h1 className={styles.card_titulo}>
                {linguagem === "PT" ? item.nomeBR : item.nomeUS}
            </h1>
            <a target="_blank" className={styles.card_link} href={item.site}>
                <span>Link</span>
                <AiOutlineLink />
            </a>
            <a
                target="_blank"
                className={classNames(styles.card_link, {
                    [styles.card_link_disabled]: !item.repositorio,
                })}
                href={item.repositorio}
                aria-disabled={item.repositorio ? false : true}
            >
                <span>{linguagem === "PT" ? "Repositório" : "Repository"}</span>
                <PiBookBookmarkThin />
            </a>
        </div>
    );
}

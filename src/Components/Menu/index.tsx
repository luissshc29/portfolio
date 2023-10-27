import React from "react";
import {
    AiOutlineLinkedin,
    AiOutlineInstagram,
    AiFillGithub,
} from "react-icons/ai";
import styles from "./Menu.module.scss";
import { ImLoop2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { mudaLinguagem } from "store/reducers/linguagem";
import classnames from "classnames";
import BotaoNav from "Components/BotaoNav";
import { FaDownload } from "react-icons/fa";
import Botao from "Components/Botao";

export default function Menu() {
    const social = [
        {
            id: 1,
            texto: "Linkedin",
            link: "https://www.linkedin.com/in/luis-henrique-6a7425165/",
            componente: <AiOutlineLinkedin />,
        },
        {
            id: 2,
            texto: "GitHub",
            link: "https://github.com/luissshc29",
            componente: <AiFillGithub />,
        },
        {
            id: 3,
            texto: "Instagram",
            link: "https://www.instagram.com/luissshc_/",
            componente: <AiOutlineInstagram />,
        },
    ];

    const linguagem: string = useSelector((state: any) => state.linguagem);
    const dispatch = useDispatch();

    return (
        <div className={styles.menu}>
            <img
                src="/images/instagram-pic.jpg"
                alt="Avatar"
                className={styles.menu_imagem}
            />
            <div className={styles.menu_links}>
                {social.map((item) => (
                    <a
                        target="_blank"
                        key={item.id}
                        href={item.link}
                        className={`${styles.menu_links_link} ${
                            styles[`${item.texto.toLowerCase()}`]
                        }`}
                    >
                        {item.componente}
                        <p className={styles.menu_links_link_texto}>
                            {item.texto}
                        </p>
                    </a>
                ))}
            </div>
            <div className={styles.switch}>
                <p
                    className={classnames(styles.switch_texto, {
                        [styles.switch_texto_ativo]: linguagem === "PT",
                    })}
                    onClick={() => dispatch(mudaLinguagem("PT"))}
                >
                    PT-BR
                </p>
                <div
                    className={
                        linguagem === "PT" ? styles.switch_pt : styles.switch_us
                    }
                >
                    <ImLoop2 />
                </div>
                <p
                    className={classnames(styles.switch_texto, {
                        [styles.switch_texto_ativo]: linguagem === "US",
                    })}
                    onClick={() => dispatch(mudaLinguagem("US"))}
                >
                    EN-US
                </p>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
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

    const [client, setClient] = useState(false);

    useEffect(() => {
        setClient(true);
    }, []);

    if (client) {
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            height="25px"
                            width="25px"
                            version="1.1"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                        >
                            <circle
                                style={{ fill: "#00C85F" }}
                                cx="256"
                                cy="256"
                                r="256"
                            />
                            <path
                                style={{ fill: "#FFF046" }}
                                d="M246.207,103.892L28.673,248.915c-5.241,3.495-5.241,11.196,0,14.69l217.534,145.022  c5.93,3.954,13.656,3.954,19.586,0l217.534-145.022c5.241-3.495,5.241-11.196,0-14.69L265.793,103.892  C259.863,99.938,252.137,99.938,246.207,103.892z"
                            />
                            <circle
                                style={{ fill: "#4B82E1" }}
                                cx="256"
                                cy="256"
                                r="105.931"
                            />
                            <path
                                style={{ fill: "#FFFFFF" }}
                                d="M165.515,201.127c-3.47,5.709-6.403,11.761-8.758,18.111c49.205-3.345,128.166,5.419,197.503,76.211  c2.472-6.151,4.404-12.57,5.692-19.229C292.095,211.143,216.738,199.457,165.515,201.127z"
                            />
                        </svg>
                    </p>
                    <div
                        className={
                            linguagem === "PT"
                                ? styles.switch_pt
                                : styles.switch_us
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            height="25px"
                            width="25px"
                        >
                            <circle
                                style={{ fill: "#F0F0F0" }}
                                cx="256"
                                cy="256"
                                r="256"
                            />
                            <g>
                                <path
                                    style={{ fill: "#D80027" }}
                                    d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"
                                />
                                <path
                                    style={{ fill: "#D80027" }}
                                    d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"
                                />
                                <path
                                    style={{ fill: "#D80027" }}
                                    d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"
                                />
                                <path
                                    style={{ fill: "#D80027" }}
                                    d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819   C15.236,346.596,24.993,369.036,37.574,389.565z"
                                />
                            </g>
                            <path
                                style={{ fill: "#0052B4" }}
                                d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037  C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941  c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444  C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4  l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z   M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822  l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509  l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"
                            />
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    </p>
                </div>
                <div className={styles.menu__botoesNav}>
                    {window.location.pathname === "/" ? (
                        <>
                            <BotaoNav avancar location="/experiencia">
                                {linguagem === "PT"
                                    ? "Experiências"
                                    : "Work experience"}
                            </BotaoNav>
                        </>
                    ) : window.location.pathname === "/experiencia" ? (
                        <>
                            <BotaoNav voltar location="/">
                                {linguagem === "PT"
                                    ? "Página inicial"
                                    : "Home page"}
                            </BotaoNav>
                            <BotaoNav avancar location="/projetos">
                                {linguagem === "PT" ? "Projetos" : "Projects"}
                            </BotaoNav>
                        </>
                    ) : window.location.pathname === "/projetos" ? (
                        <>
                            <BotaoNav voltar location="/experiencia">
                                {linguagem === "PT"
                                    ? "Experiências"
                                    : "Work experience"}
                            </BotaoNav>
                            <BotaoNav avancar location="/contatos">
                                {linguagem === "PT" ? "Contatos" : "Contact"}
                            </BotaoNav>
                        </>
                    ) : (
                        <BotaoNav voltar location="/projetos">
                            {linguagem === "PT" ? "Projetos" : "Projects"}
                        </BotaoNav>
                    )}
                </div>
            </div>
        );
    }
}

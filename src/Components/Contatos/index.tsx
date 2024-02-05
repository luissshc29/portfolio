import React from "react";
import styles from "./Contatos.module.scss";
import Titulo from "Components/Titulo";
import BotaoNav from "Components/BotaoNav";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useSelector } from "react-redux";
import { MdContentCopy } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";

export default function Contatos() {
    const tituloBR = "Contatos";
    const tituloUS = "Contacts";

    const linguagem = useSelector((state: any) => state.linguagem);

    function copy(texto: string) {
        navigator.clipboard.writeText(texto);
        alert(
            linguagem === "PT"
                ? "Texto copiado para a área de transferência!"
                : "Text copied to clipboard!"
        );
    }

    return (
        <div className={styles.container}>
            <Titulo tituloString={linguagem === "PT" ? tituloBR : tituloUS} />
            <div className={styles.container_contatos}>
                <div className={styles.container_contatos_item}>
                    <BsTelephone />
                    <h2>
                        {linguagem === "PT" ? "Telefone: " : "Phone number: "}{" "}
                        <span>+55 (85) 98951-3959</span>
                    </h2>
                    <div className={styles.container_contatos_item_copiar}>
                        <div onClick={() => copy("+5585989513959")}>
                            <MdContentCopy />
                        </div>
                        <a href="https://wa.me/+5585989513959" target="_blank">
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
                <div className={styles.container_contatos_item}>
                    <AiOutlineMail />
                    <h2>
                        E-mail: <span>luishcc2003@gmail.com</span>
                    </h2>
                    <div className={styles.container_contatos_item_copiar}>
                        <div onClick={() => copy("luishcc2003@gmail.com")}>
                            <MdContentCopy />
                        </div>
                        <a href="mailto:luishcc2003@gmail.com" target="_blank">
                            <RiMailSendLine />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

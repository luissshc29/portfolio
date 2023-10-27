import React from "react";
import styles from "./Botao.module.scss";
import classNames from "classnames";

export default function Botao({
    children,
    ...rest
}: {
    children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a className={styles.anchor} {...rest}>
            <button className={classNames(styles.botao, styles["botao-hover"])}>
                {children}
            </button>
        </a>
    );
}

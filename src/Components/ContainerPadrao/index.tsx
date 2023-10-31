import React from "react";
import styles from "./ContainerPadrao.module.scss";

export default function ContainerPadrao({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={styles.container}>{children}</div>;
}

import React from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar"
import { Main } from "../main/Main"

import styles from "./layout.module.scss";

export const Layout: React.FC = () => {
    return <div className={styles.layout}>
        <Header />
        <Sidebar />
        <Main />
    </div>
}


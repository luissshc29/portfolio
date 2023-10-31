import { FaComputer } from "react-icons/fa6";

export type ExperienciaType = {
    id: number;
    tituloBR: string;
    tituloUS: string;
    dataInicioBR: string;
    dataInicioUS: string;
    dataFimBR: string;
    dataFimUS: string;
    descricaoBR: string;
    descricaoUS: string;
    icone: JSX.Element;
};

const experiencias: ExperienciaType[] = [
    {
        id: 1,
        tituloBR: "Desenvolvedor Freelancer",
        tituloUS: "Freelancer Developer",
        dataInicioBR: "Out 2023",
        dataInicioUS: "Oct 2023",
        dataFimBR: "Hoje",
        dataFimUS: "Today",
        descricaoBR:
            "Atuei no desenvolvimento de páginas web sob medida para algumas empresas, construindo aplicações como catálogos e vitrines virtuais para lojas. Nesses trabalhos, utilizei as mais diversas tecnologias Front-end, com as principais sendo React, Typescript e TailwindCSS.",
        descricaoUS:
            "I worked on the development of web pages on demand for some companies, building applications such as catalogs and virtual showcases for stores. In these works, I used the most diverse Front-end technologies, with the main ones being React, Typescript and TailwindCSS.",
        icone: <FaComputer />,
    },
];

export default experiencias;

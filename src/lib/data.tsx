export interface Lenguaje {
    id: string;
    nombre: string;
    logo: string;
    size: string;
}

export interface Proyectos {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    github: string;
    lenguajes: Lenguaje[]; // Aquí defino el tipo para lenguajes
}

export const lenguajes: Lenguaje[] = [
    {
        id: "1",
        nombre: "HTML5",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    },
    {
        id: "2",
        nombre: "Css",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
    },
    {
        id: "3",
        nombre: "Tailwind",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        id: "4",
        nombre: "JavaScript",
        size: "38",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    },
    {
        id: "5",
        nombre: "React",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    },
    {
        id: "6",
        nombre: "Node.js",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
        id: "7",
        nombre: "MySQL",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    },
    {
        id: "8",
        nombre: "PostgreSQL",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg",
    },
    {
        id: "9",
        nombre: "PHP",
        size: "40",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    {
        id: "10",
        nombre: "Astro",
        size: "40",
        logo: "https://www.svgrepo.com/show/373446/astro.svg",
    },
    {
        id: "11",
        nombre: "vite",
        size: "30",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
];

export const proyectos: Proyectos[] = [
    {
        id: "1",
        title: "Ecommerce fruta",
        description: "Proyecto de Ecommerce de fruta",
        image: "https://i.postimg.cc/hjT2CGpn/proyecto1.jpg",
        url: "https://monumental-halva-7704c3.netlify.app",
        github: "https://github.com/edwardyq67/FrutasProyectoPersonal.git",
        lenguajes: [lenguajes[0], lenguajes[1], lenguajes[2],lenguajes[3],lenguajes[4],lenguajes[10]], // Referenciando los lenguajes por su índice
    },
    {
        id: "2",
        title: "Automotriz",
        description: "proyecto de Automotriz",
        image: "https://i.postimg.cc/QCq03n2n/proyecto2.jpg",
        url: "https://bucolic-babka-719728.netlify.app/",
        github: "https://github.com/edwardyq67/automotriCompina.git",
        lenguajes: [lenguajes[0], lenguajes[1], lenguajes[2],lenguajes[3],lenguajes[4],lenguajes[10]],  // Referenciando los lenguajes por su índice
    },
    {
        id: "3",
        title: "Spotify",
        description: "proyecto de spotify",
        image: "https://i.postimg.cc/L5SNGMb1/proyecto3.jpg",
        url: "https://prismatic-cajeta-490b90.netlify.app/",
        github: "https://github.com/edwardyq67/spotify.git",
        lenguajes: [lenguajes[0], lenguajes[1], lenguajes[2],lenguajes[3],lenguajes[4],lenguajes[9]], // Referenciando los lenguajes por su índice
    },
];

import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

import type { IProject, IServices, ISkill } from './src/types';

export const services: IServices[] = [
    {
        Icon: RiComputerLine,
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js/Next.js</b> ',
    },
    {
        Icon: FaServer,
        title: 'Backend  Development',
        about: 'handle database, server, api using <b>Express </b> & other popular frameworks',
    },
    {
        Icon: AiOutlineApi,
        title: 'API Development',
        about: 'I can develop  REST API using  <b>Node API</b> ',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Competitive Coder',
        about: "problem solver in <b ><a href='https://www.codewars.com/users/ArturLazarev' target='_blank'>CodeWars</a></b> ",
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX',
        about: 'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
    },
];

export const languages: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'React',
        level: '70',
    },
    {
        Icon: BsCircleFill,
        name: 'Next.js',
        level: '60',
    },
    {
        Icon: BsCircleFill,
        name: 'Java Script',
        level: '80',
    },
    {
        Icon: BsCircleFill,
        name: 'Redux',
        level: '70',
    },
    {
        Icon: BsCircleFill,
        name: 'React Query',
        level: '75',
    },
    {
        Icon: BsCircleFill,
        name: 'RTK',
        level: '60',
    },
];

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: 'TypeScript',
        level: '68',
    },
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: '70',
    },
    {
        Icon: BsCircleFill,
        name: 'Chakra UI',
        level: '60',
    },
    {
        Icon: BsCircleFill,
        name: 'Bootstrap',
        level: '80',
    },
    {
        Icon: BsCircleFill,
        name: 'Web3',
        level: '50',
    },
];
export const projects: IProject[] = [
    {
        name: 'DApp Mega league',
        image_path:
            'https://res.cloudinary.com/frontdev-pro/image/upload/v1663371532/projects/nomo_v2/nomo_page_3_kxdvt2.png',
        deployed_url: 'https://app.leaguedao.com/megaleague/account-overview',
        category: ['react', 'next.js', 'web3', 'TypeScript', 'node', 'express'],
        description:
            'Decentralized open source project developing Web3 Fantasy Sports and Gaming Protocols.',
        tasks: [
            'Creating a project structure',
            'Application page layout',
            'Front-end logic implementation',
            'Connecting smart contractors',
            'Implementation of Head-to-Head mapping logic',
            'Backend connections using React-query',
            'Project review code',
        ],
        key_techs: [
            'React',
            'Next.js',
            'chakra-ui',
            'web3',
            'chakra-react-select',
            'ethers',
            'framer-motion',
            'react-query',
            'react-table',
            'eslint',
            'bignumber.js',
        ],
        folderPath: 'projects/nomo_v2',
    },
    {
        name: 'DApp Nomo Game',
        image_path:
            'https://res.cloudinary.com/frontdev-pro/image/upload/v1663443897/projects/nomo_v1/nomoKeeper_page_1_bshsci.png',
        deployed_url: 'https://app.leaguedao.com/nomo/',
        category: ['react', 'web3', 'node'],
        description:
            'Decentralized open source project developing Web3 Fantasy Sports and Gaming Protocols.',
        tasks: [
            'Layout of new application components',
            'Connecting the backend to the application',
            'Connections of new smart contracts',
            'Optimizing the performance of the reaction components',
        ],
        key_techs: [
            'React',
            'React-query',
            'Node',
            'Express',
            'Stylus',
            'Web3',
            'Eslint',
        ],
        folderPath: 'projects/nomo_v1',
    },
    {
        name: 'Ready investment solutions',
        image_path:
            'https://res.cloudinary.com/frontdev-pro/image/upload/v1663446233/projects/mirax/mirax_page_1_rkbtxi.png',
        category: ['react', 'TypeScript', 'redux', 'node', 'mongo'],
        description:
            'Platform provides broad investment proposals in blockchain industry projects\n' +
            'to create active and passive income through an affiliate program model',
        tasks: [
            'Application layout',
            'Implementing communication logics between components using Redux',
            'Implementation of an affiliate program on the frontend side',
            'Implementation of an affiliate program on the frontend side',
            'Backend implementation',
            'Implementation of partner program logic (Front\\Back - End)',
            'Implementation of 4-program logic for investments (Front\\Back - End)',
            'Implementation of Authorization\\Authentication (Front\\Back - End)',
            'Implementing the emailing module',
        ],
        key_techs: [
            'React',
            'Redux',
            'Node',
            'Express',
            'Bootstrap',
            'mongo',
            'passport',
            'i18next',
        ],
        folderPath: 'projects/mirax',
    },
    {
        name: 'Cross-protocol LP tokens Swap',
        image_path:
            'https://res.cloudinary.com/frontdev-pro/image/upload/v1663444436/projects/flype/flype_page_5_abqe2j.png',
        deployed_url: 'https://flype.fi/',
        category: ['react', 'redux', 'TypeScript', 'web3', 'node', 'express'],
        description:
            'A web interface that allows for easy interaction with the Flype protocol. \n' +
            'The interface is only one of many ways one may interact with the Flype protocol.\n',
        tasks: [
            'Transferring the application layout to React.js',
            'Layout of additional components',
            'Flexible connection of crypto wallets.',
            'Connecting smart contracts',
            'Implementing component communication via Redux/RTK',
            'Connecting the application to the backend',
        ],
        key_techs: ['React', 'Redux', 'RTK', 'material-ui', 'TypeScript'],
        folderPath: 'projects/flype',
    },
    {
        name: 'DeFI App',
        description: 'Decentralized crypto-asset storage application.',
        tasks: [
            'Site layout according to the design in Figma',
            'Flexible connection of crypto wallets',
            'Implementation of logic for working with smart contracts',
            'Implementing charts',
            'Connecting the backend to work with charts',
        ],
        image_path:
            'https://res.cloudinary.com/frontdev-pro/image/upload/v1663445129/projects/aqru/aqru_page_1_avbhhj.png',
        category: ['react', 'redux', 'web3'],
        key_techs: [
            'React',
            'Chart.js',
            'Material UI',
            'react-charts',
            'redux',
        ],
        folderPath: 'projects/aqru',
    },
    {
        name: 'Stake to earn App',
        image_path:
            'https://res.cloudinary.com/frontdev-pro/image/upload/v1663444733/projects/your/your_page_1_mrdpnr.png',
        category: ['react', 'web3', 'TypeScript'],
        description: 'Solana Blockchain stake to earn app',
        tasks: [
            'Application layout',
            'Connecting smart contracts',
            'Connecting the backend using React-query',
        ],
        key_techs: ['React', 'React-query', 'web3'],
        folderPath: 'projects/your',
    },
];

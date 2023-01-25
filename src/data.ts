

import Course from "./interfaces/course";
import Education from "./interfaces/education";
import { Experience, ExperienceFuction } from "./interfaces/experience";
import { ImageProject, LinkProject, Project } from "./interfaces/projetct";
import Section from "./interfaces/section";
import Skill from "./interfaces/skill";

export const sections = [
    { id: 1, name: "Inicio", description: "" },
    { id: 2, name: "Sobre Mim", description: "" },
    { id: 3, name: "Habilidades", description: "" },
    { id: 4, name: "Experiência", description: "" },
    { id: 5, name: "Acadêmico", description: "" },
    { id: 6, name: "Cursos/Certificados", description: "" },
    { id: 7, name: "Portifólio", description: "" },
] as Section[];

export const hardSkills = [
    { name: "C#", rating: 4 },
    { name: "NodeJS", rating: 3 },
    { name: "Javascript/Typescript", rating: 4 },
    { name: "ReactJS", rating: 4 },
    { name: "SQL", rating: 5 },
    { name: "Firebase", rating: 3 },
    { name: "Elastic Search", rating: 3 },
    { name: "API Restfull", rating: 5 },
    { name: "Git", rating: 4 },
    { name: "RabbitMQ", rating: 3 },
    { name: "Docker", rating: 3 },
    { name: "CI/CD", rating: 4 },
] as Skill[];

export const softSkills = [
    { name: "Colaboração", rating: 4 },
    { name: "Comunicação", rating: 5 },
    { name: "Inteligência Emocional", rating: 4 },
    { name: "Organização", rating: 3 },
    { name: "Resiliência", rating: 4 },
    { name: "Resolução de Problemas", rating: 5 },
] as Skill[];

export const experiences = [
    {
        companyName: "ORGM",
        corporateName: "ORGM Software de Gestão",
        office: "Estágio/Desenvolvedor Jr",
        startDate: new Date("06/01/2017"),
        endDate: new Date("12/01/2019"),
        mainTechnologies: ["VBA", "C#", "JavaScript", "SQL Server"],
        functions: [
            { description: "Desenvolvimento de funcionalidades para sistema ERP" },
            { description: "Visita a clientes para levantamento de requisitos" },
            { description: "Modelagem de banco de dados" },
    ] as ExperienceFuction[] },
    {
        companyName: "A.Telecom",
        corporateName: "A.Telecom Teleinformática",
        office: "Desenvolvedor Fullstack",
        startDate: new Date("10/01/2020"),
        endDate: new Date("07/01/2021"),
        mainTechnologies: ["C# .NET", "ReactJs", "Typescript", "SQL Server", "MySql"],
        functions: [
            { description: "Criação de novos produtos baseados nas tecnologias" },
            { description: "Integração com APIs internas e externas" },
            { description: "Criação de novas funcionalidades para sistemas de contact center e telefonia" },
            { description: "Criação e gestão de querys e de estruturas de banco de dados" },
    ] as ExperienceFuction[] },
    {
        companyName: "Semantix",
        corporateName: "Semantix Tecnologia em Sistema de Informação",
        office: "Desenvolvedor Fullstack Pleno",
        startDate: new Date("08/01/2021"),
        mainTechnologies: ["C# .NET", "ReactJs", "React Native", "TypeScript", "NodeJs", "Graphql", "Redis", "Postgresql", "SQL Server", "MySql", "RabbitMQ", "ElasticSearch"],
        functions: [
            { description: "Criação de novas funcionalidades para o ecommerce SmartesSales" },
            { description: "Criação de APIs de integração com sistemas externos" },
            { description: "Desenvolvimento e implantação de novas funcionalidades para produtos de chatbot" },
            { description: "Gerenciamento de filas de mensageria" },
            { description: "Configuração de esteiras de deploy (CI/CD) no GitLab" },
            { description: "Gerenciamento de crise" },
    ] as ExperienceFuction[] },
 ] as Experience[];

 export const educations = [
    {
        name: "Tecnólogo em Análise e Desenvolvimento de Software",
        schoolName: "FIAP",
        schoolNameFull: "Faculdade de Informática e Administração Paulista",
        startDate: new Date("01/01/2016"),
        endDate: new Date("12/01/2017"),
        status: "Concluído",
        achievements : ["Medalhista de prata no Challenge Natura, Festival NEXT"]
    },
    {
        name: "Técnico em informática",
        schoolName: "ETEC",
        schoolNameFull: "Juscelino Kubitschek de Oliveira",
        startDate: new Date("01/01/2014"),
        endDate: new Date("06/01/2015"),
        status: "Concluído"
    }
 ] as Education[];

 export const courses = [
    { name: "Certificado de Qualificação Profissional em Desenvolvimento de Aplicativos Móveis", schoolName: "FIAP", conclusionYear: "2017" },
    { name: "Certificado de Qualificação Profissional em Empreendedorismo Digital e Gestão de Tecnologias da Informação", schoolName: "FIAP", conclusionYear: "2017" },
    { name: "Elastic Essentials", schoolName: "Semantix Academy", conclusionYear: "2021" },
    { name: "Redis Básico", schoolName: "Semantix Academy", conclusionYear: "2021" },
    { name: "MongoDB Básico", schoolName: "Semantix Academy", conclusionYear: "2021" },
 ] as Course[];

 export const projects = [
    {
        name: "Orçamentaria",
        description: "Sistema web responsivo que tem como objetivo a emissão de orçamentos para pinturas imobiliarias e industrial.",
        mainFuctions: [
            "CRUD de Pessoas (cliente, fornecedor e funcionário)",
            "CRUD de Materiais",
            "CRUD de Equipamentos",
            "CRUD de Custo",
            "CRUD de Carta de Cobertura",
            "CRUD e Emissão de orçamento em PDF"
        ],
        mainTechnologies: ["C# .NET", "Dapper", "ReactJs", "Javascript", "MySql", "Bootstrap"],
        images: [
            { name: "pessoas.png", label: "Cadastro cliente" },
            { name: "funcionario.png", label: "Cadastro funcionário" },
            { name: "material.png", label: "Tela material" },
            { name: "carta_cobertura.png", label: "Cadastro de carta de cobertura" },
            { name: "carta_cobertura_2.png", label: "Carta cobertura importada apartir do excel" },
            { name: "carta_cobertura_3.png", label: "Edição/Exclusão de carta de cobertura" },
            { name: "orcamento.png", label: "Cadastro de orçamento" },
            { name: "orcamento_2.png", label: "Adição de funcionário ao orçamento e seu custos" },
            { name: "orcamento_3.png", label: "Totais do orçamento" },
            { name: "orcamento_4.png", label: "PDF do orçamento gerado" },
        ] as ImageProject[],
        links: [
            { name: "Repositório frontend", url: "https://github.com/Orcamentaria/orcamentaria-client", type: "git" },
            { name: "Repositório backend", url: "https://github.com/Orcamentaria/orcamentaria-server", type: "git" },
            { name: "Repositório diagramas", url: "https://github.com/Orcamentaria/orcamentaria-doc", type: "git" },
        ] as LinkProject[],
        subDirectory: "orcamentaria"
    },
    {
        name: "Cronog",
        description: "Aplicativo que te ajuda conquistar seus objetivos. Quer criar uma rotina de leitura, musculação, alimentação? Cadastre um novo Cronog, definindo icone e cor perosnalizadas. Não se preocupe, você receberá uma notificação no horário configurado para não esquuecer do seu objetivo.",
        mainFuctions: [
            "Cadastro de rotinas personalizadas",
            "Lembrete por notificação da execução da rotina",
            "Criação de tarefas que permitirão que você acompanhe seu progresso",
            "Reordenção de arrasta e solta das rotinas cadastradas",
        ],
        mainTechnologies: ["Node", "ReactJs", "Typescript", "CapacitorJS", "Firebase", "Yup", "Storybook"],
        images: [
            { name: "login.png", label: "Login app" },
            { name: "cronog.png", label: "Cadastro de um Cronog" },
            { name: "cronog-cor.png", label: "Seleção da cor do Cronog" },
            { name: "cronog-icone.png", label: "Seleção do icone do Cronog" },
            { name: "home.png", label: "Tela de exibição dos Cronogs cadastrados" },
            { name: "notificacao.png", label: "Notifição de lembrete" },
            { name: "nova-tarefa.png", label: "Cadastro de uma nova tarefa" },
            { name: "tarefas.png", label: "Tela de exibição das tarefas do Cronog" },
        ] as ImageProject[],
        links: [
            { name: "Repositório frontend", url: "https://github.com/Cronog/cronog-client", type: "git" },
            { name: "Repositório backend", url: "https://github.com/Cronog/cronog-server", type: "git" },
            { name: "Download APK", url: "assetsProjects/cronog/Cronog.zip", type: "download" },
        ] as LinkProject[],
        subDirectory: "cronog"
    },
    {
        name: "Aponta",
        description: "Sistema web responsivo que te ajuda a ter o controle sobre o tempo gasto em tarefas. Nele você cadastra tarefas e começa a apontar.",
        mainFuctions: [
            "Login",
            "Cadastro de tarefas",
            "Apontamento de horas",
            "Histórico de apontamento",
        ],
        mainTechnologies: ["C# .NET", "Dapper", "ReactJs", "Typescript", "Bootstrap"],
        images: [
            { name: "login.png", label: "Login site" },
            { name: "home.png", label: "Tela de inicio" },
            { name: "nova-tarefa.png", label: "Cadastro de nova tarefa" },
            { name: "apontamento.png", label: "Apontando em uma tarefa" },
            { name: "historico.png", label: "Tela de exibição do histórico de apontamentos" },
        ] as ImageProject[],
        links: [
            { name: "Repositório frontend", url: "https://github.com/Aponta/aponta-client", type: "git" },
            { name: "Repositório backend", url: "https://github.com/Aponta/aponta-server", type: "git" },
            { name: "aponta.com", url: "http://aponta-client.herokuapp.com/login", type: "site" },
        ] as LinkProject[],
        subDirectory: "aponta"
    },
    {
        name: "Wpp-Bot",
        description: "Um completo bot para whatsapp. Crie o fluxo que desejar e ele responderá para você.",
        mainFuctions: [
            "Configuração fluxo",
            "Envio de mensagens de texto, imagens, menus e etc",
            "Envio de email avisando para caso o bot se desconecte",
            "Integração com Dialoflow para entendimento de frases",
        ],
        mainTechnologies: ["NodeJS", "ReactJs", "Typescript", "Firebase", "Dialogflow", "Nodemailer"],
        images: [
            { name: "inicio-do-fluxo.png", label: "Inicio do fluxo" },
            { name: "menu-incial.png", label: "Menu com opções" },
            { name: "sub-menu.png", label: "Sub menu com opcões" },
            { name: "imagem-fluxo.png", label: "Envio de imagem e reconhecimento de máquina" },
        ] as ImageProject[],
        links: [
            { name: "Repositório backend", url: "https://github.com/Mafealno/wpp-bot-server", type: "git" },
        ] as LinkProject[],
        subDirectory: "wpp-bot"
    },
 ] as Project[];
import React from "react";

import Menu from "./components/Menu";
import ContainerSection from "./components/ContainerSection";

import { sections } from "./data";

import "./App.css";
import "./global-styles.css";

//components
import Social from "./components/Social";
import Title from "./components/Title";
import Legend from "./components/Legend";

//icons
import { BiFootball, BiHeadphone } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { GiSpaceShuttle } from "react-icons/gi";
import { MdLocalMovies, MdDraw } from "react-icons/md";

import perfil from "./assets/perfil.png";
import cv from "./assets/cv.pdf";

function App() {

  return (
    <>
      <section className="bg-code">
      <header id="1">
        <Menu options={sections.map(item => ({ id: item.id.toString(), label: item.name }))}/>
      </header>
        <ContainerSection id="1" backgroundImage="code" height="500px">
          <div className="flex relative w-full items-center flex-col text-white">
            <div className="border-image z-10 absolute h-72 w-72 rounded-full">
              <img src={perfil} className="h-60 w-60 object-cover rounded-full" alt="Imagem de perfil"/>
            </div>
            <div className="bg-gray-800 py-3 z-0 absolute flex flex-col items-center justify-end gap-3 rounded top-64 h-40 w-80">
              <div className="text-2xl font-bold">MARCELO NOGUEIRA</div>
              <div className="text-md">Desenvolvedor Full-Stack</div>
              <div className="flex justify-center items-center gap-3">
                <Social />
              </div>
            </div>
          </div>
        </ContainerSection>
      </section>
      <main id="container-app">
        <section id="spc-center">
          <ContainerSection id="2">
            <div className="w-full flex flex-col">
              <Title title="SOBRE MIM"/>
              <p style={{ textAlign: "justify" }} className="mb-5">Olá, seja bem vindo(a) o meu site, meu nome é <span className="text-aux-2 font-bold">Marcelo Nogueira</span> e eu sou apaixonado por desenvolvimento.
              Minha história com a TI começou por acaso. Já muito jovem, eu assistia tutoriais sobre mudar a versão do sistema operacional de smartphones
              (pode acreditar, eu fiz muito isso), porém, não fazia idéia que existia a profissão de desenvolvedor. Aos 15 anos, iniciei o curso Técnico de Informática na ETEC por um moitvo: eu amo video games.
              Desde a primeira aula eu me apaixonei por desenvolvimento. O <span className="text-aux-2 font-bold">universo</span> de possibilidades que o desenvolvimento poderia me proporcionar me fascinou desde o primeiro instante.
              Me formei no técnico e ingressei subsequentemente no ensino superior sendo bolsista na FIAP. Após dois anos, me formei com louvor, sendo premiado no festival NEXT no challenge Natura.</p>
              <div className="flex-800-col flex flex-wrap gap-5">
                <article className="flex flex-col gap-2 flex-1">
                  <p className="text-xl font-bold text-aux-2 mb-4">Detalhes Pessoais</p>
                  <div><span className="font-bold">Nome: </span>Marcelo Fernando Alves Nogueira</div>
                  <div><span className="font-bold">Nascimento: </span>26/12/1997</div>
                  <div><span className="font-bold">Estado civil: </span>Solteiro</div>
                  <div><span className="font-bold">Endereço: </span>Jabaquara, São Paulo</div>
                </article>
                <article className="flex flex-col gap-1 flex-1">
                  <p className="text-xl font-bold text-aux-2 mb-4">Meus interesses</p>
                  <div className="flex flex-wrap justify-between">
                    <Legend label="Video Game"><CgGames className="h-20 w-20"/></Legend>
                    <Legend label="Futebol"><BiFootball className="h-16 w-16"/></Legend>
                    <Legend label="Filmes/Series"><MdLocalMovies className="h-16 w-16"/></Legend>
                    <Legend label="Música"><BiHeadphone className="h-16 w-16"/></Legend>
                    <Legend label="Desenho"><MdDraw className="h-16 w-16"/></Legend>
                    <Legend label="Física"><GiSpaceShuttle className="h-16 w-16"/></Legend>
                  </div>
                </article>
              </div>
              <div className="flex justify-center items-center w-full mt-20">
                <a
                className="download-cv flex justify-center border-solid items-center w-50 py-1 px-4 border-4 rounded font-bold text-lg"
                href={cv}
                download={"MARCELO-NOGUEIRA-CV.pdf"}>
                  Download CV <HiOutlineDocumentDownload className="ml-4 w-6 h-6" />
                </a>
              </div>
            </div>
          </ContainerSection>
          <ContainerSection id="3">
            <Title title="HABILIDADES"/>
          </ContainerSection>
          <ContainerSection id="4">
            <Title title="EXPERIÊNCIA"/>
          </ContainerSection>
          <ContainerSection id="5">
            <Title title="ACADÊMICO"/>
          </ContainerSection>
          <ContainerSection id="6">
            <Title title="PORTIFÓLIO"/>
          </ContainerSection>
          <ContainerSection id="7">
            <Title title="CONTATOS"/>
          </ContainerSection>
        </section>
      </main>
    </>
  );
}

export default App;

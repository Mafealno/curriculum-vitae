import React, { useState } from "react";

//components
import Social from "./components/Social";
import SectionTitle from "./components/SectionTitle";
import Legend from "./components/Legend";
import ExperienceLine from "./components/ExperienceLine";
import Menu from "./components/Menu";
import ContainerSection from "./components/ContainerSection";
import CarouselImages from "./components/CarouselImages";
import { StarSkill } from "./components/RatingSkill";

//interfaces
import { Experience } from "./interfaces/experience";

//icons
import { BiFootball, BiHeadphone } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { GiSpaceShuttle } from "react-icons/gi";
import { MdLocalMovies, MdDraw, MdWeb } from "react-icons/md";
import { BsArrowRight, BsGithub, BsDownload } from "react-icons/bs";

//assets
import perfil from "./assets/perfil.png";
import cv from "./assets/cv.pdf";

//functions
import { formatDateToMonthYear, getPeriod } from "./utils/date";

//data
import { sections, hardSkills, softSkills, experiences, educations, courses, projects } from "./data";

//styles
import "./App.css";
import "./global-styles.css";

function App() {

  const [experienceShow, setExperienceShow] = useState<Experience>();

  return (
    <>
      <section className="bg-code">
      <header id="1">
        <Menu options={sections.map(item => ({ id: item.id.toString(), label: item.name }))}/>
      </header>
        <ContainerSection id="1" height="500px">
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
              <SectionTitle title="SOBRE MIM"/>
              <p style={{ textAlign: "justify" }} className="mb-5">Olá, seja bem vindo(a) o meu site, meu nome é <span className="text-[var(--secondary-color)] font-bold">Marcelo Nogueira</span> e eu sou apaixonado por desenvolvimento.
              Minha história com a TI começou por acaso. Já muito jovem, eu assistia tutoriais sobre atualizar a versão do sistema operacional de smartphones
              (pode acreditar, eu fiz muito isso), porém, não fazia idéia que existia a profissão de desenvolvedor. Aos 15 anos, iniciei o curso écnico de Informática na ETEC por um moitvo: eu amo video games.
              Desde a primeira aula eu me apaixonei por desenvolvimento. O <span className="text-[var(--secondary-color)] font-bold">universo</span> de possibilidades que o desenvolvimento poderia me proporcionar fascinou-me desde o primeiro instante.
              Me formei no técnico e ingressei subsequentemente no ensino superior sendo bolsista na FIAP. Após dois anos, me formei com louvor, sendo premiado no festival NEXT no challenge Natura.</p>
              <div className="flex-800-col flex flex-wrap gap-5">
                <article className="flex flex-col gap-2.5 flex-1">
                  <p className="text-xl font-bold text-[var(--secondary-color)] mb-4">Detalhes Pessoais</p>
                  <div><span className="font-bold">Nome: </span>Marcelo Fernando Alves Nogueira</div>
                  <div><span className="font-bold">Nascimento: </span>26/12/1997</div>
                  <div><span className="font-bold">Estado civil: </span>Casado</div>
                  <div><span className="font-bold">Endereço: </span>Jabaquara, São Paulo</div>
                </article>
                <article className="flex flex-col gap-1 flex-1">
                  <p className="text-xl font-bold text-[var(--secondary-color)] mb-4">Meus interesses</p>
                  <div className="flex flex-wrap justify-between">
                    <Legend className="!h-[80px]" label="Video Game"><CgGames className="h-16 w-16"/></Legend>
                    <Legend className="!h-[80px]" label="Futebol"><BiFootball className="h-14 w-14"/></Legend>
                    <Legend className="!h-[80px]" label="Filmes/Series"><MdLocalMovies className="h-14 w-14"/></Legend>
                    <Legend className="!h-[80px]" label="Música"><BiHeadphone className="h-14 w-14"/></Legend>
                    <Legend className="!h-[80px]" label="Desenho"><MdDraw className="h-14 w-14"/></Legend>
                    <Legend className="!h-[80px]" label="Física"><GiSpaceShuttle className="h-14 w-14"/></Legend>
                  </div>
                </article>
              </div>
              <div className="flex justify-center items-center w-full mt-12">
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
            <>
              <SectionTitle title="HABILIDADES"/>
              <div className="flex-900-col flex">
                <div className="flex flex-col flex-1 items-center">
                  <p className="text-xl font-bold text-[var(--secondary-color)] mb-4">Hard Skils</p>
                  <div className="flex flex-col gap-3">
                    {hardSkills.map((item, index) => (<StarSkill key={index} id={index} skill={item} />))}
                  </div>
                </div>
                <div className="flex flex-col flex-1 items-center  max-md:mt-10">
                  <p className="text-xl font-bold text-[var(--secondary-color)] mb-4">Soft Skils</p>
                  <div className="flex flex-col gap-3">
                    {softSkills.map((item, index) => (<StarSkill key={index} id={index} skill={item} />))}
                  </div>
                </div>
              </div>
            </>
          </ContainerSection>
          <ContainerSection id="4">
            <div className="w-full relative">
              <SectionTitle title="EXPERIÊNCIA" legend="Clique na empresa para ter mais detalhes"/>
              <ExperienceLine showExperience={(experience) => setExperienceShow(experience)} experiences={experiences} />
              <div className="text-lg">{"{"}</div>
              <div className="flex">
                <div className="text-[var(--secondary-color)] font-bold text-lg whitespace-nowrap">&emsp;"Nome da Empresa"&ensp;:&ensp;</div>
                <div className="text-lg">"{experienceShow?.corporateName}",</div>
              </div>
              <div className="flex">
                <div className="text-[var(--secondary-color)] font-bold text-lg whitespace-nowrap">&emsp;"Cargo"&ensp;:&ensp;</div>
                <div className="text-lg">"{experienceShow?.office}",</div>
              </div>
              <div className="flex">
                <div className="text-[var(--secondary-color)] font-bold text-lg whitespace-nowrap">&emsp;"Data de inicio"&ensp;:&ensp;</div>
                <div className="text-lg whitespace-nowrap">"{experienceShow?.startDate && formatDateToMonthYear(experienceShow?.startDate!)}",</div>
              </div>
              <div className="flex">
                <div className="text-[var(--secondary-color)] font-bold text-lg whitespace-nowrap">&emsp;"Data de fim"&ensp;:&ensp;</div>
                <div className="flex flex col text-lg">
                  "{experienceShow ? formatDateToMonthYear(experienceShow?.endDate ? experienceShow?.endDate : new Date()) : ""}",
                  <div className="text-lg text-lime-700">&emsp;//{experienceShow && getPeriod(experienceShow?.startDate!, experienceShow?.endDate)}</div>
                </div>
              </div>
              <div className="flex flex-800-col">
                <div className="text-[var(--secondary-color)] font-bold text-lg whitespace-nowrap">&emsp;"Principais Tecnologias"&ensp;:&ensp;</div>
                <div className="text-lg">[{experienceShow ? `${experienceShow?.mainTechnologies.map(item => ` "${item}"`).toString().substring(1)}` : ""}],</div>
              </div>
              <div className="flex flex-col">
                <span className="flex">
                  <div className="text-[var(--secondary-color)] font-bold text-lg whitespace-nowrap">&emsp;"Funções"</div>
                  &ensp;:&ensp;<div className="text-lg">[{!experienceShow && "],"}</div>
                </span>
                  {experienceShow?.functions.map((item, index) => {
                    let finalChar = ",";
                    if((index + 1) === experienceShow.functions.length)
                      finalChar = "]";

                    return (
                      <div className="flex" key={index}>
                        &emsp;&emsp;&emsp;<div className="text-lg">{"{"}</div>
                        &ensp;<div className="text-[var(--secondary-color)] font-bold text-lg">{`"Descrição"`}&ensp;</div>
                        <div className="flex text-lg">
                          {`"${item.description}" }${finalChar}`}
                        </div>
                      </div>)
                    }
                  )}
              </div>
              <div className="text-lg">{"}"}</div>
            </div>
          </ContainerSection>
          <ContainerSection id="5">
            <>
              <SectionTitle title="ACADÊMICO"/>
              <ul className="flex justify-center gap-7 flex-col">
                {educations.map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex gap-2">
                      <div className="flex flex-col text-lg font-bold flex items-center justify-center w-[300px] max-lg:w-[100px] whitespace-nowrap">
                        <div className="flex max-lg:flex-col">
                          <div className="flex items-center w-full justify-center">{formatDateToMonthYear(item?.startDate)}</div>
                          <div className="flex items-center w-full justify-center">&ensp;a&ensp;</div>
                          <div className="flex items-center w-full justify-center">{formatDateToMonthYear(item?.endDate)}</div>
                        </div>
                        <div className="text-md text-slate-500">{item.status}</div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex font-bold text-lg items-center">
                          <div className="text-[var(--secondary-color)]">{`${item.name}`}</div>
                        </div>
                        <div className="text-lg">{`${item.schoolName} (${item.schoolNameFull})`}</div>
                        {item.achievements?.map((item, index) => <div key={index} className="text-slate-500">{item}</div>)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          </ContainerSection>
          <ContainerSection id="6">
            <>
              <SectionTitle title="CURSOS/CERTIFICADOS"/>
              <ul className="flex flex-col gap-2">
                {courses.map((item, index) => (
                  <li key={index} className="flex items-center">
                    &emsp;&emsp;<BsArrowRight  className="max-h-[10px] max-w-[10px] min-h-[10px] min-w-[10px] mr-3"/>
                    <div className="font-bold text-[var(--secondary-color)] ">
                      {`${item.name}`}
                      <div className="text-md text-slate-500">{`(${item.schoolName}, ${item.conclusionYear})`}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          </ContainerSection>
          <ContainerSection id="7">
            <>
              <SectionTitle title="PORTIFÓLIO" legend="Clique na imagem para ver em detalhes"/>
              <div className="flex flex-col gap-10">
                {projects.map((item, index) => (
                  <div key={index} className="felx flex-col">
                    <p className="font-bold text-xl w-60 text-white bg-[var(--secondary-color)] py-4 pl-5 rounded ">{item.name}</p>
                    <div className="flex flex-1200-col">
                      <div className="flex-col flex-1 gap-2">
                        <div className="text-md text-justify mt-3">&emsp;&emsp;{item.description}</div>
                        <div className="flex flex-800-col justify-start mt-3">
                          <div className="text-md text-justify text-[var(--secondary-color)] font-bold min-w-[125px]">Funcionalidades&emsp;</div>
                          <div className="text-justify">{item.mainFuctions.map(item => ` ${item}`).toString()}.</div>
                        </div>
                        <div className="flex flex-800-col justify-start mt-3">
                          <div className="text-md text-justify text-[var(--secondary-color)] font-bold min-w-[125px]">Tecnologias&emsp;</div>
                          <div className="text-justify">{item.mainTechnologies.map(item => ` ${item}`).toString()}.</div>
                        </div>
                        <div className="flex flex-800-col gap-2 justify-between mt-5">
                          {item.links.map((item, index) => (
                            <div key={index} className="flex items-center hover:text-[var(--secondary-color)]">
                              {item.type === "git" && (
                                <>
                                  <BsGithub className="w-4 h-4 mr-1"/>
                                  <a href={item.url} className="font-bold text-center" target="_blank" rel="noreferrer">{item.name}</a>
                                </>
                              )}
                              {item.type === "download" && (
                                <>
                                  <BsDownload className="w-4 h-4 mr-1"/>
                                  <a href={item.url} download={item.name} className="font-bold text-center" target="_blank" rel="noreferrer">{item.name}</a>
                                </>
                              )}
                              {item.type === "site" && (
                                <>
                                  <MdWeb className="w-4 h-4 mr-1"/>
                                  <a href={item.url} className="font-bold text-center" target="_blank" rel="noreferrer">{item.name}</a>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center items-center flex-1 max-lg:mt-4">
                        <CarouselImages subDirectory={item.subDirectory} images={item.images} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </ContainerSection>
        </section>
      </main>
    </>
  );
}

export default App;

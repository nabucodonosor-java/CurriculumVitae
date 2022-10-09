import ProjectComponent from 'components/ProjectComponent';
import Java from 'assets/images/java-logo.png';
import Spring from 'assets/images/spring-logo.png';
import TS from 'assets/images/ts-logo.png';
import ReactJS from 'assets/images/react-logo.png';
import MongoDB from 'assets/images/mongodb-logo.png';
import Postgres from 'assets/images/postgres-logo.png';
import './styles.css'; 

const fullStack = () => {
  let stacks: string[] = [Java, Spring, TS, ReactJS, Postgres];
  return stacks;
}

const frontEnd = () => {
  let stacks: string[] = [TS, ReactJS];
  return stacks;
}

const backEndMongo = () => {
  let stacks: string[] = [Java, Spring, MongoDB];
  return stacks;
}

const backEnd = () => {
  let stacks: string[] = [Java, Spring];
  return stacks;
}

const Projects = () => {
  return (
    <section className="project-container">
      <h2>Projetos & Estudos</h2>
      <ProjectComponent 
        title="APProfissionais"
        projectURL="https://app-mrlit.netlify.app/"
        index="APProfissionais"
        githubURL="https://github.com/nabucodonosor-java/APP-Profissionais"
        description="Sistema consiste em uma API Rest desenvolvida em Java 17 + framework Spring Boot que 
                    é consumida por um projeto React (biblioteca JS) desenvolvido em TypeScript + HTML/SCSS.
                    Sistema conta com múltiplos banco de dados e integrações para exportação de arquivos
                    PDF."
        stackList={fullStack()}
      />
      <ProjectComponent 
        title="DocAdmin"
        index="DocAdmin"
        githubURL="https://github.com/nabucodonosor-java/MapinTestsDocAdmin"
        description="Sistema consiste em uma API Rest desenvolvida em Java 11 + framework Spring Boot que 
                    é consumida por um projeto React (biblioteca JS) desenvolvido em TypeScript + HTML/SCSS.
                    Banco de dados utilizado foi o Postgres e sistema conta com upload de imagens para AWS."
        stackList={fullStack()}
      />
       <ProjectComponent 
        title="API Pokedex"
        index="API Pokedex"
        githubURL="https://github.com/nabucodonosor-java/APIPokedexSpringWebFlux"
        description="API desenvolvida em Java 17 e o framework Spring e seu módulo Web Flux e as dependências 
                    Spring Reactive Web e Spring Data Reactive MongoDB durante a live DevC SP Lives #02."
        stackList={backEndMongo()}
      />
       <ProjectComponent 
        title="MapinConvert"
        index="MapinConvert"
        githubURL="https://github.com/nabucodonosor-java/MapinCurrancyConverter"
        description="Aplicação desenvolvida em Java 17 com Spring Boot no backend e TypeScript e ReactJS no 
                    frontend que tem a função de fornecer valores convertidos em Real das moedas Dólar, Euro 
                    e Bitcoin. Além disso, a aplicação contêm um dashboard com gráficos e datables com filtros 
                    por período e moeda."
        stackList={fullStack()}
      />
       <ProjectComponent 
        title="Desafio TQI"
        index="Desafio_TQI"
        githubURL="https://github.com/nabucodonosor-java/tqi_evolution_backend_2021"
        description="Desafio - Desenvolver uma ApiRest utilizando Java e o framework Spring Boot com 
                    nível de maturidade do padrão REST, segundo o Richardson Maturity Model, 
                    nível 2 pois ela deve fazer o uso eficiente de URIs e dos verbos HTTP."
        stackList={backEnd()}
      />
        <ProjectComponent 
        title="Desafio Alura Backend"
        index="desafio_alura"
        githubURL="https://github.com/nabucodonosor-java/challengeAluraFlix"
        description="Dividido em 4 semanas o desafio requisita o desenvolvimento de uma APIRest de uma 
        plataforma para compartilhamento de vídeos. Ao término da quarta semana a plataforma deve permitir 
        ao usuário montar playlists com links para seus vídeos preferidos, separados por categorias. O sistema 
        ágil de desenvolvimento utilizado será o Trello."
        stackList={backEnd()}
      />
       <ProjectComponent 
        title="Estudos em JS e CSS"
        projectURL="https://mapin-ai.netlify.app/"
        index="JS_CSS_study"
        githubURL="https://github.com/nabucodonosor-java/JSMatery-GPT3"
        description="Webpage desenvolvida com ReactJS e TypeScript."
        stackList={frontEnd()}
      />
    </section>
  )
}

export default Projects;
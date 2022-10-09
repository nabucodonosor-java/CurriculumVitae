import React from 'react'
import ProfilePhoto from 'assets/images/me.jpeg';
import Soccer from 'assets/images/soccer.png';
import Basket from 'assets/images/basket.png';
import Swimming from 'assets/images/swimming.png';
import Astronomy from 'assets/images/astronomy.png';
import Games from 'assets/images/game.png';
import Music from 'assets/images/music.png';
import TableTennis from 'assets/images/table-tenis-icon.png';
import Theatre from 'assets/images/theatre-icon.png';
import OnlyAvaible from 'assets/images/pexels-d-none.jpg';
import SkillComponent from 'components/SkillComponent';
import MobileBar from 'components/MobileBar';
import './styles.css'

const AboutMe = () => {
  return (
    <>
      <section className="about-me-container-mobile">
        <div className="about-me-container-mobile-photo">
          <img src={ProfilePhoto} alt="Foto de perfil" className="photo-img"/>
          <h1>Franco Sobrinho</h1> 
        </div>
        <MobileBar />
        <article className="about-me-photo-mobile base-card">
          <div className="about-me-text-mobile">
            <h3>Sobre mim</h3>
            <p>Sou técnologo em processamento de dados e bacharel em Análise e Desenvolvimento
              de Sistemas pela Uniara e bacharel em Administração Pública pela Unesp. <br/><br/>Estudo a linguagem Java e o
              Spring Framework há mais de 2 ano já tendo desenvolvido projetos full stack com Spring e
              ReactJS utilizando as linguagens Java e TypeScript respectivamente para as áreas da saúde e
              construção civil.<br/><br/> Minha principal motivação para os estudos em programação é que entendo
              que o novo paradigma do mercado de trabalho, independetente da área de atuação, requisitará
              dos profissionais o pensamento algorítmico, conseguindo assim criar e/ou remodelar padrões
              e processos.
            </p>
          </div>
        </article>
        <article className="about-me-content-skill-mobile base-card">
          <h3>Skills</h3>
          <div className="skill-div">
          <SkillComponent title="Java"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p completd-skill"
            fifth="skill-p empty-skill"
          />
          <SkillComponent title="Spring"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p completd-skill"
            fifth="skill-p empty-skill"
          />
          </div>
          <div className="skill-div">
          <SkillComponent title="JS/TS"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p empty-skill"
            fifth="skill-p empty-skill"
          />
          <SkillComponent title="ReactJS"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p empty-skill"
            fifth="skill-p empty-skill"
          />
          </div>
          <div className="skill-div">
          <SkillComponent title="SQL"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p empty-skill"
            fifth="skill-p empty-skill"
          />
          <SkillComponent title="Scrum"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p empty-skill"
            fifth="skill-p empty-skill"
          />
          </div>
          <div className="skill-div">
          <SkillComponent title="DevOps"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p empty-skill"
            fourth="skill-p empty-skill"
            fifth="skill-p empty-skill"
          />
          <SkillComponent title="AWS"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p empty-skill"
            fourth="skill-p empty-skill"
            fifth="skill-p empty-skill"
          />
          </div>
          <div className="skill-div">
          <SkillComponent title="Comercial"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p completd-skill"
            fifth="skill-p completd-skill"
          />
          <SkillComponent title="Administrativo"
            first="skill-p completd-skill"
            second="skill-p completd-skill"
            third="skill-p completd-skill"
            fourth="skill-p completd-skill"
            fifth="skill-p completd-skill"
          />
          </div>
        </article>
        <article className="about-me-content-mobile base-card">
          <h3>Esportes Favoritos</h3>
          <div className="about-me-content-images-mobile">
            <img src={Soccer} alt="Imagem futebol" />
            <img src={TableTennis} alt="Imagem Tênis de Mesa" />
            <img src={Basket} alt="Imagem Basquete" />
            <img src={Swimming} alt="Imagem natação" />
          </div>
        </article>
        <article className="about-me-content-mobile base-card">
          <h3>Hobbies</h3>
          <div className="about-me-content-images-mobile">
            <img src={Astronomy} alt="Astronomia" />
            <img src={Games} alt="Jogos" />
            <img src={Music} alt="Músicas" />
            <img src={Theatre} alt="Teatro" />
          </div>
        </article>
      </section>
      <section className="about-me-container">
        <h2>Disponível apenas para Smartphones</h2>
        <img src={OnlyAvaible} alt="Disponível apenas para smartphones" />
      </section>
    </>
  )
}

export default AboutMe;
import React from 'react'
import ProfilePhoto from 'assets/images/me.jpeg';
import Soccer from 'assets/images/soccer.png';
import Basket from 'assets/images/basket.png';
import Swimming from 'assets/images/swimming.png';
import Astronomy from 'assets/images/astronomy.png';
import Games from 'assets/images/game.png';
import Music from 'assets/images/music.png';
import './styles.css'

const AboutMe = () => { 
  return (
   <>
    <section className="about-me-container-mobile">
      <h1>Curriculum Vitae - Franco Sobrinho</h1>
      <article className="about-me-photo-mobile base-card">
        <img src={ProfilePhoto} alt="Foto de perfil" />
        <div className="about-me-text-mobile">
          <h3>Sobre mim</h3>
          <p>Meu nome é Franco sou técnologo em processamento de dados e bacharel em Análise e Desenvolvimento
              de Sistemas. Estudo a linguagem Java e o Spring Framework há mais de 1 ano já tendo 
              desenvolvido um projeto full stack {" "}
            <strong><a href="https://docadmin-test.netlify.app/auth/login" target="_blank" rel="noreferrer">DocAdmin</a></strong>
            {" "} para meu atual emprego.
          </p>
        </div>
      </article>
      <article className="about-me-content-mobile base-card">
      <h3>Esportes Favoritos</h3>
      <div className="about-me-content-images-mobile">
        <img src={Soccer} alt="Imagem futebol" />
        <img src={Basket} alt="Imagem futebol" />
        <img src={Swimming} alt="Imagem futebol" />
      </div>
      </article>
      <article className="about-me-content-mobile base-card">
      <h3>Hobbies</h3>
      <div className="about-me-content-images-mobile">
        <img src={Astronomy} alt="Astronomia" />
        <img src={Games} alt="Jogos" />
        <img src={Music} alt="Músicas" />
      </div>
      </article>
    </section>
    <section className="about-me-container">
      <h1>Curriculum Vitae</h1>
      <article className="about-me-photo base-card">
        
        <div className="about-me-text">
          <h3>Sobre mim</h3>
          <p>Meu nome é Franco sou técnologo em processamento de dados e bacharel em Análise e Desenvolvimento
              de Sistemas. Estudo a linguagem Java e o Spring Framework há mais de 1 ano já tendo 
              desenvolvido um projeto full stack {" "}
            <strong><a href="https://docadmin-test.netlify.app/auth/login" target="_blank" rel="noreferrer">DocAdmin</a></strong>
            {" "} para meu atual emprego.
          </p>
        </div>
      </article>
      <article className="about-me-content base-card">
      <h3>Esportes Favoritos</h3>
      <div className="about-me-content-images-mobile">
        <img src={Soccer} alt="Imagem futebol" />
        <img src={Basket} alt="Imagem futebol" />
        <img src={Swimming} alt="Imagem futebol" />
      </div>
      </article>
      <article className="about-me-content base-card">
      <h3>Hobbies</h3>
      <div className="about-me-content-images-mobile">
        <img src={Astronomy} alt="Astronomia" />
        <img src={Games} alt="Jogos" />
        <img src={Music} alt="Músicas" />
      </div>
      </article>
    </section>
   </>
  )
}

export default AboutMe;
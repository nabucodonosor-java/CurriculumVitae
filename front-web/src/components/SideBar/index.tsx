import ProfilePhoto from 'assets/images/me.jpeg';
import SidebarComponent from 'components/SidebarComponent';
import SkillComponent from 'components/SkillComponent';
import './styles.css';

const Sidebar = () => {
  return (
    <article className="sidebar-container">
      <div className="sidebar-photo">
        <img src={ProfilePhoto} alt="Foto de perfil" />
      </div>
      <h4>Franco Sobrinho</h4>
      <h6>Dados Pessoais</h6>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.google.com/search?sxsrf=ALiCzsaFCbG562aQ8xbrKv5yR1JqySjMng:1652815017808&q=joffre+rodrigues+david+22+araraquara&sa=X&ved=2ahUKEwia6o_gn-f3AhVmr5UCHWSEDEMQ7xYoAHoECAIQNw&biw=1366&bih=635&dpr=1">
        <SidebarComponent title="R Jofre Rodirigues David, 22"
          imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/home-logo.png"
          imgAlt="Número do celular"
          width="50%"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="mailto:fcbs.web@gmail.com"
      >
        <SidebarComponent title="fcbs.web@gmail.com"
          imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/email-logo.png"
          imgAlt="email"
          width="50%"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="tel:+5516992127147">
        <SidebarComponent title="(16) 99212-7147"
          imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/person-logo.png"
          imgAlt="Número do celular"
          width="50%"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/Franco.Canizo.Sobrinho"
      >
        <SidebarComponent title="Facebook"
          imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/facebook-logo.png"
          imgAlt="facebook"
          width="50%"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/franco-sobrinho-13157266/"
      >
        <SidebarComponent title="LinkedIn"
          imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/linkedin-logo.png"
          imgAlt="LinkedIn"
          width="50%"
        />
      </a>
      <h6>Principais Competências</h6>
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
          fourth="skill-p empty-skill"
          fifth="skill-p empty-skill"
          />
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
          <SkillComponent title="SQL"
          first="skill-p completd-skill"
          second="skill-p completd-skill"
          third="skill-p completd-skill"
          fourth="skill-p empty-skill"
          fifth="skill-p empty-skill"
          />
          <SkillComponent title="Inglês"
          first="skill-p completd-skill"
          second="skill-p completd-skill"
          third="skill-p completd-skill"
          fourth="skill-p empty-skill"
          fifth="skill-p empty-skill"
          />
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
          fifth="skill-p empty-skill"
          />
    </article>
  )
}

export default Sidebar;
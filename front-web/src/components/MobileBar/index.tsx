import SidebarComponent from 'components/SidebarComponent';
import './styles.css';

const MobileBar = () => {
  return (
    <article className="">
      <h6 className="text-center">Franco Canizo Brasil Sobrinho</h6>
      <SidebarComponent title="R Jofre Rodirigues David, 22 - Araraquara/SP"
        imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/home-logo.png"
        imgAlt="Número do celular"
        width="50%"
      />
      <SidebarComponent title="fcbs.web@gmail.com"
        imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/email-logo.png"
        imgAlt="email"
        width="50%"
      />
      <SidebarComponent title="(16) 99212-7147 - (16) 3332-0093"
        imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/person-logo.png"
        imgAlt="Número do celular"
        width="50%"
      />
      <SidebarComponent title="LinkedIn"
        imgSrc="https://doc-admin-jacomo.s3.sa-east-1.amazonaws.com/linkedin-logo.png"
        imgAlt="LinkedIn"
        width="50%"
      />
    </article>
  )
}

export default MobileBar;
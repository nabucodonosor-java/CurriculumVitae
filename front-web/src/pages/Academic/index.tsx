import AcademicComponent from 'components/AcademicComponent'
import './styles.css';

const Academic = () => {
  return (
    <section className="academic-container">
            <h2>Formação Acadêmica</h2>
            <AcademicComponent
            name="Análise e Desenvolvimento de Sistemas"
            level="Bacharelado"
            institute="Uniara"
            status="Concluído"
            startDate="Mar/2019"
            completionDate="Jun/2022"
            />
             <AcademicComponent
            name="Administração Pública"
            level="Bacharelado"
            institute="Unesp"
            status="Concluído"
            startDate="Mar/2002"
            completionDate="Dez/2010"
            />
            <AcademicComponent
            name="Téc. em Processamento de Dados"
            level="Técnico"
            institute="Senac"
            status="Concluído"
            startDate="Jan/1998"
            completionDate="Dez/2000"
            />
        </section>
  )
}

export default Academic
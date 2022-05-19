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
            status="Cursando"
            startDate="Mar/2019"
            completionDate="Jun/2022"
            />
             <AcademicComponent
            name="Administração Pública"
            level="Bacharelado"
            institute="Unesp"
            status="Trancado"
            startDate="Mar/2002"
            />
            <AcademicComponent
            name="Téc. em Processamento de Dados"
            level="Técnico"
            institute="Colégio Objetivo"
            status="Concluído"
            startDate="Jan/1998"
            completionDate="Dez/2000"
            />
        </section>
  )
}

export default Academic
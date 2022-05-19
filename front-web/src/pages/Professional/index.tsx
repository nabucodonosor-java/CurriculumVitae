import ProfessionalComponent from 'components/ProfessionalComponent';
import React from 'react'
import './styles.css';

const Professional = () => {
    return (
        <section className="professional-container">
            <h2>Experiências Profissionais</h2>
            
            <ProfessionalComponent
                companyName="Jácomo Ortopedia Técnica"
                job="Gerente Comercial"
                toDate="Mai/2018"
                actualJob="Sim"
                description="Iniciei sendo responsável por realizar visitas aos médicos das regiões de 
                    Ribeirão Preto e Araraquara/São Carlos. Devido os ótimos resultados fui promovido a 
                    gerente comercial, ficando responsável por todo o setor de propaganda do laboratório 
                    destinado aos profissionais da saúde e por alocar recursos nos profissionais e locais
                    que gerassem maiores volumes de pacientes. Organização e realização de workshop´s e 
                    treinamentos destinados aos médicos residentes nas principais residências médicas da 
                    região atendida. Com o advento da pandemia fiquei responsável por criar um sistema para 
                    gerenciar a base de profissionais da saúde que são visitados. O primeiro sistema foi 
                    feito em Java no backend e HTML + CSS + JavaScript no frontend. A versão 2.0 foi
                    desenvolvida com Java + Spring no backend e React + TypeScript + HTML + SASS no 
                    frontend e além de gerenciar a base de visitação conta co um dashboard para gerenciamento 
                    do trabalho do laboratório ortopédico. Fiz parte da equipe de engenharia de requisitos 
                    para a montagem do e-commerce da empresa."
            />
            <ProfessionalComponent
                companyName="Souza Cruz S/A"
                job="Vendedor"
                toDate="Jun/2011"
                fromDate="Abr/2018"
                description="Responsável pelas vendas aos pdv´s cadastrados, prospecção de novos clientes, 
                    ações B2B com clientes estratégicos, controle de crédito concedido aos clientes, 
                    implementação de novos produtos e kit´s promocionais, treinamento da equipe de vendas 
                    sobre os produtos da Souza Cruz e informação aos clientes sobre novas legislações e 
                    regras sobre tabaco e seus derivados sancionados pela ANVISA. Em média são 40 visitas 
                    por dia e atuei em diversas regiões - Araraquara/São Carlos e região. Bauru e região, 
                    Piracicaba e região e Ribeirão Preto e região."
            />
             <ProfessionalComponent
                companyName="Souza Cruz S/A"
                job="Auxiliar Administrativo"
                toDate="Nov/2010"
                fromDate="Jun/2011"
                description="Coordenação administrativa do escritório da unidade de Araraquara, sendo 
                responsável pela compra de materiais de escritório e controle das despesas fixas da unidade. 
                Suporte para áreas de distribuição, vendas e merchandising. Controle, classificação e envio 
                para pagamento de reembolsos para funcionários, gastos com escritório e fornecedores. Para 
                auxiliar o controle desenvolvo Follow Up´s em Excel e Access. Organização e realização de 
                eventos para lançamento de novas marcas e produtos para capacitação dos colaboradores."
            />
             <ProfessionalComponent
                companyName="NET"
                job="Vendedor"
                toDate="Set/2007"
                fromDate="Mar/2010"
                description="Vendas via PAP (porta-a-porta), panfletagens e telemarketing em residências e 
                empresas. Montagem de Follow Up´s em excel para melhor controlar a carteira de clientes e 
                as vendas do mês e montagem de material de marketing para a equipe de vendas."
            />
             <ProfessionalComponent
                companyName="Uniodonto"
                job="Auxiliar de Escritório"
                toDate="Nov/2003"
                fromDate="Mar/2005"
                description="Responsável pelo departamento de cobrança da cooperativa. Cobrança via ligações, 
                realizações de acordos com os clientes devedores. Gerenciamento de Inclusão/Exclusão de 
                clientes do cadastro do SPC/Serasa e suporte para área de cadastro e faturamento."
            />
        </section>
    )
}

export default Professional;
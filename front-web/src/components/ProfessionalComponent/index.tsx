import React from 'react';
import './styles.css';

type Props = {
    companyName: string;
    job: string;
    actualJob?: string;
    fromDate?: string;
    toDate: string;
    description: string;
}

const ProfessionalComponent = ({ companyName, job, actualJob, fromDate, toDate, description }: Props) => {
    return (
        <article className="professional-component-container">
            <p className="component-label"><strong>Empresa: </strong><span className="component-content">{companyName}</span></p>
            <p className="component-label"><strong>Cargo: </strong><span className="component-content">{job}</span></p>
            <p className="component-label"><strong>De: </strong>{toDate}</p>
            {fromDate && (
              <p className="component-label"><strong>Até: </strong>{fromDate}</p>  
            )}
            {actualJob && (
              <p className="component-label"><strong>Emprego Atual? : </strong>{actualJob}</p>  
            )}
            <h6>Descrição</h6>
            <p className="professional-component-description">{description}</p>
        </article>
    )
}

export default ProfessionalComponent;
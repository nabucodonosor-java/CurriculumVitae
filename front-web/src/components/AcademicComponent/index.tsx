import React from 'react';
import './styles.css';

type Props = {
    institute: string;
    name: string;
    level: string;
    status: string; 
    startDate: string;
    completionDate?: string;
}

const AcademicComponent = ({ institute, name, level, status, startDate, completionDate }: Props) => {
    return (
        <article className="academic-component-container base-card">
            <p><strong>Curso: </strong><span>{name}</span></p>
            <p><strong>Instituto: </strong>{institute}</p>
            <div className="academic-component-double-field">
                <p><strong>Nível: </strong><span>{level}</span></p>
                <p><strong>Status: </strong><span>{status}</span></p>
            </div>
            <div className="academic-component-double-field">
                <p><strong>Início: </strong><span>{startDate}</span></p>
                {completionDate && (
                    <p><strong>Término: </strong><span>{completionDate}</span></p>
                )}
            </div>
        </article>
    )
}

export default AcademicComponent;
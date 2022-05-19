import './styles.css';

type Props = {
    index?: string;
    title?: string;
    githubURL?: string;
    projectURL?: string;
    description?: string;
    stackList: string[];
}

const ProjectComponent = ({ index, title, githubURL, description, stackList, projectURL }: Props) => {
  return (
    <article className="project-component-container base-card">
      <p><strong>Nome: </strong><span>{title}</span></p>
      {projectURL && (
        <p><strong>URL: </strong><span><a href={projectURL} target='_blank' rel="noreferrer">{projectURL}</a></span></p>
      )}
      <p><strong>Github: </strong><span><a href={githubURL} target='_blank' rel="noreferrer">{githubURL}</a></span></p>
      <p><strong>Descrição</strong></p>
      <p>{description}</p>
      <div className="project-component-stack-list">
        {stackList.map((s, index) => (
            <div key={index}> 
              <img src={s} alt="imagem da stack" />
            </div>
        ))}
      </div>
    </article>
  )
}

export default ProjectComponent;
import './styles.css';

type Props = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  width: string;
}
const SidebarComponent = ({ imgSrc, imgAlt, title, width }: Props) => {
  return (
    <div className="sidebar-component-container">
      <div className="sidebar-component-img">
        <img src={imgSrc} alt={imgAlt} width={width} />
      </div>
      <div className="sidebar-component-title">
        <span>{title}</span>
      </div>
    </div>
  )
}

export default SidebarComponent;
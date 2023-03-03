import './styles.css';

type Props = {
    title: string;
    description: string;
    imgUrl: string;
    projectUrl: string;
}

export const ProjectCard = ({ title, description, imgUrl, projectUrl }: Props) => {
  return (
    <div className='project-card'>
        
      <div className='card-top-container'>
          <img src={imgUrl} alt="" />
      </div>

      <div className='card-bottom-container-project-card'>

          <div className='card-title-bottom'>
            <h3>{title}</h3>
            <p>{description}</p>

              <a href={projectUrl}>
                  <div className='button-zone'>
                      <button className='btn btn-primary'>Details</button>
                  </div>
              </a>
            
          </div>
        
      </div>
</div>
  )
}
import { useState } from 'react';
import Modal from 'react-modal';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import githubIcon from 'assets/images/github.svg';
import './styles.css';

type Props = {
    title: string;
    description: string;
    imgUrl: string;
    projectUrl: string;
    images: {url: string}[];
}

export const ProjectCard = ({ title, description, imgUrl, projectUrl, images }: Props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

  return (
    <div className='project-card'>
      <div className='card-top-container'>
          <img src={imgUrl} alt="" />
      </div>
      <div className='card-bottom-container-project-card'>
          <div className='card-title-bottom'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='button-zone'>
              <button className='btn btn-primary' onClick={openModal}>Details</button>
              <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="project-modal"
              >
                <div className='project-modal-container base-card'>
                  <div className='project-modal-title'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
                  <div className='project-modal-carousel-container'>
                    <Carousel responsive={responsive} infinite={true} className="project-images-slider" autoPlay={true} autoPlaySpeed={3000}>
                      {images.map((image, index) => (
                        <div className='project-modal-image-container' key={index}>
                          <img src={image.url} alt=""/>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                  <div className='project-modal-buttons-container'>
                    <button className='btn btn-secondary' onClick={closeModal}>Close</button>
                    <a href={projectUrl} className='project-link' target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-secondary'><img src={githubIcon} alt="" /> See Github Project</button>
                    </a>
                  </div>
                  
                </div>
                
              </Modal>
            </div>
          </div>
      </div>
</div>
  )
}
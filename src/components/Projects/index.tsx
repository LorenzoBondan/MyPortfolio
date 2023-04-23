
import { ProjectCard } from 'components/ProjectCard';
import { Nav, Row, Tab } from 'react-bootstrap';
import './styles.css';


const Projects = () => {

    const projects1 = [
        {
            title: "High School Class",
            description: "A summary of the author's high school class",
            imgUrl: "https://user-images.githubusercontent.com/105743965/219984126-4d08a00e-a9f5-4b8a-a803-e8deefd8da9e.png",
            projectUrl: "https://github.com/LorenzoBondan/HighSchool-Students"
        },
        {
          title: "Soccer League Simulator",
          description: "A summary and a simulator of the brazilian soccer league",
          imgUrl: "https://user-images.githubusercontent.com/105743965/233791700-2fc0d1e8-5224-482c-ba43-3b6021b12a7e.png",
          projectUrl: "https://github.com/LorenzoBondan/SoccerLeague"
        },
        {
            title: "Final Paper of Mechanical Engineering",
            description: "Frequency and sound level metter developed with C#",
            imgUrl: "https://i.ibb.co/qYvXjTc/dosimetria.png",
            projectUrl: "https://github.com/LorenzoBondan"
        },
        {
            title: "DS Catalog",
            description: "A catalog of products for sale",
            imgUrl: "https://i.ibb.co/D97jYg9/dscatalog.png",
            projectUrl: "https://github.com/LorenzoBondan/dscatalog"
        }
    ]

    const projects2 = [
        {
          title: "MovieFlix",
          description: "A movie site with reviews for registered members",
          imgUrl: "https://i.ibb.co/0KHHbfd/movieflix.png",
          projectUrl: "https://github.com/LorenzoBondan/MovieFlix"
        },
        {
          title: "DS Learn",
          description: "Backend project of a programming school website",
          imgUrl: "https://i.ibb.co/8g1Mw0c/dslearn.png",
          projectUrl: "https://github.com/LorenzoBondan/dslearn"
        },
        {
          title: "Delivery App",
          description: "Application of an delivery service",
          imgUrl: "https://i.ibb.co/6wLM9Vm/deliver.png",
          projectUrl: "https://github.com/LorenzoBondan/Delivery"
        },
        {
          title: "DS Sales",
          description: "Dashboard of sales",
          imgUrl: "https://i.ibb.co/txGmKd0/dssales.png",
          projectUrl: "https://github.com/LorenzoBondan/DSSales"
        }
    ]

    const projects3 = [
        {
        title: "Search for Github User",
        description: "Application to fetch user data from github using Github API",
        imgUrl: "https://i.ibb.co/HxT2qFd/githubuser.png",
        projectUrl: "https://github.com/LorenzoBondan/Search-for-GitHub-User"
        },
        {
            title: "Forniture structure automation",
            description: "C# Windows Forms CSV handling and a file return ready for import into the company's system",
            imgUrl: "https://i.ibb.co/TgLSn4b/pintura.png",
            projectUrl: "https://github.com/LorenzoBondan/Estrutura-Pintura"
        },
        {
            title: "Packaging structure automation",
            description: "C# Windows Forms CSV handling and a file return ready for import into the company's system",
            imgUrl: "https://i.ibb.co/X7w5RYs/fantasma.png",
            projectUrl: "https://github.com/LorenzoBondan/Estrutura-Embalagem"
        }
    ]

    return(
        <div className='projects-container' id='projects'>
            <h2>Projects</h2>

            <div className="row">

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row className='row'>
                        {
                          projects1.map((project, index) => {
                            return (
                              <div className="col-sm-12 col-lg-12 col-xl-6 projects-column">
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              </div>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row className='row'>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row className='row'>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
}

export default Projects;
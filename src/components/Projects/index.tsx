
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
            title: "Final Paper of Mechanical Engineering",
            description: "Frequency and sound level metter developed with C#",
            imgUrl: "https://miro.medium.com/max/1400/1*G5HYSWtkvvm2WqrEg_mAMw.png",
            projectUrl: "https://google.com"
        },
        {
            title: "DS Catalog",
            description: "A catalog of products for sale",
            imgUrl: "https://miro.medium.com/max/1400/1*G5HYSWtkvvm2WqrEg_mAMw.png",
            projectUrl: "https://google.com"
        },
        {
            title: "MovieFlix",
            description: "A movie site with reviews for registered members",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            projectUrl: "https://google.com"
        },
    ]

    const projects2 = [
        {
          title: "DS Learn",
          description: "Backend project of a programming school website",
          imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
          projectUrl: "https://google.com"
        },
        {
            title: "DS Sales",
            description: "Dashboard of sales",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            projectUrl: "https://google.com"
        },
        {
            title: "Trainee Project of Mechanical Engineering",
            description: "Forniture structure automation with Visual Basic",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            projectUrl: "https://google.com"
        },
        {
            title: "Search for Github User",
            description: "Application to fetch user data from github using Github API",
            imgUrl: "https://user-images.githubusercontent.com/105743965/219984126-4d08a00e-a9f5-4b8a-a803-e8deefd8da9e.png",
            projectUrl: "https://github.com/LorenzoBondan/HighSchool-Students"
        }
    ]

    const projects3 = [
        {
            title: "Forniture structure automation",
            description: "C# Windows Forms CSV handling and a file return ready for import into the company's system",
            imgUrl: "https://user-images.githubusercontent.com/105743965/219984126-4d08a00e-a9f5-4b8a-a803-e8deefd8da9e.png",
            projectUrl: "https://github.com/LorenzoBondan/HighSchool-Students"
        },
        {
            title: "Packaging structure automation",
            description: "C# Windows Forms CSV handling and a file return ready for import into the company's system",
            imgUrl: "https://user-images.githubusercontent.com/105743965/219984126-4d08a00e-a9f5-4b8a-a803-e8deefd8da9e.png",
            projectUrl: "https://github.com/LorenzoBondan/HighSchool-Students"
        }
    ]

    return(
        <div className='projects-container' id='projects'>
            <h2>Projects</h2>

            <div className="row">

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                      <Row>
                        {
                          projects1.map((project, index) => {
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

                    <Tab.Pane eventKey="second">
                      <Row>
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
                      <Row>
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
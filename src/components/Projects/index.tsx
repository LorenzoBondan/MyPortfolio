
import { ProjectCard } from 'components/ProjectCard';
import { Nav, Row, Tab } from 'react-bootstrap';
import './styles.css';

const Projects = () => {

    const projects1 = [
        {
          title: "AgiTask",
          description: "Tasks management tool, with comments, notifications and data analysis",
          imgUrl: "https://user-images.githubusercontent.com/105743965/250280313-8e2fb385-dedb-4e50-88c3-3aa54d6cc0ae.png",
          projectUrl: "https://github.com/LorenzoBondan/AgiTask",
          images:[
            {
              url: "https://user-images.githubusercontent.com/105743965/250280313-8e2fb385-dedb-4e50-88c3-3aa54d6cc0ae.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522590-64ca646b-1297-4870-a10d-4d1ba2a93d62.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522596-fa5bf119-780b-4cb0-90a5-b77493d0df06.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522597-324b2df0-6cbf-4e9e-ada1-cae2184a34fb.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522603-3fe949b7-58fd-4ad7-a01c-ee009b78e84a.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522610-72838052-c4b8-4c1b-b681-d8d77f5269f7.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522616-4ea1d391-de29-4ba2-8cbd-543901db044f.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522620-3725c1bd-b2bf-4e4a-9e80-2c539cfd59d3.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522622-8e72b43b-6053-4f15-9f46-2884f9faa2f3.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522625-0a3ece16-77ba-4cb3-aaa3-627558b54811.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522630-c8b8d573-4ae3-4ac7-9f7f-1d99cee9e940.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522638-a10339d6-0d4a-4129-a60a-e4dfe3840cb1.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/248522643-e5e2fe29-a4c9-4136-9abf-0630b5846ea9.png",
            },
          ]
        },
        {
          title: "Social Network",
          description: "A Social Network where users can post, follow, like and comment their friends posts.",
          imgUrl: "https://user-images.githubusercontent.com/105743965/241565403-db0c85ec-9e48-4abe-a172-20b496399648.png",
          projectUrl: "https://github.com/LorenzoBondan/SocialNetwork",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "Soccer League Simulator",
          description: "A summary and a simulator of the brazilian soccer league",
          imgUrl: "https://user-images.githubusercontent.com/105743965/233791700-2fc0d1e8-5224-482c-ba43-3b6021b12a7e.png",
          projectUrl: "https://github.com/LorenzoBondan/SoccerLeague",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "High School Class",
          description: "A summary of the author's high school class",
          imgUrl: "https://user-images.githubusercontent.com/105743965/219984126-4d08a00e-a9f5-4b8a-a803-e8deefd8da9e.png",
          projectUrl: "https://github.com/LorenzoBondan/HighSchool-Students",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "University",
          description: "A university project where students can subscribe to courses and class sections of the subjects.",
          imgUrl: "https://user-images.githubusercontent.com/105743965/239691813-a33afe1c-557f-44e2-8d0a-56ec155b1d3b.png",
          projectUrl: "https://github.com/LorenzoBondan/University",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "BarberShop",
          description: "A BarberShop where clients can create new appointments with their preferred barber at a convenient time for them.",
          imgUrl: "https://user-images.githubusercontent.com/105743965/244556720-0d134571-8bab-473a-a27b-016248f89d39.png",
          projectUrl: "https://github.com/LorenzoBondan/BarberShop",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
    ]

    const projects2 = [
        {
          title: "DS Catalog",
          description: "A catalog of products for sale",
          imgUrl: "https://i.ibb.co/D97jYg9/dscatalog.png",
          projectUrl: "https://github.com/LorenzoBondan/dscatalog",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "MovieFlix",
          description: "A movie site with reviews for registered members",
          imgUrl: "https://i.ibb.co/0KHHbfd/movieflix.png",
          projectUrl: "https://github.com/LorenzoBondan/MovieFlix",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "DS Learn",
          description: "Backend project of a programming school website",
          imgUrl: "https://i.ibb.co/8g1Mw0c/dslearn.png",
          projectUrl: "https://github.com/LorenzoBondan/dslearn",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "Delivery App",
          description: "Application of an delivery service",
          imgUrl: "https://i.ibb.co/6wLM9Vm/deliver.png",
          projectUrl: "https://github.com/LorenzoBondan/Delivery",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },

    ]

    const projects3 = [
        {
          title: "DS Sales",
          description: "Dashboard of sales",
          imgUrl: "https://i.ibb.co/txGmKd0/dssales.png",
          projectUrl: "https://github.com/LorenzoBondan/DSSales",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
        title: "Search for Github User",
        description: "Application to fetch user data from github using Github API",
        imgUrl: "https://i.ibb.co/HxT2qFd/githubuser.png",
        projectUrl: "https://github.com/LorenzoBondan/Search-for-GitHub-User",
        images:[
          {
            url: "",
          },
          {
            url: "",
          },
        ]
        },
        {
          title: "Final Paper of Mechanical Engineering",
          description: "Frequency and sound pressure level meter that generates dosimetry reports",
          imgUrl: "https://i.ibb.co/qYvXjTc/dosimetria.png",
          projectUrl: "https://github.com/LorenzoBondan",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "Forniture structure automation",
          description: "C# Windows Forms CSV handling and a file return ready for import into the company's system",
          imgUrl: "https://i.ibb.co/TgLSn4b/pintura.png",
          projectUrl: "https://github.com/LorenzoBondan/Estrutura-Pintura",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        },
        {
          title: "Packaging structure automation",
          description: "C# Windows Forms CSV handling and a file return ready for import into the company's system",
          imgUrl: "https://i.ibb.co/X7w5RYs/fantasma.png",
          projectUrl: "https://github.com/LorenzoBondan/Estrutura-Embalagem",
          images:[
            {
              url: "",
            },
            {
              url: "",
            },
          ]
        }
    ]

    return(
        <div className='projects-container' id='projects'>
            <h2 style={{marginBottom:"0"}}>Projects</h2>
            <span className='separator'></span>
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

                    <Tab.Pane eventKey="third">
                      <Row className='row'>
                        {
                          projects3.map((project, index) => {
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

                  </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
}

export default Projects;
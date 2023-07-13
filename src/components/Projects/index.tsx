
import { ProjectCard } from 'components/ProjectCard';
import { Nav, Row, Tab } from 'react-bootstrap';
import './styles.css';

const Projects = () => {

    const projects1 = [
        {
          title: "AgiTask",
          description: "Tasks management tool, with comments, notifications and data analysis",
          imgUrl: "https://i.ibb.co/WzYp0bS/tasks.png",
          projectUrl: "https://github.com/LorenzoBondan/AgiTask",
          images:[
            {
              url: "https://i.ibb.co/WzYp0bS/tasks.png",
            },
            {
              url: "https://i.ibb.co/84sjNbm/task-details-comments.png",
            },
            {
              url: "https://i.ibb.co/THCr61k/task-details-works.png",
            },
            {
              url: "https://i.ibb.co/xLvyJLn/task-details-works-edit.png",
            },
            {
              url: "https://i.ibb.co/PsLH2ty/task-details-data.png",
            },
            {
              url: "https://i.ibb.co/hMDXtwx/profile.png",
            },
            {
              url: "https://i.ibb.co/4gxWhsL/admin.png",
            },
            {
              url: "https://i.ibb.co/gZWRsdb/new-task.png",
            },
            {
              url: "https://i.ibb.co/5x5LZFf/home1.png",
            },
            {
              url: "https://i.ibb.co/N2kWXP2/home2.png",
            },
            {
              url: "https://i.ibb.co/9wQ2bvF/home3.png",
            },
            {
              url: "https://i.ibb.co/zH1L6YZ/home4.png",
            },
            {
              url: "https://i.ibb.co/Qj5brTq/login.png",
            },
            {
              url: "https://i.ibb.co/7VvRg7H/register.png",
            },
            {
              url: "https://i.ibb.co/JdjjmPH/asta.png",
            },
          ]
        },
        {
          title: "Social Network",
          description: "A Social Network where users can post, follow, like and comment their friends posts.",
          imgUrl: "https://i.ibb.co/Fh5bMBy/profile.png",
          projectUrl: "https://github.com/LorenzoBondan/SocialNetwork",
          images:[
            {
              url: "https://i.ibb.co/Fh5bMBy/profile.png",
            },
            {
              url: "https://i.ibb.co/VmSrBZy/feed1.png",
            },
            {
              url: "https://i.ibb.co/7VH7RWm/feed2.png",
            },
            {
              url: "https://i.ibb.co/vJnC3c5/feed3.png",
            },
            {
              url: "https://i.ibb.co/p1Sk5Hk/users.png",
            },
            {
              url: "https://i.ibb.co/VDKqKYq/newpost.png",
            },
            {
              url: "https://i.ibb.co/RBLd3Gq/following.png",
            },
            {
              url: "https://i.ibb.co/ZfcJxXD/followers.png",
            },
            {
              url: "https://i.ibb.co/JnPzvsW/editprofile.png",
            },
            {
              url: "https://i.ibb.co/6y3Gdf2/admin.png",
            },
            {
              url: "https://i.ibb.co/9N2JCy1/admin-Crud.png",
            },
            {
              url: "https://i.ibb.co/Qj7b6Y1/home.png",
            },
            {
              url: "https://i.ibb.co/xHWbN2p/login.png",
            },
            {
              url: "https://i.ibb.co/swnftn7/register.png",
            },
            {
              url: "https://i.ibb.co/n74HWM0/asta.png",
            },
          ]
        },

        {
          title: "RecipeShare",
          description: "Share, discover and avaliate new recipes",
          imgUrl: "https://user-images.githubusercontent.com/105743965/253373568-2f41001b-afe5-4f4d-a6ee-6f1037d99d75.png",
          projectUrl: "https://github.com/LorenzoBondan/RecipeShare",
          images:[
            {
              url: "https://user-images.githubusercontent.com/105743965/253373568-2f41001b-afe5-4f4d-a6ee-6f1037d99d75.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253372991-7e7934cc-6f68-46f5-9273-ca444ec993da.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373010-6e33155e-0f39-426f-bb40-66884fffae37.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253372933-b09d10d3-1b0e-4fbe-a891-3901a0202a35.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373038-713efd9d-47dc-452c-9ef5-ef3c167eaf01.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373066-38bae17a-3449-415f-bd6e-3f4f1350cc11.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373086-a6bfa140-ac85-470e-a677-f135393c576a.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373110-494f6c2f-c80e-4121-8963-58297d351d77.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373128-8e2a053f-e8ec-4cb3-9057-8e373977f9dc.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373138-0216926d-7350-4a94-9812-33077b6b24af.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/253373164-42bcf9ba-dc80-44db-9595-2ddf1060b6b2.png",
            },
          ]
        },

        {
          title: "BarberShop",
          description: "A BarberShop where clients can create new appointments with their preferred barber at a convenient time for them.",
          imgUrl: "https://i.ibb.co/QQtvB1r/home1.png",
          projectUrl: "https://github.com/LorenzoBondan/BarberShop",
          images:[
            {
              url: "https://i.ibb.co/QQtvB1r/home1.png",
            },
            {
              url: "https://i.ibb.co/7QY2ydP/home2.png",
            },
            {
              url: "https://i.ibb.co/t3TppKM/home3.png",
            },
            {
              url: "https://i.ibb.co/K7vWC3R/home4.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/250364680-6cb50160-1b82-43af-a6a7-aea9bd65becb.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/250364682-d3e43aff-0f34-4dd1-82b1-2be622c3a9e3.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/250364691-05924bf3-44be-419d-8df9-a7e342f975b2.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/250364697-c37d2445-a79e-4815-9415-c9c8c12baebf.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/250364702-09e3166c-bdbb-41e3-9c6d-81765a7e299b.png",
            },
            {
              url: "https://user-images.githubusercontent.com/105743965/250364712-d5925680-867b-496b-8fb7-f290a6acaacb.png",
            },
            {
              url: "https://i.ibb.co/9Z5VcWJ/class-diagram.png",
            },
          ]
        },
    ]

    const projects2 = [
        {
          title: "Soccer League Simulator",
          description: "A summary and a simulator of the brazilian soccer league",
          imgUrl: "https://i.ibb.co/jhncn2T/Captura-de-tela-2023-04-20-150146.png",
          projectUrl: "https://github.com/LorenzoBondan/SoccerLeague",
          images:[
            {
              url: "https://i.ibb.co/jhncn2T/Captura-de-tela-2023-04-20-150146.png",
            },
            {
              url: "https://i.ibb.co/V9B43Ff/Captura-de-tela-2023-04-20-150244.png",
            },
            {
              url: "https://i.ibb.co/pKnVNCn/Captura-de-tela-2023-04-20-153356.png",
            },
            {
              url: "https://i.ibb.co/8dSMYsD/Captura-de-tela-2023-04-20-150124.png",
            },
            {
              url: "https://i.ibb.co/s9KnjJc/Captura-de-tela-2023-04-20-150303.png",
            },
            {
              url: "https://i.ibb.co/hmQm4ZC/Captura-de-tela-2023-04-20-150317.png",
            },
            {
              url: "https://i.ibb.co/Bc2ccdB/Captura-de-tela-2023-04-20-150353.png",
            },
            {
              url: "https://i.ibb.co/6HkmdW8/Captura-de-tela-2023-04-20-150412.png",
            },
            {
              url: "https://i.ibb.co/tM6XtnG/asta.png",
            },
          ]
        },
        {
          title: "University",
          description: "A university project where students can subscribe to courses and class sections of the subjects.",
          imgUrl: "https://i.ibb.co/QDHP8Kx/Captura-de-tela-2023-05-20-103531.png",
          projectUrl: "https://github.com/LorenzoBondan/University",
          images:[
            {
              url: "https://i.ibb.co/QDHP8Kx/Captura-de-tela-2023-05-20-103531.png",
            },
            {
              url: "https://i.ibb.co/nQvTDfS/Captura-de-tela-2023-05-20-103736.png",
            },
            {
              url: "https://i.ibb.co/YjtLxYp/Captura-de-tela-2023-05-20-103511.png",
            },
            {
              url: "https://i.ibb.co/fMK0nkR/Captura-de-tela-2023-05-20-103659.png",
            },
            {
              url: "https://i.ibb.co/0QWJRw3/Captura-de-tela-2023-05-20-103546.png",
            },
            {
              url: "https://i.ibb.co/BcXrNGm/Captura-de-tela-2023-05-20-103615.png",
            },
            {
              url: "https://i.ibb.co/zbtML4q/Captura-de-tela-2023-05-20-110343.png",
            },
          ]
        },
        {
          title: "High School Class",
          description: "A summary of the author's high school class",
          imgUrl: "https://i.ibb.co/dPrdFVd/highschoolhome.png",
          projectUrl: "https://github.com/LorenzoBondan/HighSchool-Students",
          images:[
            {
              url: "https://i.ibb.co/dPrdFVd/highschoolhome.png",
            },
            {
              url: "https://i.ibb.co/jzzY6J9/highschoolstudents.png",
            },
            {
              url: "https://i.ibb.co/JHbSFzP/highschoolstudentdetails.png",
            },
            {
              url: "https://i.ibb.co/0ndQVsZ/highschoolstudentdetailscomments.png",
            },
            {
              url: "https://i.ibb.co/rsD8yP6/moments.png",
            },
            {
              url: "https://i.ibb.co/Cty7DfR/countdown.png",
            },
            {
              url: "https://i.ibb.co/nnGv5sN/admin.png",
            },
            {
              url: "https://i.ibb.co/zFb9V32/login.png",
            },
            {
              url: "https://i.ibb.co/f13TRbX/asta.png",
            },
          ]
        },
        {
          title: "DS Catalog",
          description: "A catalog of products for sale",
          imgUrl: "https://i.ibb.co/D97jYg9/dscatalog.png",
          projectUrl: "https://github.com/LorenzoBondan/dscatalog",
          images:[
            {
              url: "https://i.ibb.co/D97jYg9/dscatalog.png",
            },
          ]
        },
    ]

    const projects3 = [
        {
          title: "MovieFlix",
          description: "A movie site with reviews for registered members",
          imgUrl: "https://i.ibb.co/0KHHbfd/movieflix.png",
          projectUrl: "https://github.com/LorenzoBondan/MovieFlix",
          images:[
            {
              url: "https://i.ibb.co/0KHHbfd/movieflix.png",
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
              url: "https://i.ibb.co/6wLM9Vm/deliver.png",
            },
          ]
        },
        {
          title: "DS Sales",
          description: "Dashboard of sales",
          imgUrl: "https://i.ibb.co/txGmKd0/dssales.png",
          projectUrl: "https://github.com/LorenzoBondan/DSSales",
          images:[
            {
              url: "https://i.ibb.co/txGmKd0/dssales.png",
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
              url: "https://i.ibb.co/8g1Mw0c/dslearn.png",
            },
          ]
        },
    ]

    const projects4 = [
      {
        title: "Search for Github User",
        description: "Application to fetch user data from github using Github API",
        imgUrl: "https://i.ibb.co/HxT2qFd/githubuser.png",
        projectUrl: "https://github.com/LorenzoBondan/Search-for-GitHub-User",
        images:[
          {
            url: "https://i.ibb.co/HxT2qFd/githubuser.png",
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
              url: "https://i.ibb.co/qYvXjTc/dosimetria.png",
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
              url: "https://i.ibb.co/TgLSn4b/pintura.png",
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
              url: "https://i.ibb.co/X7w5RYs/fantasma.png",
            },
          ]
        }
    ]

    return(
        <div className='projects-container base-card' id='projects'>
            <h2 style={{marginBottom:"0"}}>Projects</h2>
            <span className='separator'></span>
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
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
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
                    <Tab.Pane eventKey="fourth">
                      <Row className='row'>
                        {
                          projects4.map((project, index) => {
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
    );
}

export default Projects;
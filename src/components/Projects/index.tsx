
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
              url: "https://i.ibb.co/9sjJftw/newappointment.png",
            },
            {
              url: "https://i.ibb.co/ZSSwr5W/myappointments.png",
            },
            {
              url: "https://i.ibb.co/09FgvS7/admin.png",
            },
            {
              url: "https://i.ibb.co/8s8RSwq/admin-crud.png",
            },
            {
              url: "https://i.ibb.co/wBV6cKV/login.png",
            },
            {
              url: "https://i.ibb.co/jbFQ1gg/register.png",
            },
            {
              url: "https://i.ibb.co/9Z5VcWJ/class-diagram.png",
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
              url: "https://i.ibb.co/D97jYg9/dscatalog.png",
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
              url: "https://i.ibb.co/0KHHbfd/movieflix.png",
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
    ]

    const projects3 = [
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
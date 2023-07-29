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
          title: "BookTradeHub",
          description: "A platform for book exchanges and fostering a community of literary sharing",
          imgUrl: "https://i.ibb.co/FD3YmbC/exchanges-pending.png",
          projectUrl: "https://github.com/LorenzoBondan/BookTradeHub",
          images:[
            {
              url: "https://i.ibb.co/FD3YmbC/exchanges-pending.png",
            },
            {
              url: "https://i.ibb.co/RBzmsTV/exchanges-disponible.png",
            },
            {
              url: "https://i.ibb.co/8ctNwXW/exchanges-completed.png",
            },
            {
              url: "https://i.ibb.co/4pVxZk9/disponible-exchanges.png",
            },
            {
              url: "https://i.ibb.co/KD3j5vf/disponible-exchanges-offer.png",
            },
            {
              url: "https://i.ibb.co/nfR9JGx/profile.png",
            },
            {
              url: "https://i.ibb.co/hMXygh1/profile-add-book.png",
            },
            {
              url: "https://i.ibb.co/YT1JYQb/profile-create-exchange.png",
            },
            {
              url: "https://i.ibb.co/j3B2y6j/home.png",
            },
            {
              url: "https://i.ibb.co/GTPhp0d/admin-crud.png",
            },
            {
              url: "https://i.ibb.co/ZJNFr9v/login.png",
            },
            {
              url: "https://i.ibb.co/KGJyqTm/register.png",
            },
            {
              url: "https://i.ibb.co/P1FNJPT/asta.png",
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
          title: "EduLink",
          description: "An innovative communication platform that connects schools, parents, and teachers in a collaborative and efficient environment.",
          imgUrl: "https://i.ibb.co/h22CqRs/chat.png",
          projectUrl: "https://github.com/LorenzoBondan/EduLink",
          images:[
            {
              url: "https://i.ibb.co/h22CqRs/chat.png",
            },
            {
              url: "https://i.ibb.co/MfRPBSB/chats.png",
            },
            {
              url: "https://i.ibb.co/4YT4L7T/subjects-teacher-view.png",
            },
            {
              url: "https://i.ibb.co/SJ0HMd6/subject-notes-teacher-view.png",
            },
            {
              url: "https://i.ibb.co/JdSsdsj/subject-tests-teacher-view.png",
            },
            {
              url: "https://i.ibb.co/4SsYRMt/subject-tests-teacher-add-test-view.png",
            },
            {
              url: "https://i.ibb.co/h2yhXPH/subject-notes-parent-view.png",
            },
            {
              url: "https://i.ibb.co/vmcV7sx/subject-tests-parent-view.png  ",
            },
            {
              url: "https://i.ibb.co/8D9S2ZT/profile.png",
            },
            {
              url: "https://i.ibb.co/g3crjM7/home-login.png",
            },
            {
              url: "https://i.ibb.co/MRZpTh6/admin-crud-subjects.png",
            },
            {
              url: "https://i.ibb.co/PNvMxH6/admin-crud-users.png",
            },
            {
              url: "https://i.ibb.co/LNNyw77/admin-crud-subjects-form.png",
            },
            {
              url: "https://i.ibb.co/Z1pMQRv/asta.png",
            },
          ]
        },
    ]

    const projects2 = [
        {
          title: "RecipeShare",
          description: "Share, discover and avaliate new recipes",
          imgUrl: "https://i.ibb.co/z8KLnpr/recipes.png",
          projectUrl: "https://github.com/LorenzoBondan/RecipeShare",
          images:[
            {
              url: "https://i.ibb.co/z8KLnpr/recipes.png",
            },
            {
              url: "https://i.ibb.co/0r5G5H8/recipe-details-1.png",
            },
            {
              url: "https://i.ibb.co/m0cfDxP/recipe-details-2.png",
            },
            {
              url: "https://i.ibb.co/MpTxQhQ/recipe-feedback.png",
            },
            {
              url: "https://i.ibb.co/Nx0G3t8/profile.png",
            },
            {
              url: "https://i.ibb.co/Hh2L8c9/new-recipe.png",
            },
            {
              url: "https://i.ibb.co/2ysvqdh/admin-crud.png",
            },
            {
              url: "https://i.ibb.co/yVq7jvS/home.png",
            },
            {
              url: "https://i.ibb.co/SsY6pSR/login.png",
            },
            {
              url: "https://i.ibb.co/y0F8FzY/register.png",
            },
            {
              url: "https://i.ibb.co/1K5ZtBH/asta.png",
            },
          ]
        },
        {
          title: "BarberShop",
          description: "A BarberShop where clients can create new appointments with their preferred barber at a convenient time for them.",
          imgUrl: "https://i.ibb.co/86FPgTZ/newappointment.png",
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
              url: "https://i.ibb.co/86FPgTZ/newappointment.png",
            },
            {
              url: "https://i.ibb.co/xFMD4fW/myappointments.png",
            },
            {
              url: "https://i.ibb.co/0KBSZK5/admin.png",
            },
            {
              url: "https://i.ibb.co/hH1HB1w/admin-crud.png",
            },
            {
              url: "https://i.ibb.co/TKFrvrZ/login.png",
            },
            {
              url: "https://i.ibb.co/PFCLDbC/register.png",
            },
            {
              url: "https://i.ibb.co/9Z5VcWJ/class-diagram.png",
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
          title: "University",
          description: "A university project where students can subscribe to courses and class sections of the subjects.",
          imgUrl: "https://i.ibb.co/QDHP8Kx/Captura-de-tela-2023-05-20-103531.png",
          projectUrl: "https://github.com/LorenzoBondan/University",
          images:[
            {
              url: "https://i.ibb.co/QDHP8Kx/Captura-de-tela-2023-05-20-103531.png",
            },
            {
              url: "https://i.ibb.co/jz289LV/courses.png",
            },
            {
              url: "https://i.ibb.co/f8b5B9N/course-details1.png",
            },
            {
              url: "https://i.ibb.co/BfcbhsC/course-details2.png",
            },
            {
              url: "https://i.ibb.co/FKn9Kt0/course-details3.png",
            },
            {
              url: "https://i.ibb.co/23rKGG4/profile.png",
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
    ]

    const projects3 = [
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
            {
              url: "https://i.ibb.co/5MjK4Qb/home.png",
            },
            {
              url: "https://i.ibb.co/jvKPP7H/catalog.png",
            },
            {
              url: "https://i.ibb.co/KN16Syk/product-details.png",
            },
            {
              url: "https://i.ibb.co/wSg44Lz/login.png",
            },
            {
              url: "https://i.ibb.co/jyWYVwP/admin.png",
            },
            {
              url: "https://i.ibb.co/zG3xvZF/admin-crud-form.png",
            },
            {
              url: "https://i.ibb.co/XZcQQmF/asta.png",
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

    const projects4 = [
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
        {
          title: "Final undergraduate thesis of Mechanical Engineering",
          description: "Frequency and sound pressure level meter that generates dosimetry reports",
          imgUrl: "https://i.ibb.co/5cNyhyD/dosimetry.png",
          projectUrl: "https://github.com/LorenzoBondan/FrequencyAnalyzer",
          images:[
            {
              url: "https://i.ibb.co/5cNyhyD/dosimetry.png",
            },
            {
              url: "https://i.ibb.co/9VzqH3T/frequency-domain.png",
            },
            {
              url: "https://i.ibb.co/CQ7wyHR/log-domain.png",
            },
            {
              url: "https://i.ibb.co/Nt4zbVS/time-domain.png",
            },
            {
              url: "https://i.ibb.co/rQ6wFJG/window.png",
            },
            {
              url: "https://i.ibb.co/fMYDFwx/home.png",
            },
            {
              url: "https://i.ibb.co/1Zcst72/menu.png",
            },
            {
              url: "https://i.ibb.co/P4GfKpt/login.png",
            },
            {
              url: "https://i.ibb.co/Qk717F9/simulator.png",
            },
            {
              url: "https://i.ibb.co/4pwY6xQ/load-audio.png",
            },
            {
              url: "https://i.ibb.co/ZdxsJbb/loading.png",
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
        },
        {
          title: "Gear Dimensioning system",
          description: "Desktop application for gear set sizing ",
          imgUrl: "https://i.ibb.co/8BWS0hg/psm2.png",
          projectUrl: "https://github.com/LorenzoBondan/Software-dimensionamento-engrenagens",
          images:[
            {
              url: "https://i.ibb.co/8BWS0hg/psm2.png",
            },
          ]
        },
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
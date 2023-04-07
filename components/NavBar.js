import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';


function NavBar() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand}  expand={expand} className={styles.all}>
          <Container fluid>
            <Navbar.Brand href="#" className={`Navbar_navbrand__UmsyW ${styles.navbrand}`}>
            {/* <div id={styles.img}>  */}
               <img className={`img ${styles.brandlogo}`} src="/brandlogo.png" alt="logo" />
               {/* </div> */}
                <h1 className={styles.we}>WeSkillYou</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className={`offcanvas-end ${styles.Offcanvas}`}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
               <div id='img-2'>
               <img className={`img2 ${styles.brandlogo}`} src="/brandlogo.png" alt="logo" />
               </div>
                <h1 className={styles.we2}>WeSkillYou</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.navLink}`}>
                  <Nav.Link href="#action1" className={styles.navs}><Link href="/">Home</Link></Nav.Link>
                  <Nav.Link href="#action2" className={styles.navs}><Link href="/about">About Us</Link></Nav.Link>
                  <Nav.Link href="#action2" className={styles.navs}><Link href="/signin">Login</Link></Nav.Link>
                  <NavDropdown
                    title="Signup"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3"><Link href="/signup">Student</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Teachers
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
  
                  </NavDropdown>
                  <NavDropdown
                    title="Courses"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="courses">
                     <NavDropdown
                     title="Soft Skills"
                    >
                    <NavDropdown.Item href="#action4">
                      Public Speaking
                      <NavDropdown.Item href="#action4">
                      Leadership Skill
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Social Skill
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Marketing Skills
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown
                     title="Vocational Skills"
                    >
                    <NavDropdown.Item href="#action4">
                      Mechanics
                      <NavDropdown.Item href="#action4">
                      Plumber
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Painter
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Metallurgist
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown
                     title="Tech Skills"
                    >
                    <NavDropdown.Item href="#action4">
                      Web Designer
                      <NavDropdown.Item href="#action4">
                      Web Developer
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      UI/UX Designer
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Content Creator
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown.Item href="#action5">
                      Certification
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className={`d-flex ${styles.dflex}`}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className={`Navbar_btn__2_IOi ${styles.btn}`} variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar
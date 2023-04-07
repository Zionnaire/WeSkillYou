import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/Navbar.module.css'

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
                <h1 className={styles.we}>WeSkillYOU</h1>
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
                <h1 className={styles.we2}>WeSkillYOU</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.navLink}`}>
                  <Nav.Link href="#action1" className={styles.navs}>Home</Nav.Link>
                  <Nav.Link href="#action2" className={styles.navs}>About Us</Nav.Link>
                  <Nav.Link href="#action2" className={styles.navs}>Login</Nav.Link>
                  <NavDropdown
                    title="Signup"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Student</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Vocational Trainer
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Tech Teacher
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Courses"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="courses">
                    <NavDropdown.Item href="#action3">Soft Skills</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Vocational Skills
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Tech Skills
                    </NavDropdown.Item>
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import { FaBars, FaTasks, FaStar, FaCheckCircle, FaTimesCircle, FaFolderPlus } from 'react-icons/fa';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar expand="lg" fixed="top" className="d-lg-none">
        <Button variant="light" onClick={handleShow} className="me-2">
          <FaBars />
        </Button>
        
        <Navbar.Brand className="d-none d-lg-block">TO-DO LIST</Navbar.Brand>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="xl"
        placement="start"
        style={{
          height: '100vh', 
          position: 'fixed',
          zIndex: 1050, 
          backgroundColor: '#f8f9fa', 
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TO-DO LIST</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ width: '100%' }} className="p-3">
            <Link to="" className="btn btn-primary w-100 mb-4">
              <FaFolderPlus className="me-2" /> Add New Task
            </Link>

            <Nav className="flex-column">
              <Nav.Item className="mb-2">
                <Link to="/" className="nav-link">
                  <FaTasks className="me-2" />
                  All Tasks
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Link to="/important" className="nav-link">
                  <FaStar className="me-2" style={{ color: '#ff6347' }} />
                  Important Tasks
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Link to="/completed" className="nav-link">
                  <FaCheckCircle className="me-2" style={{ color: '#28a745' }} />
                  Completed Tasks
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Link to="/uncompleted" className="nav-link">
                  <FaTimesCircle className="me-2" style={{ color: '#ffc107' }} />
                  Uncompleted Tasks
                </Link>
              </Nav.Item>
            </Nav>

            <div className="mt-5">
              <h6>Directories</h6>
              <Nav className="flex-column">
                <Nav.Item className="mb-2">
                  <Link to="/directory/secondary" className="nav-link">
                    Secondary
                  </Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Link to="/directory/main" className="nav-link">
                    Main
                  </Link>
                </Nav.Item>
              </Nav>
              <Nav.Item className="mt-3">
                <Link to="/directory/new" className="nav-link">
                  <FaFolderPlus className="me-2" /> + New
                </Link>
              </Nav.Item>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;

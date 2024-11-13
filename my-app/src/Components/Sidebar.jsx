import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Offcanvas, Button, Modal } from 'react-bootstrap';
import { FaBars, FaTasks, FaStar, FaCheckCircle, FaTimesCircle, FaFolderPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDirectory, setSelectedDirectory] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDeleteModalShow = (directory) => {
    setSelectedDirectory(directory);
    setShowDeleteModal(true);
  };
  
  const handleEditModalShow = (directory) => {
    setSelectedDirectory(directory);
    setShowEditModal(true);
  };

  const handleDelete = () => {
    console.log(`Deleting directory: ${selectedDirectory}`);
    setShowDeleteModal(false);
  };

  const handleEdit = () => {
    console.log(`Editing directory: ${selectedDirectory}`);
    setShowEditModal(false);
  };

  return (
    <>


 <Navbar expand="lg"  >
        <Button variant="light" onClick={handleShow} className="me-2">
           <FaBars />
         </Button>
        
         <Navbar.Brand className="d-none d-lg-block">TO-DO LIST</Navbar.Brand>
      </Navbar>

      {/* <Navbar expand="lg" fixed="top" className="d-lg-none">
        <Button variant="light" onClick={handleShow} className="me-2">
          <FaBars />
        </Button>
        <Navbar.Brand className="d-none d-lg-block">TO-DO LIST</Navbar.Brand>
      </Navbar> */}

      <Offcanvas show={show} onHide={handleClose} responsive="xl">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TO-DO LIST</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ width: '100%', backgroundColor: '#f8f9fa', paddingTop: '10px' }} className="p-3">
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
                <Nav.Item className="mb-2 directory-item">
                  <Link to="/directory/secondary" className="nav-link d-flex justify-content-between align-items-center">
                    Secondary
                    <div className="directory-icons">
                      <FaEdit className="text-info me-2" onClick={() => handleEditModalShow('Secondary')} />
                      <FaTrash className="text-danger" onClick={() => handleDeleteModalShow('Secondary')} />
                    </div>
                  </Link>
                </Nav.Item>
                <Nav.Item className="mb-2 directory-item">
                  <Link to="/directory/main" className="nav-link d-flex justify-content-between align-items-center">
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

      
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Directory</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the directory "{selectedDirectory}"?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Directory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <p>Editing directory: {selectedDirectory}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
};

export default Sidebar;





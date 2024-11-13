import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import TaskHeader from './TaskHeader';
import MainContent from './MainContent';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'This is the description for this task', status: 'uncompleted', isImportant: false, date: '30/12/2023', type: 'main' },
    { id: 2, title: 'Task 2', description: 'This is the description for this task', status: 'completed', isImportant: true, date: '30/12/2023', type: 'main' },
    { id: 3, title: 'Task 3', description: 'This is the description for this task', status: 'completed', isImportant: true, date: '30/12/2023', type: 'main' },
  ]);

  const [taskCount, setTaskCount] = useState(tasks.length);

  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f4f6f8', overflow: 'hidden' }}>
        <Container fluid style={{ height: '100vh', padding: '15px' }}>
          <Row className="h-100">
            <Col
              xs={12}
              md={2}
              className="p-0 d-none d-md-block"
              style={{ height: '100%', backgroundColor: '#f8f9fa', overflowY: 'auto' }}
            >
              <Sidebar />
            </Col>

            <Col xs={12} className="d-md-none">
              <Sidebar />
            </Col>

            <Col xs={12} md={10} className="my-4" style={{ height: '100%', overflowY: 'auto' }}>
              <div style={{ paddingLeft: '25px' }}>
                <TaskHeader taskCount={taskCount} />
                <MainContent tasks={tasks} setTaskCount={setTaskCount} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TaskCard from './TaskCard';
import TaskList from './TaskList';
import TaskType from './TaskType';
import TaskItem from './TaskItem';

function MainContent({ tasks, setTaskCount }) {
  const location = useLocation();
  const routeName = location.pathname.replace("/", "").toUpperCase();
  useEffect(() => {
    const filteredTasks = (() => {
      switch (location.pathname) {
        case "/important":
          return tasks.filter(task => task.isImportant);
        case "/completed":
          return tasks.filter(task => task.status === "completed");
        case "/uncompleted":
          return tasks.filter(task => task.status === "uncompleted");
        default:
          return tasks;
      }
    })();

    setTaskCount(filteredTasks.length);
  }, [location, tasks, setTaskCount, routeName]);

  return (
    <Routes>
      <Route path="/" element={
        <div className="d-flex flex-wrap justify-content-around">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              status={task.status}
              isImportant={task.isImportant}
              type={task.type}
            />
          ))}
        </div>
      } />

    <Route path="/important" element={<TaskList tasks={tasks} />}/>
   <Route path="/completed" element={<TaskItem tasks={tasks} filterStatus='completed'/>} />
   <Route path="/uncompleted" element={<TaskItem tasks={tasks} filterStatus='uncompleted'/>} />
   <Route path="/directory/:type" element={<TaskType tasks={tasks}/>}/>

    </Routes>
  );
}

export default MainContent;




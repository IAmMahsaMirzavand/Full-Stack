
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import TaskCard from './TaskCard';


// function MainContent({ tasks, setTaskCount, onToggleImportant, onToggleStatus }) {
//   const location = useLocation(); 
//   // const routeName = location.pathname.replace("/", "").toUpperCase() || "All"; 
 
//   useEffect(() => {
//     const filteredTasks = (() => {
//       switch (location.pathname) {
//         case "/important":
//           return tasks.filter(task => task.isImportant);
//         case "/completed":
//           return tasks.filter(task => task.status === "completed");
//         case "/uncompleted":
//           return tasks.filter(task => task.status === "uncompleted");
//         default:
//           return tasks;
//       }
//     })();

//     setTaskCount(filteredTasks.length); 
//   }, [location, tasks, setTaskCount]);

//   return (
//     <div className="d-flex flex-wrap justify-content-around">
    
//       {tasks.map(task => (
//         <TaskCard
//           key={task.id}
//           title={task.title}
//           description={task.description}
//           date={task.date}
//           status={task.status}
//           isImportant={task.isImportant}
//           onToggleImportant={() => onToggleImportant(task.id)}  
//           onToggleStatus={() => onToggleStatus(task.id)} 
//         />
//       ))}
//     </div>
//   );
// }

// export default MainContent;







import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TaskCard from './TaskCard';

function MainContent({ tasks, setTaskCount, onToggleImportant, onToggleStatus, filter }) {
  const location = useLocation();

 
  const filteredTasks = (() => {
    switch (filter) {
      case "important":
        return tasks.filter(task => task.isImportant);
      case "completed":
        return tasks.filter(task => task.status === "completed");
      case "uncompleted":
        return tasks.filter(task => task.status === "uncompleted");
      default:
        return tasks;
    }
  })();

  
  useEffect(() => {
    setTaskCount(filteredTasks.length);
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {filteredTasks.map(task => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          date={task.date}
          status={task.status}
          isImportant={task.isImportant}
          onToggleImportant={() => onToggleImportant(task.id)}  
          onToggleStatus={() => onToggleStatus(task.id)} 
        />
      ))}
    </div>
  );
}

export default MainContent;

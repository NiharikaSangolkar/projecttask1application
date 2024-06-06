// src/App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import PrivateRoute from './components/Auth/PrivateRoute';
import ProjectList from './components/Dashboard/ProjectList';
import ProjectForm from './components/Dashboard/ProjectForm';
import TaskList from './components/Dashboard/TaskList';
import TaskForm from './components/Task/TaskForm';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  const handleAddProject = (project) => {
    setProjects([...projects, { id: Date.now(), ...project, status: 'Active' }]);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, status: 'Pending' }]);
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <div>
                <h2>Welcome, {username}</h2>
                <button onClick={handleLogout}>Logout</button>
                <ProjectList projects={projects} />
                <ProjectForm onSubmit={handleAddProject} />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/:projectId/tasks"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              {({ match }) => {
                const projectTasks = tasks.filter(task => task.projectId === parseInt(match.params.projectId));
                return (
                  <div>
                    <TaskList tasks={projectTasks} />
                    <TaskForm onSubmit={(task) => handleAddTask({ ...task, projectId: parseInt(match.params.projectId) })} />
                  </div>
                );
              }}
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

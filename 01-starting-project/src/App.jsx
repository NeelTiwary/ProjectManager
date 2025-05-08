import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import { useState } from "react";
import SelectedProjectC from "./Components/SelectedProjectC.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      //.log("selectedProject while adding task", prevState.selectedProject);
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask (id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProject: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: projectId,
    }));
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  function handleDeleteProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProject
      ),
    }));
  }

  let content = (
    <SelectedProjectC
      tasks={projectState.tasks.filter(
        (task) => task.projectId === projectState.selectedProject
      )}
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProject === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProject == undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen flex my-8 gap-8">
        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProject={projectState.selectedProject}
        />

        {content}
      </main>
    </>
  );
}

export default App;

import React from "react";
import NewTask from "./NewTask";

function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-500 mb-4">NEW TASKS</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-400 ">This project does not have any tasks</p>
      )}
      {tasks.length > 0 && (
        <ul>
          {/* Here you can map through tasks and display them */}
          {tasks.map((task) => (
            <li className=" flex justify-between my-4" key={task.id}>
              <span className="text-stone-400"> {task.text}</span>
              <button
                className="px-4 py-2 text-xs md:text-base text-stone-400 rounded-md hover:bg-stone-700 hover:text-stone-200"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;

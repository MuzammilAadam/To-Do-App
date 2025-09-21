import { useState, useEffect } from "react";
import Navbar from "./navbar";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import ContactMe from "./ContactMe";

function App() {
  // ✅ State for single todo input
  const [todo, setTodo] = useState("");

  // ✅ State for all todos list
  const [todos, setTodos] = useState([]);

  // ✅ Load todos from localStorage when the app first mounts
  useEffect(() => {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // ✅ Save todos into localStorage whenever todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todos"); // optional: keeps storage clean
    }
  }, [todos]);

  // ✅ Add new todo
  const handleAdd = () => {
    if (!todo.trim()) return; // prevent adding empty todo
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo(""); // clear input after adding
  };

  // ✅ Edit a todo
  const handleEdit = (e, id) => {
    let t = todos.find((i) => i.id === id);
    if (t) {
      setTodo(t.todo); // put old todo in input field
      setTodos(todos.filter((item) => item.id !== id)); // remove old one
    }
  };

  // ✅ Delete a todo
  const handleDelete = (e, id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // ✅ Track input changes
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // ✅ Toggle completed checkbox
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      {/* Main container with responsive margins & full screen height */}
      <div className="flex items-start justify-center m-2 sm:m-5 h-screen bg-slate-900">
        {/* Todo box wrapper with responsive width, padding, and vertical scroll */}
        <div className="bg-slate-800 text-white p-4 sm:p-6 rounded-xl shadow-lg 
                        w-full max-w-md sm:max-w-lg md:max-w-2xl h-[90vh] flex flex-col">

          {/* Heading */}
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-mono tracking-[2px]">
            Get It Done!
          </h2>

          {/* Input + Add button row */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-2 mb-4">
            {/* ✅ Responsive input: width adapts, text sizes change on small/medium/large screens */}
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Add a task..."
              className="flex-1 p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-2 sm:mb-0"
            />
            {/* ✅ Responsive button: padding and font-size adjust for different screens */}
            <button
              onClick={handleAdd}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transition transform w-full sm:w-auto"
            >
              Add
            </button>
          </div>

          {/* Sub-heading */}
          <h2 className="sm:text-lg text-thin mb-2">Your Todos</h2>
          <div className="h-[1px] bg-white opacity-15 w-[90%] m-2 "></div>

          {/* Empty state message */}
          {todos.length === 0 && (
            <div className="text-center text-slate-400 text-xs sm:text-base m-2">
              No Todos Added.....
            </div>
          )}

          {/* Todo list container */}
          <div className="todos flex-1 space-y-3 mt-2 overflow-y-auto pr-1">
            {todos.map((item) => (
              <div
                key={item.id}
                className="todo flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-slate-700 rounded-lg"
              >
                {/* Checkbox + todo text */}
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <input
                    name={item.id}
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={handleCheckbox}
                    className="w-4 h-4"
                  />
                  <span
                    className={`${
                      item.isCompleted
                        ? "line-through text-slate-400"
                        : "text-white"
                    } text-sm sm:text-base break-words max-w-[80%]`}
                  >
                    {item.todo}
                  </span>
                </div>

                {/* Edit/Delete buttons */}
                <div className="buttons flex gap-2 sm:gap-3">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-md font-medium hover:scale-105 hover:shadow-lg transition transform"
                  >
                    <CiEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-md font-medium hover:scale-105 hover:shadow-lg transition transform"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Clear All button */}
          {todos.length > 0 && (
            <button
              onClick={() => setTodos([])}
              className="mt-4 bg-red-500 text-white px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base hover:bg-red-600 transition w-full sm:w-auto"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
      <ContactMe />
    </>
  );
}

export default App;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Todo = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);
  const [completedTodos, setCompletedTodos] = useState<number>(0); // Completed todos count
  const [totalTodos, setTotalTodos] = useState<number>(0); // Total todos count, doesn't change when todos are deleted

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo("");
      setTotalTodos((prevTotal) => prevTotal + 1); // Increment the total todos count
    } 
};

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  const completeTodo = (index: number) => {
    const updatedTodos = [...todos];
    if (!updatedTodos[index].completed) {
      updatedTodos[index].completed = true;

      // Update completed todos count
      setCompletedTodos((prevCount) => prevCount + 1);

      // Remove the todo from the list
      setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-orange-100 p-4">
        <div className="absolute top-0 left-0 right-0 bg-gray-200 p-4 bg-opacity-50 ">
          <div className="flex justify-end">
            <p className="text-black font-bold">
              {completedTodos} / {totalTodos} todos completed
            </p>
          </div>
        </div>

        {/* Left side for completed todos */}
        <div className="w-2/3 bg-white p-4 rounded-lg shadow-md mr-1 mt-10 ">
          <ul>
            {todos
              .filter((todo) => !todo.completed)
              .map((todo, index) => (
                <li
                  key={index}
                  className=" p-3 w-full border border-gray-100  flex justify-between items-center"
                >
                  <span>{todo.text}</span>
                  <div>
                    <button
                      onClick={() => completeTodo(index)}
                      className="text-green-500 font-bold "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-5 text-bold"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </button>

                    <button
                      className="text-red-500 font-bold"
                      onClick={() => deleteTodo(index)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Right side for adding todos */}
        <div className=" w-1/3  bg-white p-4 rounded-lg shadow-md mt-10">
          <h2 className="text-lg font-semibold mb-4 ">Add a todo</h2>
          <input
            type="text"
            value={todo}
            onChange={inputChange}
            placeholder="test"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-800"
          />

          <div className=" mb-auto space-y-5">
            <button
              onClick={addTodo}
              className="w-full p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Add to list
            </button>

            
          </div>

          <div className=" mt-[300px]">
          <div className="mt-auto  flex-col space-y-8 ">
              <NavLink to="/Login">
                <button className="   w-full p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  Log in
                </button>
              </NavLink>
            </div>

            <button className="mt-5 w-full p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Register
            </button>

            </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

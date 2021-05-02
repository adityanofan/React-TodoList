import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar States"
    },
    {
      text: "Belajar Dummy"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar States"
    },
    {
      text: "Belajar Dummy"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;

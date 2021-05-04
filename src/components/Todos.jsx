import React from "react";
import propTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      text: propTypes.string
    })
  )
};

export default Todos;

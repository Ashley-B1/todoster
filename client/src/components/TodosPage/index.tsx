import { FaPencilAlt, FaTrash, FaPlus } from "react-icons/fa";
import "./TodosPage.css";

const TodosPage = () => {
  return (
    <div className="todos_page">
      <div className="add_todos_input">
        <input id="todo_input" placeholder="Whatcha gotta do?" />
        <button id="add_todo-btn" className="btn">
          Add
          <FaPlus />
        </button>
      </div>
      <div id="todos_lists">
        <section className="completed_todos">
          <h3 className="completed_header tl-header">Completed:</h3>
          <ul className="completed_list tl-list">
            <li className="complete_li tl-li">
              <p className="complete_task">I am completed!</p>
              <div className="tl-icons">
                <FaPencilAlt />
                <FaTrash />
              </div>
            </li>
            <li className="complete_li tl-li">
              <p className="complete_task">I am completed!</p>
              <div className="tl-icons">
                <FaPencilAlt />
                <FaTrash />
              </div>
            </li>
            <li className="complete_li tl-li">
              <p className="complete_task">I am completed!</p>
              <div className="tl-icons">
                <FaPencilAlt />
                <FaTrash />
              </div>
            </li>
          </ul>
        </section>
        <section className="incomplete_todos">
          <h3 className="incomplete_header tl-header">Incomplete:</h3>
          <ul className="incomplete_list tl-list">
            <li className="incomplete_li tl-li">
              <p className="incomplete_task">I am incomplete!</p>
              <div className="tl-icons">
                <FaPencilAlt />
                <FaTrash />
              </div>
            </li>
            <li className="incomplete_li tl-li">
              <p className="incomplete_task">I am incomplete!</p>
              <div className="tl-icons">
                <FaPencilAlt />
                <FaTrash />
              </div>
            </li>
            <li className="incomplete_li tl-li">
              <p className="incomplete_task">I am incomplete!</p>
              <div className="tl-icons">
                <FaPencilAlt />
                <FaTrash />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TodosPage;

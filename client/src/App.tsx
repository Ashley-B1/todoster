import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useAppSelector, useAppDispatch } from './hooks'
import { RootStore } from './store';
import { getTodos } from './actions/todosActions';

function App() {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);

  const taskState = useSelector((state: RootStore) => state.todos);

  useEffect(() => {
    setTodos(dispatch(getTodos()));
  }, []);


  return (
    <div className="App">
      {taskState.todos && (
        <div>
          {todos.map(todo => (
            <div className='testing' key={todo.id}>
              {todo.isComplete}
            </div>
          ))}
        </div>

      )}
    </div>
  );
}

export default App;

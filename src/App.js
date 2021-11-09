import 'antd/dist/antd.css';
import Forms from './components/Form.jsx'
import List from './components/List.jsx'
import { useState, useEffect  } from 'react';
import { Spin } from 'antd';

function App() {
  const apiUrl = `https://jsonplaceholder.typicode.com`;
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(false)
  const [updater, setUpdater] = useState(false)

  useEffect(() => {
    fetch(`${apiUrl}/posts?_limit=5`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          alert('Ошибка запроса')
          throw error
        } 
      })
      .then((res) => res.json())
      .then((repos) => {
        repos.map((item) => item['checked'] = false)
        setLoader(true)
        setTodos(repos)
      }
    );
  }, []);

  const handleChange = (value) => {
    setTodos(todos.filter(item => item.id !== value))
  }
  const toggleCheckbox = (idListItem) => {
    setTodos(todos.map(item => item.id === idListItem ? {...item, checked: !item.checked} : item))
  }
  const addElement = (item) => {
    // Генерация слайного числа для id
    const randNum = Math.ceil(Math.random() * (1000-10) + 10);
    setUpdater(true)

    fetch(`${apiUrl}/posts`, {
      method: 'POST',
      body: JSON.stringify({title: item}),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          alert('Ошибка запроса')
          throw error
        }
      })
      .then((res) => res.json())
      .then((repos) => {
        setUpdater(false)
        repos.id = repos.id + randNum
        setTodos([repos, ...todos])
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Forms sumbitForm={addElement} updater={updater} />
        { loader ? 
          <List
            todos={todos}
            deleteTodo={handleChange}
            updateCheckbox={toggleCheckbox}
          /> :
          <Spin />
        }
      </header>
    </div>
  );
}

export default App;

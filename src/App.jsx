import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { ThemeContext } from './contexts/ThemeContext';
import { UserContext } from './contexts/UserContext';

function App() {
  // Here we are definining where the "user" state actually exists
  const [user, setUser] = useState(null);

  const [theme, setTheme] = useState("light")

// const lightBlue = {
//     name: "test",
//     backgroundColor: '#5ca5af'
// }

// const darkGreen = {
//     backgroundColor: '#5ca5af'
// }

  // Here we are defining what is the value provided by our context
  // We are "Providing" this value so that descendent elements can "Consume" it from the context
  const contextValue = { user, setUser };
  const contextTheme = { theme, setTheme }

  return (
    <UserContext.Provider value={contextValue}>
      <ThemeContext.Provider value={contextTheme}>
      <div className="App" className={theme}>

        <h1>Codelicious TODO</h1>

        {user && <Heading />}
        {user && <TodoList />}
        {!user && <Login />}

      </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

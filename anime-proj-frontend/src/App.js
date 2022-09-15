import Header from "./Header";
import AnimePage from "./Components/AnimePage";
import './App.css';
import React,{useState, useEffect} from "react"

function App() {
  const [users,setUsers] = useState([])
  const [user, setUser] = useState({})
  const [animes,setAnimes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(data => setUsers(data)
    )
  },[])
  useEffect(() => {
    fetch("http://localhost:9292/users/:id")
    .then(resp => resp.json())
    .then(data => setUser(data)
    )
  },[])

  return (
    <div className="app">
      <Header />
      <AnimePage/>
    </div>
  );
  
}

export default App;

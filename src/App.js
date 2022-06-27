import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom"
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Blog from './screens/Blog';
import SignlePost from './screens/SignlePost';
import Footer from './components/Footer/Footer';
import Login from './screens/Login';
import Register from './screens/Register';
import Student from './screens/Student';
import Profile from './screens/Profile';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';


function App() {

  const [data, setData] = useState([])
  const [qulaylik, setQulaylik] = useState({})
  const [success, setSuccess] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios.get("https://28-maktab-six.vercel.app/api/postlastfour")
        setData(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={loading ? <Loader /> : <Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/news/:postId' element={<SignlePost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Register />} />
          <Route path='/student' element={<Student />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        {
          loading ?
            <span></span>
            :
            <Footer />
        }
      </HashRouter>
    </div >
  );
}

export default App;

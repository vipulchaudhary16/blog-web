import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './component/SignUp';
import { LogIn } from './component/LogIn';
import { Navbar } from './component/Navbar';
import { Blog } from './component/Blog';
import AddBlogForm from './component/AddBlog';
import { Home } from './component/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add-blog' element={<AddBlogForm />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;

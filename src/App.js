import './App.css';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Content/Home';
import Gallery from './components/Content/Gallery';
import Blogs from './components/Content/Blogs';
import About from './components/Content/About';
import Contact from './components/Content/Contact';
import NewBlog from './components/Content/NewBlog';
import OldBlog from './components/Content/OldBlog';
import NotFound from './components/Content/NotFound';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path='blogs' element={<Blogs />}>
            <Route index element={<NewBlog />} />
            <Route path="newblog" element={<NewBlog/>}/>
            <Route path="oldblog" element={<OldBlog />} />
            <Route path="*" element={<NotFound />} />
        </Route>
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

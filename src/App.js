import './App.css';
import ReadBook from './components/ReadBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBooks from './components/AddBooks';
import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadBook />} />
          <Route path="/adminpage" element={<AddBooks />} />
          <Route path="/users/CreateBook" element={<CreateBook />} />
          <Route path="/users/editbook/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
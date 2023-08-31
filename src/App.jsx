import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Todolist from './todolist';
import Home2 from './home2';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

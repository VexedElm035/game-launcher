import {Route, Routes} from 'react-router-dom';
import { Home, Settings } from '../pages/';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default Router
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Electric from '../routes/Electric';
import Womenclothes from '../routes/Womenclothes';
import Sports from '../routes/Sports';
import Fashion from '../routes/Fashion';
import Layout from './Layout';
import Ethnic from '../routes/Ethnic';
import Traditional from '../routes/Traditional';
import Western from '../routes/Western';
import Household from '../routes/Household';
import Office from '../routes/Office';
import Menclothes from '../routes/Menclothes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Electric" element={<Electric />} />
          <Route path="Fashion" element={<Fashion />} />
          <Route path="Menclothes" element={<Menclothes />} />
          <Route path="Womenclothes" element={<Womenclothes />} />
          <Route path="Ethnic" element={<Ethnic />} />
          <Route path="Traditional" element={<Traditional />} />
          <Route path="Western" element={<Western />} />
          <Route path="Sports" element={<Sports />} />
          <Route path="Household" element={<Household />} />
          <Route path="Office" element={<Office />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

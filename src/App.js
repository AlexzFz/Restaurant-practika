import { Routes, Route} from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/menu";
import { Privacy } from "./Pages/privacyPolicy";
import { Reservation } from "./Pages/reservation";
import { Layout } from "./Сomponent/layout";
import { NotFound } from "./Pages/notFound";
import { AboutUs } from './Pages/AboutUs';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/reservation" element={<Reservation />}/>
        <Route path="/privacyPolicy" element={<Privacy />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;

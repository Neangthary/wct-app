import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/home';
import EventDetail from './pages/Detail';
import Test from './pages/test';


function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Test /> */}
      <EventDetail />
      {/* <Hero/> */}
      <Footer/>
    </div>
  );
}

export default Home;

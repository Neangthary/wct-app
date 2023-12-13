import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/home';
import EventDetail from './pages/Detail';


function Home() {
  return (
    <div>
      <Navbar/>
      <EventDetail />
      {/* <Hero/> */}
      <Footer/>
    </div>
  );
}

export default Home;

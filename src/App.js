import './App.css';
import{AboutUs,Header,JoinNow,SayAbout} from './container';
import{Navbar,Footer} from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SayAbout />
      <JoinNow />
      <Footer />
    </div>
  );
}

export default App;

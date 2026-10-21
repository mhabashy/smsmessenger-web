import './main.css';
import Landing from './components/Landing';
import Features from './components/Features';
import About from './components/About';
import Price from './components/Price';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Landing />
      <Features />
      <About />
      <Price />
      <Footer />
    </main>
  );
}


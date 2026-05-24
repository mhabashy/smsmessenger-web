import './main.css';
import Landing from "./components/Landing";
import Features from './components/Features';
import About from './components/About';
import Price from './components/Price';
import Footer from './components/Footer';
import { Divider, Flex } from '@mantine/core';

export default function HomePage() {
  return <Flex direction="column">
    <Landing />
    <Divider />
    <Features />
    <Divider />
    <About />
    <Divider />
    <Price />
    <Footer />
  </Flex>;
}

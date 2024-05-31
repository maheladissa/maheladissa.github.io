import Header from './components/Header';
import {useState} from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {

    const [darkMode, setDarkMode] = useState(false);

  return (
      <div className={darkMode && "dark"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <main className={"bg-white dark:bg-gray-900 text-gray-900 dark:text-white"}>
                <Hero />
                <Services />
                <Portfolio />
                <Blog />
                {/*<Contact />*/}
                <Footer />
          </main>
      </div>
  );
}

export default App;

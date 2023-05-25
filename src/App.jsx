import { Suspense } from 'react';
import Main from './sections/Main';
import SideCard from './sections/SideCard';
import Projects from './sections/Projects';
import Services from './sections/Services';
import ComingSoon from './sections/ComingSoon';
import Contact from './sections/Contact';
import Presentation from './components/Presentation';
import Loading from './components/Loading';

function App() {

  return (
    <Suspense fallback={<Loading/>}>
      <div className="bg-[url('./img/bg_main.jpg')] bg-cover bg-center">
        <main className="grid grid-cols-12 grid-rows-6 gap-4 h-screen overflow-hidden p-5 cursor-default backdrop-blur backdrop-brightness-[.4] text-white">
          <Presentation/>
          <SideCard classes="col-span-3 row-span-4 bg-violet-400"/>
          <Main classes="col-span-3 row-span-2 bg-sky-400"/>
          <Projects classes="col-span-3 row-span-2 bg-amber-400"/>
          <Services classes="col-span-3 row-span-4 bg-red-400"/>
          <ComingSoon classes="col-span-6 row-span-2 bg-lime-400"/>
          <Contact classes="col-span-12 bg-fuchsia-400"/>
        </main>
      </div>
    </Suspense>
  )
}

export default App

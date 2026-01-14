import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { useAnimationControls } from "motion/react";

function App() {
  const textControls = useAnimationControls();
  const imageControls = useAnimationControls();
  const servicesControls = useAnimationControls();

  useEffect(() => {
    async function sequence() {
      await textControls.start("show");
      await imageControls.start("show");
      await servicesControls.start("show");
    }
    sequence();
  }, [imageControls, servicesControls, textControls]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full px-6">
        <Header />
        <Hero textControls={textControls} imageControls={imageControls} />
        <Services controls={servicesControls} />
      </div>
    </div>
  );
}

export default App;

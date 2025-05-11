import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StoreFooter from "./components/StoreFooter"
import ProductCardCase from "./components/Product Card Case";
import LontarSugar from "./components/Lontar Sugar";
import WhyYavaGranola from "./components/Why Yava Granola/WhyYavaGranola";
import ArticleList from "./components/Article Gallery";
import Footer from "./components/Footer";
import Slider from "./components/Article Gallery";
import ArticleGallery from "./components/Article Gallery/ArticleGallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StoreFooter />
      <LontarSugar />
      <WhyYavaGranola />
      <ProductCardCase />
      <ArticleGallery />
      <Footer />
    </>
  );
}
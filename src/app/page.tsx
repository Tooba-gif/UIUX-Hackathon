import Image from "next/image";
import Main from "./components/main";
import Header from "./components/header";
import FeatureCars from "./components/featurecars";
import Product from "./components/product";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <FeatureCars/>
      <Product/>
     </div>

  )
}
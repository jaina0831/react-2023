import Header from "../components/Header"
import Image from "../components/Image"
import Description from "../components/Description"
import Footer from "../components/Footer"
// import images from "../json/images.json"
import { useImages } from "../react-query";
function Home() {

    const { data, isLoading } = useImages();
  const images = data || [];

    return (
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                titie="photoweb"
                slogan="K's Web"
            />
            <Image
                images={images}
                isLoading={isLoading}
                className="layoutImage"
            />
            <Description className="layoutDescription" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;
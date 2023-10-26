import Navbar from "../row/navbar";
import Banner from '../row/banner'
import Service from '../row/service'
import About from '../row/about'
import Testimonialts from '../row/testimonialts'
import Social from '../row/Social'
import Footer from '../row/footer'
function HomePage(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <Service/>
            <About/>
            <Testimonialts/>
            <Social/>
            <Footer/>
        </div>
    )
}

export default HomePage;
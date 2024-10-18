import { Testing } from "../test";
import NavBAr from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen  bg-Background">
            <NavBAr />
        <main className="flex-grow flex flex-col justify-center items-center  bg-Background">
            <Testing />
            <h1>Home Page</h1>
            <Footer />
            </main>
        </div>
    );
}
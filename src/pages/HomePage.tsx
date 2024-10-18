import { Testing } from "../test";
import Footer from "../Components/Footer";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen  bg-Background">
        <main className="flex-grow flex flex-col justify-center items-center  bg-Background">
            <Testing />
            <h1>Home Page</h1>
            <Footer />
            </main>
        </div>
    );
}
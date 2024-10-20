import { Link } from "react-router-dom";
import Search from "./Search";
import CreateEvent from "./CreateEvent";


const NavBAr = () => {

    return (
        <>
            <div className="flex items-center justify-between border-2 flex-wrap bg-Primary p-4 rounded-lg m-3">
                <div><Link to="/"><img src="/logo.png" alt="logo" /></Link></div>
                <Search />
                <CreateEvent />
            </div>
        </>
    )
}

export default NavBAr;
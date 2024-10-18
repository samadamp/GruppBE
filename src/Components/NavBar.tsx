import { Link } from "react-router-dom";


const NavBAr = () => {

    return (
        <>
        <div className="flex items-center justify-between bg-Primary p-4 rounded-b-xl ">
        #SearchComponent#
        <Link to ="/">{<h1 className="text-4xl ml-96">Event Planer</h1>}</Link>
        <div className="mr-9">
        </div>
        
        <div className="text-3xl">+ Create Event</div> 
        
        </div>
        </>
    )
}

export default NavBAr;
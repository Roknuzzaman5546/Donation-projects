import { Link } from "react-router-dom";

const Erroreelement = () => {
    return (
        <div>
            <div className=" text-center mt-40 space-y-2">
            <h2 className=" text-3xl font-bold">This page is not found</h2>
            <h3>Its 404 not found</h3>
            <Link to="/"> 
             <button className="btn">Go Homr</button>
            </Link>
            </div>            
        </div>
    );
};

export default Erroreelement;
import { useEffect, useState } from "react";
import Donatdetails from "../Donatdetails/Donatdetails";

const Homeall = () => {
    const [donations, setdoations] = useState([]);

    useEffect(() =>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setdoations(data))
    },[])
    return (
        <div>
            <div className="grid md:grid-cols-4 gap-3 w-11/12 mx-auto">
                {
                    donations.map(donate => <Donatdetails key={donate.id} donate={donate}></Donatdetails>)
                }
            </div>
            
        </div>
    );
};

export default Homeall;
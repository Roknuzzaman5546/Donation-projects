import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemtoLocalstorage } from "../../Localstorange/localstorange";
import Singledonat from "../Singledonat/Singledonat";

const Donation = () => {
    const donats = useLoaderData();
    const [donatsfile, setdonatsfile] = useState([]);
    const [seeallbtn, setseeallbtn] = useState([4]);

    useEffect(() =>{
        const getdonatinstorage = getItemtoLocalstorage(); 
        if(donats.length > 0){
            const applydonat = []
            for(const id in getdonatinstorage){
                const finddonatId = donats.find(donat => donat.id == id);
                if(finddonatId){
                    applydonat.push(finddonatId)
                }
            }
            setdonatsfile(applydonat);
        }
    },[donats])

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-3 w-11/12 mx-auto mt-20">
                {
                    donatsfile.slice(0, seeallbtn).map(don => <Singledonat key={don.id} don={don}></Singledonat>)
                }
            </div>
            <div className={donatsfile.length < 5 ? 'hidden' : "flex justify-center my-5"}>
            <button onClick={() => setseeallbtn(donatsfile.length)}
            className="btn btn-primary" >{seeallbtn.length  <= 5 ? 'Show all' : 'Show less' }</button>
            </div>
        </div>
    );
};

export default Donation;
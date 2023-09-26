import Donatdetails from "../Donatdetails/Donatdetails";
import { useEffect, useState } from 'react';
const Banner = () => {
    const [donations, setdoations] = useState([]);
    // const [searchdonat, setsearchdonat] = useState([]);


    const handlesearch = () =>{
        const inputvalue = document.getElementById('src-input').value;
        if(inputvalue === 'Health'){
                const helathfilter = donations.filter(health => health.button == 'Health')
                setdoations(helathfilter);
        }
        else if(inputvalue === 'Education'){
            const educationfilter = donations.filter(education => education.button == 'Education')
            setdoations(educationfilter);
        }
        else if(inputvalue === 'Clothing'){
            const clothingfilter = donations.filter(education => education.button == 'Clothing')
            setdoations(clothingfilter);
        }
        else if(inputvalue === 'Food'){
            const foodfilter = donations.filter(food => food.button == 'Food')
            setdoations(foodfilter);
        }
        document.getElementById('src-input').value = "";
    }

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setdoations(data))
    }, [])
    return (
        <div>
            <div className=" my-8">
                <img className="relative opacity-5" src="./assest/cover (1).jpg" alt="" />
                <div className=" absolute text-center md:top-60 md:left-64 top-28">
                    <h2 className="text-center text-3xl font-bold text-black">I Grow By
                        Helping People In Need</h2>
                    <input className=" p-3 rounded-xl bg-white mt-2" placeholder="search here..." type="text" name="text" id="src-input" />
                    <button className="btn btn-primary" onClick={() => handlesearch()}>
                        Search
                    </button>
                </div>
            </div>
            <div className="grid md:grid-cols-4 gap-3 w-11/12 mx-auto">
                {
                    donations.map(donate => <Donatdetails key={donate.id} donate={donate}></Donatdetails>)
                }
            </div>
        </div>
    );
};

export default Banner;
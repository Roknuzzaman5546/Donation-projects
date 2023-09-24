import { useLoaderData } from "react-router-dom";
import Donatdetails from "../Donatdetails/Donatdetails";

const Home = () => {
    const donations = useLoaderData();
    return (
        <div>
            <div className=" mt-5">
                <img className="relative opacity-5" src="../../../public/assest/cover.png" alt="" />
                <div className=" absolute text-center top-60 left-64">
                    <h2 className="text-center text-3xl font-bold text-red-400">I Grow By Helping People In Need</h2>
                    <input className=" p-3 rounded-xl bg-white mt-2" placeholder="search here..." type="text" name="text" id="src-input" />
                    <button className="btn btn-primary">
                        Search
                        </button>
                </div>
            </div>

            <div className=" md:grid md: grid-cols-4 md:gap-2">
                {
                    donations.map(donate => <Donatdetails key={donate.id} donate={donate}></Donatdetails>)
                }
            </div>
        </div>
    );
};

export default Home;
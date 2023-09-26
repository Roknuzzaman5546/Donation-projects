import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStorage } from "../../Localstorange/localstorange";

const Donat = () => {
    const donats = useLoaderData();
    const { id } = useParams();
    const newid = parseInt(id);
    const donat = donats.find(donat => donat.id === newid)

    const handledonate = () => {
        saveLocalStorage(newid);
        toast('Added succesfully')
    }

    return (
        <div className=" w-11/12 mx-auto mt-5">

            <div className=" relative">
                <img className="w-full" src={donat.img} alt="" />
                <div style={{backgroundColor: 'rgba(11, 11, 11, 0.50)' }} className=" w-full py-2 pl-4 absolute bottom-0 left-0">
                    <button
                        onClick={() => handledonate()}
                        style={{ backgroundColor:donat.btnbg}}
                        className={`py-2 px-3 text-white rounded-sm`}>Donate $290</button>
                </div>
            </div>
            <div>
                <h3 className=" text-3xl my-2 font-bold text-black">{donat.category}</h3>
                <p className=" text-black">{donat.discript}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Donat;
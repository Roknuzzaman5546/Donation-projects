import { NavLink } from "react-router-dom";

const Donatdetails = ({ donate }) => {
    const { id, img, category, button, color, bgColor, btnbg} = donate;
    console.log(bgColor)
    return (
        <div>
            <NavLink to={`/donat/${id}`}>
            <div className={`rounded-lg text-${color} bg-${bgColor} shadow-xl h-64`}>
                <figure><img src={img} alt="Shoes" /></figure>
                <div className={` p-4`}>
                    <div className="">
                        <button className={`bg-${btnbg} py-1 px-2 rounded-md`}>{button}</button>
                    </div>
                    <h2 className="card-title">{category}</h2>
                </div>
            </div>
            </NavLink>
        </div>
    );
};

export default Donatdetails;
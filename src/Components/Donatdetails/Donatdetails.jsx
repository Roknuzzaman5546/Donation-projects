import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const Donatdetails = ({ donate }) => {
    const { id, img, category, button, color, bgColor, btnbg } = donate;
    return (
        <div>
            <NavLink to={`/donat/${id}`}>
                <div style={{backgroundColor: bgColor, color: color}} className="card shadow-xl h-80">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-start">
                            <button style={{backgroundColor: btnbg}} className=" px-2 py-1 rounded-md">{button}</button>
                        </div>
                        <h2 className="card-title">{category}</h2>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};
Donatdetails.propTypes = {
    donate: PropTypes.object.isRequired
}

export default Donatdetails;
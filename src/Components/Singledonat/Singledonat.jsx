import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Singledonat = ({ don }) => {
    const { id, img, category, button, color, bgColor, btnbg } = don;

    return (
        <div>
            <div style={{ backgroundColor: bgColor, color: color }} className={`flex gap-3 rounded-lg shadow-xl space-y-2`}>
                <img className="" src={img} alt="" />
                <div>
                    <button style={{ backgroundColor: btnbg }} className={`px-2 py-1 rounded-md`}>{button}</button>
                    <h3 className={`text-2xl font-bold`}>{category}</h3>
                    <h3>$290.00</h3>
                    <Link to={`/donat/${id}`}>
                        <button style={{ backgroundColor: color }} className={` py-2 px-3 rounded-md text-white`}>View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
Singledonat.propTypes = {
    don: PropTypes.object.isRequired
}
export default Singledonat;
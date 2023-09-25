const Singledonat = ({don}) => {
    const {img, category, button, color, bgColor, btnbg} = don;

    return (
        <div>
            <div className={` flex gap-2 h-60 rounded-lg text-${color} bg-${bgColor} shadow-xl h-64`}>
                <img className="" src={img} alt="" />
                <div>
                    <h3 className={`text-${btnbg} py-1 px-2 rounded-md`}>{button}</h3>
                    <h3 className={`text-${color} text-2xl font-bold`}>{category}</h3>
                    <h3>$290.00</h3>
                    <button className={`bg-${color} py-2 px-3 rounded-md text-white`}>View details</button>
                </div>
            </div>
        </div>
    );
};

export default Singledonat;
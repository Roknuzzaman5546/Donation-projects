const Donatdetails = ({ donate }) => {
    const { id, img, category, button, color, bgcolor } = donate;
    return (
        <div>
            <div className="rounded-lg  bg-blue-300 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="text-black">
                    <div className="">
                        <button className="">{button}</button>
                    </div>
                    <h2 className="card-title">{category}</h2>
                </div>
            </div>
        </div>
    );
};

export default Donatdetails;
const Banner = () => {
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
        </div>
    );
};

export default Banner;
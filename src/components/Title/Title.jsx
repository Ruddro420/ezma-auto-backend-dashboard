
// eslint-disable-next-line react/prop-types
const Title = ({title}) => {
    return (
        <div>
            {/* Title Start */}
            <div className="mt-4 mx-2 md:flex justify-between items-center">
                <div>
                    <h1 className="text-2xl mt-1 font-medium"> {title}</h1>
                </div>
                <div className="md:pt-0 pt-4">
                    <button
                        className="px-4 py-2 border text-sm mx-1 border-transparent rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-green active:bg-green-500 transition duration-150 ease-in-out inline-flex items-center"
                    >
                        <i className="bx bx-world text-white mr-2 text-base"></i>
                        Publish {title}
                    </button>
                    <button
                        className="px-4 py-2 border text-sm mx-1 rounded bg-white hover:bg-gray-100 focus:outline-none focus:shadow-outline-white active:bg-white transition duration-150 ease-in-out inline-flex items-center"
                    >
                        <i className="bx bx-plus text-gray-700 mr-2 text-base"></i>
                        Create {title}
                    </button>
                </div>
            </div>
            {/*  Title End */}
        </div>
    );
};

export default Title;
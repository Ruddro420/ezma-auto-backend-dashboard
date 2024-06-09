const CreateCar = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="bg-white border rounded mx-2 my-4">
                    <div className="py-3 px-4 border-b flex justify-between items-center">
                        <h2 className="text-lg font-medium text-gray-700">Car Details</h2>
                    </div>
                    <div className="p-3 text-gray-600">
                        <form>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/3 p-2">
                                    <label className="block mb-1.5">Car Name</label>
                                    <input
                                        className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded py-1.5 px-3"
                                        type="text"
                                        placeholder="Enter car name ..."
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label className="block mb-1.5">Capacity</label>
                                    <input
                                        className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded py-1.5 px-3"
                                        type="number"
                                        placeholder="Enter capacity ..."
                                        required
                                    />
                                   {/*  <span className="text-sm text-red-600">Capacity is required</span> */}
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label className="block mb-1.5">Car Condition</label>
                                    <input
                                        className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded py-1.5 px-3"
                                        type="text"
                                        placeholder="Enter car condition ..."
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label className="block mb-1.5">Car Limit</label>
                                    <input
                                        className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded py-1.5 px-3"
                                        type="number"
                                        placeholder="Enter car limit ..."
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label className="block mb-1.5">Car Owner</label>
                                    <input
                                        className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded py-1.5 px-3"
                                        type="text"
                                        placeholder="Enter car owner ..."
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label className="block mb-1.5">Driver</label>
                                    <select
                                        className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded py-1.5 px-3"
                                        required
                                    >
                                        <option value="" disabled>Select driver...</option>
                                        <option value="driver1">Driver 1</option>
                                        <option value="driver2">Driver 2</option>
                                        <option value="driver3">Driver 3</option>
                                    </select>
                                </div>
                                <div className="w-full p-2">
                                    <label className="block mb-1.5">Features</label>
                                    <div className="flex flex-wrap gap-4">
                                        <div>
                                            <input type="checkbox" id="wifi" name="wifi" value="wifi" required />
                                            <label className="ml-2" htmlFor="wifi">Wifi</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="roof" name="roof" value="roof" required />
                                            <label  className="ml-2" htmlFor="roof">Roof</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="camera" name="camera" value="camera" required />
                                            <label  className="ml-2" htmlFor="camera">Camera</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="driver" name="driver" value="driver" required />
                                            <label  className="ml-2" htmlFor="driver">Driver</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label className="block mb-1.5">Car Image</label>
                                    <input
                                        className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded py-1.5 px-3"
                                        type="file"
                                        accept="image/*"
                                        required
                                    />
                                </div>
                                <div className="w-full p-2">
                                    <button
                                        className="px-4 py-2 text-sm border border-transparent rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-green active:bg-green-500 transition duration-150 ease-in-out inline-flex items-center"
                                    >
                                        Add Car
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCar;

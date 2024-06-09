
const Divider = () => {
    return (
        <div className="bg-white border rounded mx-2 my-4">
            <div className="py-3 px-4 border-b flex justify-between items-center">
                <div className="flex items-center">
                    <div className="border-b border-gray-400 flex-grow mr-4"></div>
                    <h2 className="text-lg font-medium text-gray-700">Show Cars</h2>
                    <div className="border-b border-gray-400 flex-grow ml-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Divider;

const FeedBack = () => {
    return (
        <div className="lg:w-1/4 md:w-1/2 w-full">
                  <div
                    className="bg-white my-2 mx-2 border rounded-md flex-col flex h-40"
                  >
                    <div className="px-4 py-3 flex-auto">
                      <div className="pb-0 flex justify-between">
                        <div className="text-gray-600 text-sm">Feedback</div>
                        <div className="relative inline-block text-left text-sm">
                          <a
                            href=""
                            className="inline-flex items-center text-gray-600 dropdown-toggle"
                            data-dropdown="FeedbackDropdown"
                          >
                            <span>Last 30 days </span>
                            <i
                              className="inline-flex items-center bx bx-chevron-down ml-1"
                            ></i>
                          </a>

                          <div
                            className="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden"
                            id="FeedbackDropdown"
                          >
                            <div
                              className="rounded-md bg-white shadow-xs"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <div className="py-1">
                                <a
                                  href="#"
                                  className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                >Today</a
                                >

                                <a
                                  href="#"
                                  className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                >Last 7 days</a
                                >

                                <a
                                  href="#"
                                  className="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                >Last 30 days</a
                                >

                                <a
                                  href="#"
                                  className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                >Last 60 days</a
                                >

                                <a
                                  href="#"
                                  className="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                >Last 1 Year</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-3xl inline font-medium text-gray-700">456</div>
                    </div>
                    <div className="px-4 pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="text-gray-700 text-sm">
                          <b>83%</b> Good Feedback
                        </div>
                        <div>
                          <span className="text-sm text-green-500"
                          >2.75% <i className="bx bx-up-arrow-alt"></i
                          ></span>
                        </div>
                      </div>
                      <div className="px-auto bg-gray-200">
                        <div className="bg-green-500 py-1" style={{ width: "83%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
    );
};

export default FeedBack;
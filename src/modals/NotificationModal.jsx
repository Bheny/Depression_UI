import img from "../assets/pic.jpeg";

const NotificationModal = () => {
    return (
        <>
            <div className="bg-white -mx-24  p-4 absolute rounded shadow-xl">
                <div className="w-full">
                  <div className="text-slate-600 font-bold">
                    Notifications{" "}
                    <span className="bg-red-500 rounded-full px-2 text-white ">
                      5
                    </span>
                  </div>
                  <div className="">
                    <ul>
                      <li>
                        <div className="bg-wyellow-100 py-4 flex">
                          <div className="w-1/4  p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-8 h-8"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="p-2 flex gap-1">
                              <img src={img} className="rounded-full h-8 w-8" />
                              <img src={img} className="rounded-full h-8 w-8" />
                              <img src={img} className="rounded-full h-8 w-8" />
                            </div>
                            <div className="text-sm">
                              New Mission for all{" "}
                              <b className="font-bold">#rank-c</b> members
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="bg-wyellow-100 py-4 flex gap-2">
                          <div className="w-1/4  p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                              />
                            </svg>
                          </div>
                          <div className="">
                            
                            <div className="text-sm">
                              New Event Created and scheduled !!!
                              
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        </>
    )
}

export default NotificationModal;
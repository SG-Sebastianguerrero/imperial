import "../default.css";
import "./MedicalHistory.css";
import Navbar from "../../components/Navbar/Navbar";
import { Component } from "react";

class MedicalHistory extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar></Navbar>
          <div className="internalSection space">
            <label className="styleTitle fijar text">Historia Clínica</label>
            <div className="container">
              <div className="wrapper fijar">
                <div className="element1">Fecha</div>
                <div className="element2">Eventos</div>
              </div>
              <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-stone-50 col-start-2 col-end-3 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-slate-800 mb-1">08</h3>
                    <p className="leading-tight text-justify text-slate-400">
                      Lunes
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-3 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-stone-300 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-neutral-800 shadow"></div>
                  </div>
                  <div className="bg-stone-50 col-start-4 col-end-8 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-bold text-slate-800 mb-1">
                      Examen Oftalmológico
                    </h3>
                    <p className="leading-tight text-justify text-slate-400">
                      08:15 - 10:30
                    </p>
                    <p className="leading-tight text-justify text-slate-600">
                      Se realiza revisión Oftalmológica por parte del
                      profesional Reinaldo Caicedo
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-stone-50 col-start-2 col-end-3 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-slate-800 mb-1">09</h3>
                    <p className="leading-tight text-justify text-slate-400">
                      Martes
                    </p>
                  </div>
                </div>
                <div className="flex md:contents">
                  <div className="col-start-3 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-stone-300 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-neutral-800 shadow"></div>
                  </div>
                  <div className="bg-stone-50 col-start-4 col-end-8 p-4 rounded-xl my-4 mr-auto shadow-md w-80">
                    <h3 className="font-semibold text-slate-800 mb-1">
                      Cirugía
                    </h3>
                    <p className="leading-tight text-justify text-slate-400">
                      10:00 - 11:30
                    </p>
                  </div>
                  <div className="col-start-3 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-stone-300 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-neutral-800 shadow"></div>
                  </div>
                  <div className="bg-stone-50 col-start-4 col-end-8 p-4 rounded-xl my-4 mr-auto shadow-md w-80">
                    <h3 className="font-semibold text-slate-800 mb-1">
                      En urgencias
                    </h3>
                    <p className="leading-tight text-justify text-slate-400">
                      13:00 - 15:30
                    </p>
                  </div>
                  <div className="col-start-3 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-stone-300 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-neutral-800 shadow"></div>
                  </div>
                  <div className="bg-stone-50 col-start-4 col-end-8 p-4 rounded-xl my-4 mr-auto shadow-md w-80">
                    <h3 className="font-semibold text-slate-800 mb-1">
                      En camilla 127 urgencias
                    </h3>
                    <p className="leading-tight text-justify text-slate-400">
                      16:00 - 17:00
                    </p>
                  </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-stone-50 col-start-2 col-end-3 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-slate-800 mb-1">10</h3>
                    <p className="leading-tight text-justify text-slate-400">
                      Jueves
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-3 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-stone-300 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-neutral-800 shadow"></div>
                  </div>
                  <div className="bg-stone-50 col-start-4 col-end-8 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-semibold text-slate-800 mb-1">
                      En cuidados generales
                    </h3>
                    <p className="leading-tight text-justify text-slate-400">
                      08:15 - 10:30
                    </p>
                    <p className="leading-tight text-justify text-slate-600">
                      Se realiza revisión Oftalmológica por parte del
                      profesional Reinaldo Caicedo
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrapperNav">
                <div className="elementNav">
                  <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a
                          href="/dashboard"
                          className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span className="sr-only">Previous</span>
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dashboard"
                          className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dashboard"
                          className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dashboard"
                          aria-current="page"
                          className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dashboard"
                          className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dashboard"
                          className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dashboard"
                          className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <span class="sr-only">Next</span>
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MedicalHistory;

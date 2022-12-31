import React from "react";
import airport from "../../pages/airport";
import AddAirport from "./addAirport";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

const Airport = () => {
    // const [modal, setModal] = useState(false);
    
    return (
        <main className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Airport</h1>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
                <button className="inline-flex px-5 py-3 text-white bg-blue-300 hover:blue-300 focus:bg-blue-300 rounded-md ml-6 mb-3" onClick={() => setModal(true)}>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    Creat New Airport
                    {/* <AddAirport modal={modal} setModal={setModal} /> */}
                </button>
            </div>
            <div className="table">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">iata</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{airport.id}</td>
                            <td>{airport.iata}</td>
                            <td>{airport.name}</td>
                            <td>{airport.address}</td>
                            <td><BsPencilFill /></td>
                            <td><BsTrashFill /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </main>
    );
};
export default Airport;
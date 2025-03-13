import React from "react";

function App() {
  const today = new Date();

  return (
    <>
      {/* Title Section */}
      <div className="text-center underline text-4xl bg-slate-600 text-white font-extrabold py-4">
        BA No.- 00X7950H
      </div>

      {/* Table Section */}
      <div className="flex justify-center mt-5 overflow-x-auto">
        <table className="border-collapse border border-gray-700 shadow-lg w-3/4 bg-white">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="font-bold text-xl px-6 py-3 border border-gray-700">Serial No.</th>
              <th className="font-bold text-xl px-6 py-3 border border-gray-700">Nomenclature</th>
              <th className="font-bold text-xl px-6 py-3 border border-gray-700">Done</th>
              <th className="font-bold text-xl px-6 py-3 border border-gray-700">Due</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {[
              { id: 1, name: "TM-1", done: "11/09/2024", due: "11/03/2025" },
              { id: 2, name: "TM-2", done: "10/03/2024", due: "10/03/2025" },
              { id: 3, name: "ENG-OIL", done: "19/06/2024", due: "19/06/2025" },
              { id: 4, name: "TXN-OIL", done: "09/02/2023", due: "09/02/2025" },
              { id: 5, name: "STRIP-INSP", done: "19/03/2021", due: "19/03/2025" },
              { id: 6, name: "STAB-OIL", done: "18/02/2020", due: "18/02/2025" },
            ].map((item, index) => {
              const dueDate = new Date(item.due.split("/").reverse().join("-"));
              const isOverdue = dueDate < today;

              return (
                <tr key={item.id} className={`text-lg border border-gray-500 ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}>
                  <td className="px-6 py-3 border border-gray-700 text-center">{item.id}</td>
                  <td className="px-6 py-3 border border-gray-700">{item.name}</td>
                  <td className="px-6 py-3 border border-gray-700 text-center">{item.done}</td>
                  <td className={`px-6 py-3 border border-gray-700 text-center ${isOverdue ? "text-red-600 font-bold" : ""}`}>
                    {item.due}
                  </td>
                </tr>
              );
            })}

            {/* Extra Data Rows */}
            {[
              { id: 7, label: "EFC", value: "40.125" },
              { id: 8, label: "LAST DATE OF FIRE", value: "10/01/2010" },
              { id: 9, label: "BTY ISSUE AT", value: "15-02-2025" },
              { id: 10, label: "MAJOR DEFECT", value: "-NIL-" },
              { id: 11, label: "DEMAND", value: "NEW ENG.FITTED (63 CAV)" },
            ].map((item, index) => (
              <tr key={item.id} className={`text-lg border border-gray-500 ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}>
                <td className="px-6 py-3 border border-gray-700 text-center">{item.id}</td>
                <td className="px-6 py-3 border border-gray-700" colSpan="3">
                  <span className="font-semibold">{item.label}:</span> {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

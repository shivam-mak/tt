import React from "react";

function App() {
  const today = new Date();

  return (
    <>
      {/* Title Section */}
      <div className="text-center underline text-4xl bg-slate-600 text-white font-extrabold py-4">
        BA No.- 81X2815A
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
              { id: 1, name: "TM-1", done: "16/11/2024", due: "16/05/2025" },
              { id: 2, name: "TM-2", done: "28/11/2024", due: "28/11/2025" },
              { id: 3, name: "ENG-OIL", done: "16/11/2023", due: "16/11/2025" },
              { id: 4, name: "TXN-OIL", done: "23/12/2024", due: "23/12/2026" },
              { id: 5, name: "STRIP-INSP", done: "13/07/2021", due: "13/07/2025" },
              { id: 6, name: "STAB-OIL", done: "24/02/2024", due: "24/02/2029" },
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
              { id: 7, label: "EFC", value: "161.1025" },
              { id: 8, label: "LAST DATE OF FIRE", value: "09/03/2024" },
              { id: 9, label: "BTY ISSUE AT", value: "18-01-2025" },
              { id: 10, label: "MAJOR DEFECT", value: "-NIL-" },
              { id: 11, label: "DEMAND", value: "-NIL-" },
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

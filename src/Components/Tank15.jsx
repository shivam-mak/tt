import React from "react";

function App() {
  const today = new Date();

  return (
    <>
      {/* Title Section */}
      <div className="text-center underline text-4xl bg-slate-600 text-white font-extrabold py-4">
        BA No.- 83X2869Y
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
              { id: 1, name: "TM-1", done: "02/12/2024", due: "02/06/2025" },
              { id: 2, name: "TM-2", done: "26/04/2024", due: "26/04/2025" },
              { id: 3, name: "ENG-OIL", done: "02/2025", due: "02/2026" },
              { id: 4, name: "TXN-OIL", done: "21/04/2023", due: "21/04/2025" },
              { id: 5, name: "STRIP-INSP", done: "29/10/2021", due: "29/10/2025" },
              { id: 6, name: "STAB-OIL", done: "11/02/2019", due: "11/02/2024" },
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
              { id: 7, label: "EFC", value: "126.6925" },
              { id: 8, label: "LAST DATE OF FIRE", value: "19/09/2024" },
              { id: 9, label: "BTY ISSUE AT", value: "05-08-2024" },
              { id: 10, label: "MAJOR DEFECT", value: "-NIL-" },
              { id: 11, label: "DEMAND", value: "ENG. CANBLISZED FROM BOH TANK" },
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

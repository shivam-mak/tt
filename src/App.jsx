import React from 'react';

function App() {
  return (
    <>  
      {/* Title Section */}
      <div className='text-center underline text-4xl bg-slate-600 text-white font-extrabold py-4'>
        BA No.- 83X2880A
      </div>

      {/* Table Section */}
      <div className="flex justify-center mt-5">
        <table className="border-collapse border border-gray-700 shadow-lg w-3/4 bg-white">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className='font-bold text-xl px-6 py-3 border border-gray-700'>Serial No.</th>
              <th className='font-bold text-xl px-6 py-3 border border-gray-700'>Nomenclature</th>
              <th className='font-bold text-xl px-6 py-3 border border-gray-700'>Done</th>
              <th className='font-bold text-xl px-6 py-3 border border-gray-700'>Due</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className='text-lg border border-gray-500 bg-gray-100'>
              <td className='px-6 py-3 border border-gray-700 text-center'>1</td>
              <td className='px-6 py-3 border border-gray-700'>TM-1</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>11/01/2025</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>11/07/2025</td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-200'>
              <td className='px-6 py-3 border border-gray-700 text-center'>2</td>
              <td className='px-6 py-3 border border-gray-700'>TM-2</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>24/06/2024</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>24/06/2025</td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-100'>
              <td className='px-6 py-3 border border-gray-700 text-center'>3</td>
              <td className='px-6 py-3 border border-gray-700'>ENG-OIL</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>06/09/2024</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>06/09/2025</td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-200'>
              <td className='px-6 py-3 border border-gray-700 text-center'>4</td>
              <td className='px-6 py-3 border border-gray-700'>TXN-OIL</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>17/07/2023</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>17/07/2025</td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-100'>
              <td className='px-6 py-3 border border-gray-700 text-center'>5</td>
              <td className='px-6 py-3 border border-gray-700'>STRIP-INSP</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>01/06/2022</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>01/06/2026</td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-200'>
              <td className='px-6 py-3 border border-gray-700 text-center'>6</td>
              <td className='px-6 py-3 border border-gray-700'>STAB-OIL</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>12/02/2019</td>
              <td className='px-6 py-3 border border-gray-700 text-center'>12/02/2024</td>
            </tr>

            {/* Combined Row for Additional Data */}
            <tr className='text-lg border border-gray-500 bg-gray-100'>
              <td className='px-6 py-3 border border-gray-700 text-center'>7</td>
              <td className='px-6 py-3 border border-gray-700' colSpan="3">
                <span className="font-semibold">EFC:</span> 185.666
              </td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-200'>
              <td className='px-6 py-3 border border-gray-700 text-center'>8</td>
              <td className='px-6 py-3 border border-gray-700' colSpan="3">
                <span className="font-semibold">LAST DATE OF FIRE:</span> 19/06/2024
              </td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-100'>
              <td className='px-6 py-3 border border-gray-700 text-center'>9</td>
              <td className='px-6 py-3 border border-gray-700' colSpan="3">
                <span className="font-semibold">BTY ISSUE AT:</span> 02-23-2021
              </td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-200'>
              <td className='px-6 py-3 border border-gray-700 text-center'>10</td>
              <td className='px-6 py-3 border border-gray-700' colSpan="3">
                <span className="font-semibold">MAJOR DEFECT:</span> LRF CANVELISE FROM 62P
              </td>
            </tr>
            <tr className='text-lg border border-gray-500 bg-gray-100'>
              <td className='px-6 py-3 border border-gray-700 text-center'>11</td>
              <td className='px-6 py-3 border border-gray-700' colSpan="3">
                <span className="font-semibold">DEMAND:</span> -NIL-
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

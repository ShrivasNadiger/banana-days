
function RightPanel() {
  const predictedDays = 4;

  return (
    <section className="flex flex-col bg-white rounded-xl shadow-md p-6 flex-1">
      <h2 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
        Banana Info
      </h2>

      <div className="flex flex-col gap-3 text-gray-800">
        <p className="text-md">
          <span className="font-semibold">Days Remaining before Rotten: </span>
          <span className="text-red-500 font-bold">{predictedDays} days</span>
        </p>

        <table className="w-full border border-gray-300 rounded-md text-sm text-left shadow-sm">
          <thead>
            <tr className="bg-yellow-200 text-gray-700">
              <th className="px-4 py-2">Day</th>
              <th className="px-4 py-2">Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-yellow-50">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Fresh </td>
            </tr>
            <tr className="hover:bg-yellow-50">
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">Ripe </td>
            </tr>
            <tr className="hover:bg-yellow-50">
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">Overripe </td>
            </tr>
            <tr className="hover:bg-yellow-50">
              <td className="px-4 py-2">4</td>
              <td className="px-4 py-2">Almost Rotten </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RightPanel;

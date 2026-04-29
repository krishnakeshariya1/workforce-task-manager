export const StatCard = ({ title, value }) => {
  return (
    <div className="bg-[#1c1c1c] p-4 rounded-lg text-center">
      <h2 className="text-2xl font-bold text-white">{value}</h2>
      <p className="text-gray-400">{title}</p>
    </div>
  );
}
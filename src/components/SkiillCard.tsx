const SkillCard = ({
  icon,
  name,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  color: string;
}) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300 flex flex-col items-center border-transparent">
      <div className={`text-4xl mb-3 ${color}`}>{icon}</div>
      <p className="text-gray-700 text-sm font-medium">{name}</p>
    </div>
  );
};

export default SkillCard;

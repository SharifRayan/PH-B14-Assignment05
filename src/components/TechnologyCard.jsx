const badgeStyles = {
  Popular: "bg-[#EEF9FF] text-[#27A8E0]",
  Versatile: "bg-[#E9FAF1] text-[#1DB77A]",
  Fast: "bg-[#FFF5E9] text-[#FF8B26]",
  Standard: "bg-[#E9FAF1] text-[#1DB77A]",
  "Top SQL": "bg-[#EEF5FF] text-[#3488ED]",
  Cache: "bg-[#FFF0F0] text-[#F06A62]",
  Ubiquitous: "bg-[#FFF8E8] text-[#E0A622]",
  Essential: "bg-[#EEF9FF] text-[#27A8E0]",
  Robust: "bg-[#EEF9FF] text-[#27A8E0]",
  Modern: "bg-[#E9FBFF] text-[#1BA8C8]",
  Containers: "bg-[#EEF9FF] text-[#27A8E0]",
};

function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <div className="flex min-h-[300px] flex-col rounded-[18px] border border-[#E9EDF3] bg-white p-5 shadow-card">

      {/* Icon and badge */}
      <div className="flex items-center justify-between">
        <img src={technology.icon} alt={technology.name} className="h-8 w-8 object-contain" />

        <span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${badgeStyles[technology.badge] || "bg-gray-100 text-gray-600"}`}>
          {technology.badge}
        </span>
      </div>

      {/* technology Name */}
      <h3 className="mt-4 text-[18px] font-bold text-[#182236]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[60px] text-[12px] leading-6 text-[#8090A8]">
        {technology.description}
      </p>

      {/* Category, difficulty and rating */}
      <div className="mt-3 flex items-center gap-2 text-[10px]">
        <span className="rounded bg-[#F1F4F7] px-2 py-1 font-medium text-[#67758B]">{technology.category}</span>

        <span className="ml-auto text-[#7D899B]">{technology.difficulty}</span>

        <span className="flex items-center gap-1 font-medium text-[#5D687A]">
          <span className="text-[#F7B500]">★</span>{technology.rating}</span>
      </div>

      {/* Add button */}
      <button onClick={() => onAdd(technology)} disabled={isAdded}
        className={`mt-auto h-[38px] w-full rounded-[7px] text-[11px] font-medium ${isAdded? "cursor-not-allowed bg-[#E9EDF2] text-[#98A2B3]"
          : "bg-[#080E1C] text-white hover:bg-[#151D2E]"
          }`}> {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
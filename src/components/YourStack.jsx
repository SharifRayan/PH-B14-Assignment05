function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-[18px] border border-[#E9EDF3] bg-white p-[20px] shadow-card lg:sticky lg:top-[100px]">
      <h2 className="text-[18px] font-bold text-[#182236]">Your Stack</h2>
      <p className="mt-[5px] text-[12px] text-[#91A0B7]">{stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected</p>

      {stack.length === 0 ? (
        <div className="mt-[24px] flex h-[70px] items-center justify-center rounded-[12px] border border-dashed border-[#DDE3EC] text-[12px] text-[#9AA8BC]">Your stack is empty.</div>
      ) : (
        <div className="mt-[18px] space-y-[8px]">
          {stack.map((technology) => (
            <div key={technology.id} className="flex h-[48px] items-center gap-3 rounded-[8px] border border-[#E1E6ED] px-[10px]">
              <img src={technology.icon} alt="" className="h-[28px] w-[28px] object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-[#182236]">{technology.name}</p>
                <p className="text-[8px] text-[#8795AA]">{technology.category}</p>
              </div>
              <button type="button" onClick={() => onRemove(technology)} className="text-[25px] font-light leading-none text-[#9BA7B7]" aria-label={`Remove ${technology.name}`}>×</button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button type="button" onClick={onRemoveAll} className="mt-[48px] h-[34px] w-full rounded-[8px] border border-[#FF9B9B] text-[12px] font-semibold text-[#F04444] hover:bg-[#FFF7F7]">Remove All</button>
      )}
    </aside>
  );
}
export default YourStack;

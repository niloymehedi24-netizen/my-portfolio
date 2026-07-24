export default function HeroStats() {
  const stats = [
    {
      number: "5+",
      label: "Projects",
    },
    {
      number: "15+",
      label: "Technologies",
    },
    {
      number: "100%",
      label: "Responsive",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-400">{item.number}</h3>

          <p className="mt-2 text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

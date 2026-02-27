const partners = [
  { name: 'TechCorp', abbr: 'TC' },
  { name: 'Meridian Group', abbr: 'MG' },
  { name: 'Apex Ventures', abbr: 'AV' },
  { name: 'Solaris HR', abbr: 'SH' },
  { name: 'Pinnacle Co.', abbr: 'PC' },
  { name: 'Vantage Labs', abbr: 'VL' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-slate-50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by Leading Companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2.5 px-6 py-3 bg-white border border-slate-200 rounded-xl opacity-50 hover:opacity-70 transition-opacity grayscale hover:grayscale-0"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-slate-500">{partner.abbr}</span>
              </div>
              <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const keywords = [
  { cn: '政商协同', en: 'Government-Business Synergy' },
  { cn: '资本引入', en: 'Capital Sourcing' },
  { cn: '产业落地', en: 'Industrial Implementation' },
]

export default function MarqueeSection() {
  // 仅 3 个关键词,先重复成一段够宽的基底,再三联以实现无缝循环
  const base = Array.from({ length: 4 }, () => keywords).flat()
  const row = [...base, ...base, ...base]
  return (
    <section className="bg-white pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden border-y border-[rgba(12,12,12,0.12)]">
      <div className="flex items-baseline whitespace-nowrap will-change-transform animate-marquee">
        {row.map((k, i) => (
          <span key={i} className="flex items-baseline">
            <span
              className="cn font-black tracking-tight text-[#0C0C0C]"
              style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}
            >
              {k.cn}
            </span>
            <span className="label-en ml-2 sm:ml-3 text-[0.8rem] sm:text-base">{k.en}</span>
            <span className="mx-6 sm:mx-10 text-[#0C0C0C] opacity-20" style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
              /
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}

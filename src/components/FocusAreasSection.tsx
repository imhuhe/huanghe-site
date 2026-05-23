import FadeIn from './FadeIn'

const areas = [
  {
    cn: '低空经济',
    en: 'Low-Altitude Economy',
    tagline: '政策窗口期，场景丰富，产业链长',
  },
  {
    cn: '化学与生命科学',
    en: 'Chemistry & Life Sciences',
    tagline: '高纯试剂八成靠进口，国产替代空间大',
  },
  {
    cn: 'AI 与智能机器人',
    en: 'AI & Intelligent Robotics',
    tagline: '物理智能正在跨过通用化拐点',
  },
  {
    cn: '算电协同',
    en: 'Compute-Power Synergy',
    tagline: '算力增长的下一道关：能源',
  },
]

export default function FocusAreasSection() {
  return (
    <section
      id="focus"
      className="relative bg-white px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32"
    >
      <FadeIn delay={0} y={40} className="flex flex-col items-center">
        <span className="label-en text-xs sm:text-sm mb-3 sm:mb-4">Focus</span>
        <h2
          className="hero-heading cn font-black leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          关注领域
        </h2>
      </FadeIn>

      <div className="mt-16 sm:mt-20 md:mt-24 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-[rgba(12,12,12,0.12)] border border-[rgba(12,12,12,0.12)]">
        {areas.map((a, i) => (
          <FadeIn
            key={a.cn}
            as="div"
            delay={i * 0.08}
            y={24}
            className="group relative bg-white p-7 sm:p-8 md:p-8 flex flex-col gap-4 sm:gap-5 transition-colors duration-300 hover:bg-[#0C0C0C]"
          >
            <span
              className="font-display font-black text-[#0C0C0C] leading-none transition-colors duration-300 group-hover:text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="mt-auto flex flex-col gap-2">
              <span
                className="cn text-[#0C0C0C] font-medium leading-tight transition-colors duration-300 group-hover:text-white"
                style={{ fontSize: 'clamp(1.1rem, 1.7vw, 1.5rem)' }}
              >
                {a.cn}
              </span>
              {/* EN 标签预留 2 行高度,保证所有 CN 名字水平对齐 */}
              <span className="block min-h-[2.4rem] label-en text-[0.7rem] sm:text-[0.78rem] leading-snug transition-colors duration-300 group-hover:text-white/60">
                {a.en}
              </span>
              <p
                className="cn mt-2 text-[#0C0C0C]/70 leading-snug whitespace-nowrap transition-colors duration-300 group-hover:text-white/80"
                style={{ fontSize: 'clamp(0.82rem, 0.95vw, 0.92rem)' }}
              >
                {a.tagline}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

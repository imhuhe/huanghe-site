import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import FlowLines from './backgrounds/FlowLines'
import portrait from '../assets/portrait.png'
import wordmark from '../assets/logo-wordmark.png'

const navLinks = [
  { cn: '关于', en: 'About', href: '#about' },
  { cn: '项目', en: 'Projects', href: '#projects' },
  { cn: '联系', en: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // 滚动联动:细下划线在你向下滚 hero 区间时伸展
  const underlineScale = useTransform(scrollYProgress, [0, 0.7], [0, 1])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* 背景:流动等高线(最底层) */}
      <FlowLines className="absolute inset-0 z-0 pointer-events-none" />

      {/* 导航 */}
      <FadeIn as="nav" delay={0} y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <ul className="flex items-center gap-8 sm:gap-10 md:gap-14 lg:gap-16 text-[#0C0C0C] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <li className="mr-auto flex items-center">
            <a href="#top" aria-label="HUANGHE" className="inline-block">
              <img
                src={wordmark}
                alt="HUANGHE"
                className="h-3.5 sm:h-4 md:h-5 lg:h-[22px] w-auto select-none"
                draggable={false}
              />
            </a>
          </li>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group inline-flex flex-col items-center leading-none">
                <span className="cn relative pb-1">
                  {l.cn}
                  <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px origin-left scale-x-0 bg-[#0C0C0C] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </span>
                <span className="label-en mt-1 text-[0.5em] font-normal tracking-[0.3em] transition-colors duration-300 group-hover:text-[#0C0C0C]">
                  {l.en}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* 主区:左签名式标题 / 右人像 */}
      <div className="relative flex-1 px-6 md:px-10">
        {/* 签名层级:I am(小斜体) → 细分隔线 → 黄河(主角) → 滚动下划线 → 标语
            手机视口下整块上移避开下方人像;sm+ 居中 */}
        <div className="absolute left-10 md:left-16 top-[20%] sm:top-1/2 sm:-translate-y-1/2 z-10">
          {/* I am 小斜体标签 */}
          <FadeIn delay={0.15} y={20}>
            <p
              className="font-display italic font-normal text-[#0C0C0C]/70 tracking-[0.3em] leading-none"
              style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.4rem)' }}
            >
              I am
            </p>
          </FadeIn>

          {/* 细分隔线:从左侧画过 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left bg-[#0C0C0C] h-px my-4 sm:my-5 md:my-6"
            style={{ width: 'clamp(60px, 8vw, 120px)' }}
          />

          {/* 黄河 — 巨大主角,逐字浮现 */}
          <h1
            className="hero-heading cn font-black leading-[1.0] tracking-tight pb-[0.06em] whitespace-nowrap"
            style={{ fontSize: 'clamp(4rem, 14vw, 14rem)' }}
          >
            {['黄', '河'].map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.0 + i * 0.18,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </h1>

          {/* 滚动联动下划线 */}
          <motion.div
            className="origin-left bg-[#0C0C0C]/40 h-px mt-3 sm:mt-4 md:mt-5"
            style={{ scaleX: underlineScale, width: 'clamp(120px, 22vw, 320px)' }}
          />

          {/* 标语作为签名的副标题(中英双语) */}
          <FadeIn
            as="div"
            delay={1.4}
            y={20}
            className="mt-4 sm:mt-5 md:mt-6 max-w-[260px] sm:max-w-[340px] md:max-w-[420px]"
          >
            <p
              className="cn text-[#0C0C0C] font-normal leading-snug"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.35rem)' }}
            >
              连接资本、产业与政商
            </p>
            <p className="label-en text-[0.62rem] sm:text-[0.7rem] leading-relaxed mt-2">
              Connecting capital, industry, government &amp; business
            </p>
          </FadeIn>
        </div>

        {/* 人像(右下,静态) */}
        <div className="absolute right-6 md:right-10 bottom-0 z-[1] w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]">
          <FadeIn delay={0.6} y={30}>
            <img
              src={portrait}
              alt="HUANGHE 个人照片"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </FadeIn>
        </div>
      </div>

    </section>
  )
}

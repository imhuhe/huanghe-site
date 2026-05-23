import { Mail, Phone } from 'lucide-react'
import FadeIn from './FadeIn'
import wordmark from '../assets/logo-wordmark.png'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 pb-10 sm:pb-12 border-t border-[rgba(12,12,12,0.12)]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 sm:gap-14">
        <FadeIn delay={0} y={40} className="flex flex-col items-center">
          <span className="label-en text-xs sm:text-sm mb-3 sm:mb-4">Contact</span>
          <h2
            className="hero-heading cn font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
          >
            联系
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20} className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <a
            href="mailto:imhuhe@gmail.com"
            className="group flex items-center gap-3 text-[#0C0C0C] transition-opacity duration-200 hover:opacity-70"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            <span className="font-medium tracking-wide text-base sm:text-lg">imhuhe@gmail.com</span>
          </a>
          <a
            href="tel:+8615571772999"
            className="group flex items-center gap-3 text-[#0C0C0C] transition-opacity duration-200 hover:opacity-70"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            <span className="font-medium tracking-wide text-base sm:text-lg">+86 155-7177-2999</span>
          </a>
        </FadeIn>
      </div>

      {/* 页脚:左下 monogram + 版权 */}
      <FadeIn
        as="div"
        delay={0.3}
        y={20}
        className="mt-20 sm:mt-28 pt-8 border-t border-[rgba(12,12,12,0.12)] flex flex-col items-start sm:flex-row sm:items-end justify-between gap-4"
      >
        <img
          src={wordmark}
          alt="HUANGHE"
          className="h-3.5 sm:h-4 md:h-5 lg:h-[22px] w-auto select-none"
          draggable={false}
        />
        <p className="text-[#6B7280] font-light text-[0.7rem] sm:text-xs uppercase tracking-[0.25em]">
          © 2026 黄河 · Copyright · All Rights Reserved
        </p>
      </FadeIn>
    </section>
  )
}

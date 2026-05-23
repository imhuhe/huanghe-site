import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import { ContactButton } from './Buttons'

const bio =
  '拥有 20 年上市公司管理经验。如今作为独立项目推动者，专注于前沿科技产业落地。擅长在资本方、项目业主与政府之间搭建桥梁，把构想推进为可执行、可落地的真实项目。期待与志同道合者一起，做出有分量的事。'

const bioEn =
  '20 years of experience managing listed companies. Now an independent project driver, focused on bringing frontier technologies to industrial scale. Skilled at bridging capital, project owners and government — turning ideas into viable, deployable projects. Looking forward to building something meaningful together.'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-white"
    >
      <FadeIn delay={0} y={40} className="flex flex-col items-center">
        <span className="label-en text-xs sm:text-sm mb-3 sm:mb-4">About</span>
        <h2
          className="hero-heading cn font-black leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          关于我
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 mt-10 sm:mt-14 md:mt-16">
        <div className="flex flex-col items-center gap-5 sm:gap-6 max-w-[600px]">
          <AnimatedText
            text={bio}
            className="cn text-[#0C0C0C] font-normal text-center leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <AnimatedText
            text={bioEn}
            className="label-en normal-case text-center leading-relaxed max-w-[520px]"
            style={{ fontSize: 'clamp(0.78rem, 1.2vw, 0.95rem)', letterSpacing: '0.04em' }}
          />
        </div>
        <ContactButton />
      </div>
    </section>
  )
}

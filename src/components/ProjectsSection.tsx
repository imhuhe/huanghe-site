import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import { LiveProjectButton, BriefButton } from './Buttons'
import drone1 from '../assets/drone-1.jpg'
import drone2 from '../assets/drone-2.jpg'
import drone3 from '../assets/drone-3.jpg'
import reagent1 from '../assets/reagent-1.jpg'
import reagent2 from '../assets/reagent-2.jpg'
import reagent3 from '../assets/reagent-3.jpg'
import testcert1 from '../assets/testcert-1.jpg'
import testcert2 from '../assets/testcert-2.jpg'
import testcert3 from '../assets/testcert-3.jpg'

type ImageSet = { topLeft: string; bottomLeft: string; right: string }
type Project = {
  num: string
  category: string
  categoryEn: string
  name: string
  nameEn: string
  desc: string
  descEn: string
  link?: string
  briefHref?: string
  images?: ImageSet
}

const projects: Project[] = [
  {
    num: '01',
    category: '在推项目',
    categoryEn: 'In Progress',
    name: '高纯试剂',
    nameEn: 'High-Purity Reagents',
    desc: '武汉弗顿高纯试剂项目，在成熟生产体系上推进产能扩张，规划年产 3.5 万吨，加速爬坡。',
    descEn:
      'The Wuhan Fulton high-purity reagent project — expanding to 35,000 tons/year on an established production system, currently ramping up.',
    link: 'https://futon-investor-deck.netlify.app',
    briefHref: '/docs/260524_弗顿_高纯试剂项目研究快读.pdf',
    images: { topLeft: reagent1, bottomLeft: reagent2, right: reagent3 },
  },
  {
    num: '02',
    category: '在推项目',
    categoryEn: 'In Progress',
    name: '无人机产业园',
    nameEn: 'Drone Industrial Park',
    desc: '围绕低空经济的政策、场景与产业链，推动从资本到项目落地。',
    descEn:
      'Built around the policy, scenarios and value chain of the low-altitude economy — moving from capital to ground implementation.',
    images: { topLeft: drone1, bottomLeft: drone2, right: drone3 },
  },
  {
    num: '03',
    category: '在推项目',
    categoryEn: 'In Progress',
    name: '低空经济研发测试认证中心',
    nameEn: 'Low-Altitude R&D · Testing · Certification Center',
    desc: '面向低空经济整机与部件的研发、试验测试与适航认证综合平台。',
    descEn:
      'An integrated platform for R&D, testing, and airworthiness certification of low-altitude aviation systems and components.',
    images: { topLeft: testcert1, bottomLeft: testcert2, right: testcert3 },
  },
]

function Card({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={ref} className="min-h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#0C0C0C] bg-white p-4 sm:p-6 md:p-8"
      >
        {/* 顶部行 */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-display font-black text-[#0C0C0C] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="label-en text-[0.65rem] sm:text-xs mb-0.5">
                {project.category} · {project.categoryEn}
              </span>
              <span
                className="cn text-[#0C0C0C] font-semibold tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2.4rem)' }}
              >
                {project.name}
              </span>
              <span className="label-en text-[0.62rem] sm:text-[0.7rem] mt-1">
                {project.nameEn}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {project.briefHref ? <BriefButton href={project.briefHref} /> : null}
            {project.link ? <LiveProjectButton href={project.link} /> : null}
          </div>
        </div>

        <p
          className="cn mt-4 sm:mt-6 text-[#0C0C0C]/70 font-normal leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
        >
          {project.desc}
        </p>
        <p
          className="label-en normal-case mt-2 leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(0.72rem, 1.1vw, 0.9rem)', letterSpacing: '0.03em' }}
        >
          {project.descEn}
        </p>

        {/* 图片网格：等宽两列 + 统一固定高度(三张卡尺寸一致、卡片整体可在一屏内看完) */}
        <div
          className="mt-6 sm:mt-8 flex gap-3 sm:gap-4"
          style={{ height: 'clamp(480px, 69vh, 660px)' }}
        >
          <div className="flex-1 flex flex-col gap-3 sm:gap-4 min-h-0">
            {project.images ? (
              <>
                <Shot src={project.images.topLeft} className="flex-1 min-h-0" />
                <Shot src={project.images.bottomLeft} className="flex-1 min-h-0" />
              </>
            ) : (
              <>
                <Placeholder className="flex-1 min-h-0" />
                <Placeholder className="flex-1 min-h-0" />
              </>
            )}
          </div>
          <div className="flex-1 min-h-0">
            {project.images ? (
              <Shot src={project.images.right} className="h-full" />
            ) : (
              <Placeholder className="h-full" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Shot({ src, className = '' }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className={`block w-full h-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px] ${className}`}
    />
  )
}

function Placeholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`label-en w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] flex items-center justify-center text-xs ${className}`}
      style={{
        background:
          'repeating-linear-gradient(135deg, #f3f4f6 0px, #f3f4f6 16px, #e9eaed 16px, #e9eaed 32px)',
      }}
    >
      Coming soon · 等待配图
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32 border-t border-[rgba(12,12,12,0.12)]"
    >
      <FadeIn delay={0} y={40} className="flex flex-col items-center mb-16 sm:mb-20">
        <span className="label-en text-xs sm:text-sm mb-3 sm:mb-4">Projects</span>
        <h2
          className="hero-heading cn font-black leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          项目
        </h2>
      </FadeIn>

      <div>
        {projects.map((p, i) => (
          <Card key={p.num} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  )
}

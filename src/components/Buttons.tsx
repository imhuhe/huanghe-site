type ButtonProps = {
  label?: string
  href?: string
  className?: string
}

// 白底极简版:黑色实心胶囊(中英双语)
export function ContactButton({ href = '#contact', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-baseline gap-2 rounded-full bg-[#0C0C0C] text-white px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-opacity duration-200 hover:opacity-80 ${className}`}
    >
      <span className="cn text-xs sm:text-sm md:text-base">联系我</span>
      <span className="text-[0.62em] uppercase tracking-[0.25em] text-white/60">Contact</span>
    </a>
  )
}

// 幽灵/描边胶囊(深色描边,白底版,中英双语)
export function LiveProjectButton({ href = '#', className = '' }: ButtonProps) {
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-baseline gap-2 rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] px-8 py-3 sm:px-10 sm:py-3.5 transition-colors duration-200 hover:bg-[#0C0C0C] hover:text-white ${className}`}
    >
      <span className="cn text-sm sm:text-base">访问网站</span>
      <span className="text-[0.62em] uppercase tracking-[0.25em] opacity-50">Visit</span>
    </a>
  )
}

// 研究快读 / Brief 下载按钮(描边胶囊,与 LiveProjectButton 视觉一致)
export function BriefButton({ href = '#', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-baseline gap-2 rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] px-8 py-3 sm:px-10 sm:py-3.5 transition-colors duration-200 hover:bg-[#0C0C0C] hover:text-white ${className}`}
    >
      <span className="cn text-sm sm:text-base">研究快读</span>
      <span className="text-[0.62em] uppercase tracking-[0.25em] opacity-50">Brief</span>
    </a>
  )
}

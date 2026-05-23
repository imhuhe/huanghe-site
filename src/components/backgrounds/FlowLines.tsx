import { useEffect, useRef } from 'react'

/** 流动等高线 / 风场曲线。几条极淡细线缓慢起伏流动。 */
export default function FlowLines({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0

    const resize = () => {
      const p = canvas.parentElement
      if (!p) return
      w = p.clientWidth
      h = p.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const LINES = 9
    let t = 0
    const render = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < LINES; i++) {
        const baseY = (h / (LINES + 1)) * (i + 1)
        const amp = 22 + (i % 3) * 10
        const freq = 0.0042 + (i % 4) * 0.0008
        const speed = t * (0.012 + i * 0.0015)
        ctx.beginPath()
        for (let x = 0; x <= w; x += 8) {
          const y =
            baseY +
            Math.sin(x * freq + speed + i) * amp +
            Math.sin(x * freq * 2.3 + speed * 1.4) * (amp * 0.35)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = 'rgba(12,12,12,0.07)'
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    let raf = 0
    const loop = () => {
      t += 1
      render()
      raf = requestAnimationFrame(loop)
    }
    resize()
    if (reduce) render()
    else loop()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={ref} className={className} aria-hidden="true" />
}

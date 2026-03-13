import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 80

function createParticle(width, height) {
  const size = Math.random() * 2 + 1
  const speed = Math.random() * 0.3 + 0.15
  const angle = Math.random() * Math.PI * 2

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size,
  }
}

export function Particles() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let particles = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(width, height),
    )

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = 'rgba(148, 163, 184, 0.5)'
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.55)'

      const mouse = mouseRef.current

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        if (mouse.x != null && mouse.y != null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const influenceRadius = 120

          if (dist < influenceRadius && dist > 0) {
            const force = (influenceRadius - dist) / influenceRadius
            p.vx += (dx / dist) * force * 0.08
            p.vy += (dy / dist) * force * 0.08
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 110
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist
            ctx.globalAlpha = alpha * 0.7
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" />
}

export default Particles


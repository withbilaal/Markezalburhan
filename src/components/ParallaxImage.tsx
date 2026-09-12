import { useEffect, useRef } from 'react'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ParallaxImage({ src, alt, className = '', priority = false }: ParallaxImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const image = imageRef.current
    if (!image || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const updatePosition = () => {
      frame = 0
      const bounds = image.getBoundingClientRect()
      const offset = Math.max(-28, Math.min(28, (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * 0.06))
      image.style.setProperty('--parallax-y', `${offset}px`)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePosition)
    }

    updatePosition()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  // TEMPORARY: original live-site portrait imagery is center-cropped into horizontal media containers.
  // Swap these source files when approved horizontal photography is supplied.
  return <img ref={imageRef} className={`parallax-image h-full w-full object-cover object-center ${className}`} src={src} alt={alt} loading="eager" fetchPriority={priority ? 'high' : 'auto'} />
}

import { useEffect, useState } from "preact/hooks";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1280);

  const onResize = () => {
    setIsMobile(window.innerWidth < 1280)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return { isMobile }
}
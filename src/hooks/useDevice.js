import { useState } from "react";
import { useWindowSize, useEventListener, useIsomorphicLayoutEffect } from "usehooks-ts";

export function useDevice() {
  const [device, setDevice] = useState();
  const { width } = useWindowSize();
  
  const handleDevice = () => {
    
    if (width > 834) {
      setDevice('desktop');
    } else if (width > 390) {
      setDevice('tablet');
    } else {
      setDevice('mobile');
    }
  }

  useEventListener('resize', handleDevice)

  // Set device at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleDevice()
  }, [])

  return device
}
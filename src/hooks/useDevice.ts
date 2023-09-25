import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

type Device = 'desktop' | 'mobile' | 'tablet';

export function useDevice(): string {
  const [device, setDevice] = useState<Device>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 834) {
      setDevice('desktop');
    } else if (width > 390) {
      setDevice('tablet');
    } else {
      setDevice('mobile');
    }
  }, [width]);

  return device;
}

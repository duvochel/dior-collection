import { useEffect, useState } from "react";
import {
  useWindowSize,
} from "usehooks-ts";

export function useDevice() {
  const [device, setDevice] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    handleDevice(width);
  }, [width]);

  const handleDevice = (width) => {
    
    if (width > 834) {
      setDevice("desktop");
    } else if (width > 390) {
      setDevice("tablet");
    } else {
      setDevice("mobile");
    }
  };

  return device;
}

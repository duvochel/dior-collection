import { useWindowSize } from "usehooks-ts";

export function useDevice() {
  const { width } = useWindowSize();
  let device;
  if (width > 834) {
    device = 'desktop';
  } else if (width > 390) {
    device = 'tablet';
  } else {
    device = 'mobile';
  }
  return device
}
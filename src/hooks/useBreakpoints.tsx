import customConfig from "@/../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import useWindowDimensions from "./useWindowDimensions";
const fullConfig = resolveConfig(customConfig);
export type BreakpointKey = keyof typeof fullConfig.theme.screens;

export default function useBreakpoints(breakpoint: BreakpointKey) {
  const { width } = useWindowDimensions();
  return width >= parseInt(fullConfig.theme.screens[breakpoint]);
}

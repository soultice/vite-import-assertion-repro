import { loggingPlugin } from "./loggingPlugin";
import typescript from "@rollup/plugin-typescript";

export default {
  plugins: [loggingPlugin, typescript()],
  input: 'src/main.ts',
}

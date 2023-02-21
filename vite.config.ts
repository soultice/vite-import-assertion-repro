import { loggingPlugin } from './loggingPlugin';
import Inspect from 'vite-plugin-inspect';

export default {
  plugins: [Inspect({ build: true }), loggingPlugin],
  build: {
    target: 'esnext',
  },
  optimizeDeps: { disabled: false },
};

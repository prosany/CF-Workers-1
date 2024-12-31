/* eslint-disable @typescript-eslint/no-explicit-any */
import cache from '@opennextjs/cloudflare/kvCache';

const config: any = {
  default: {
    override: {
      wrapper: 'cloudflare-node',
      converter: 'edge',
      // Set `incrementalCache` to "dummy" to disable KV cache
      incrementalCache: async () => cache,
      tagCache: 'dummy',
      queue: 'dummy',
    },
  },

  middleware: {
    external: true,
    override: {
      wrapper: 'cloudflare-edge',
      converter: 'edge',
      proxyExternalRequest: 'fetch',
    },
  },
};

export default config;
import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-two',
  exposes: {
    './Module': 'remote-two/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

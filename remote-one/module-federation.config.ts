import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-one',
  exposes: {
    './Module': 'remote-one/src/app/remote-entry/entry.module.ts',
  },
};

export default config;

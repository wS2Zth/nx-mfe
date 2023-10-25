import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host-app',
  remotes: ['remote-one', 'remote-two'],
};

export default config;

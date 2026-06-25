import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'k3wb9a79',
    dataset: 'production'
  },
  deployment: {
    appId: 'hfs1y3hy99q6g0xr0i6444wc',
    autoUpdates: true,
  }
})

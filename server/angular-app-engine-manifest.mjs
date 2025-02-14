
export default {
  basePath: 'https://ldcolina.github.io/san-valentin',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

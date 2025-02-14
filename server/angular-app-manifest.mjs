
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ldcolina.github.io/san-valentin/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/san-valentin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KJYAJCAZ.js"
    ],
    "route": "/san-valentin/poemas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SG3M7AXO.js"
    ],
    "route": "/san-valentin/vales"
  },
  {
    "renderMode": 2,
    "redirectTo": "/san-valentin",
    "route": "/san-valentin/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23757, hash: 'dff6d2c49eff5734fc71d1047a69b12a600d0feb9ee6c8f736ae7df89036823d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17331, hash: 'ade2955bb7d78b6220c09021f79c6d9b9ae05f5407991588e8b430773c11e44c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'poemas/index.html': {size: 78883, hash: 'a199c440b0bf79fba0bf23af787f5d82d8cccd64cc77a1dd9ac471d7d4b54ecb', text: () => import('./assets-chunks/poemas_index_html.mjs').then(m => m.default)},
    'vales/index.html': {size: 79105, hash: 'b58577b831365b51973d6311e4d3ec5d876c86d80d88546464922eee1929a75f', text: () => import('./assets-chunks/vales_index_html.mjs').then(m => m.default)},
    'index.html': {size: 60539, hash: '7ecc65f4a92df1f87f538a7c1d95a4804610d3c4aa9676ed397130167605a755', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SIMXPKYJ.css': {size: 6979, hash: 'ZmtAN+hhhec', text: () => import('./assets-chunks/styles-SIMXPKYJ_css.mjs').then(m => m.default)}
  },
};

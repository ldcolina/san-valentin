
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KJYAJCAZ.js"
    ],
    "route": "/poemas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SG3M7AXO.js"
    ],
    "route": "/vales"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23718, hash: 'da6b27882bd29180ca7fd0d2cece79a4c28dcd1dfdbb5b6b947c83cdab3e6576', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17292, hash: '968cb36ca61c6a0a62148f4303f79cefea9f6bbb40aaaa8d1009d50efb8c37ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'poemas/index.html': {size: 78736, hash: '87de7ab8139afe39c44334f0d6ad41183d9fdbad5fca815d6ecc6f236d3e9a96', text: () => import('./assets-chunks/poemas_index_html.mjs').then(m => m.default)},
    'vales/index.html': {size: 78949, hash: '5b8e75ca0849c23edaa59a478dfdd5c418ecbe6f49fb5c9d098e496780ca2cb8', text: () => import('./assets-chunks/vales_index_html.mjs').then(m => m.default)},
    'index.html': {size: 60383, hash: '649a30ca86863dee18f59a3348523bb713ed7983de0d72022c97a0f54cffd049', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SIMXPKYJ.css': {size: 6979, hash: 'ZmtAN+hhhec', text: () => import('./assets-chunks/styles-SIMXPKYJ_css.mjs').then(m => m.default)}
  },
};

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import VueMacros from 'unplugin-vue-macros/vite'
import esbuild from 'rollup-plugin-esbuild'
import {
  epPackage,
  epRoot,
  getPackageDependencies,
  pkgRoot,
  projRoot,
} from '@tams-ui/build-utils'
import type { Plugin } from 'vite'

const esbuildPlugin = (): Plugin => ({
  ...esbuild({
    target: 'chrome64',
    loaders: {
      '.vue': 'js',
    },
  }),
  enforce: 'post',
})

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  let { dependencies } = getPackageDependencies(epPackage)
  dependencies = dependencies.filter((dep) => !dep.startsWith('@types/')) // exclude dts deps
  const optimizeDeps = (
    await glob(['dayjs/(locale|plugin)/*.js'], {
      cwd: path.resolve(projRoot, 'node_modules'),
    })
  )

  return {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "/styles/custom.scss" as *;`,
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /^tams-ui(\/(es|lib))?$/,
          replacement: path.resolve(epRoot, 'index.ts'),
        },
        {
          find: /^tams-ui\/(es|lib)\/(.*)$/,
          replacement: `${pkgRoot}/$2`,
        },
      ],
    },
    server: {
      host: true,
      https: !!env.HTTPS,
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue(),
          vueJsx: vueJsx(),
        },
      }),
      esbuildPlugin(),
      Components({
        include: `${__dirname}/**`,
        resolvers: ElementPlusResolver({ importStyle: 'sass' }),
        dts: false,
      }),
      mkcert(),
      Inspect(),
    ],

    optimizeDeps: {
      include: ['vue', '@vue/shared', ...dependencies, ...optimizeDeps],
    },
    esbuild: {
      target: 'chrome64',
    },
  }
})

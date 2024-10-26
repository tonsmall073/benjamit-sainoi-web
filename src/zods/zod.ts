import i18next from 'i18next'
import jaTranslation from 'zod-i18n-map/locales/ja/zod.json'
import enTranslation from 'zod-i18n-map/locales/en/zod.json'
import zhTranslation from 'zod-i18n-map/locales/zh-CN/zod.json'
import { makeZodI18nMap } from 'zod-i18n-map'
import { z } from 'zod'
import { getLocale } from '@/locales/dictionary'

const th = i18next.createInstance()
th.init({
  lng: 'th',
  resources: {
    zh: { zod: zhTranslation },
  },
})
const ja = i18next.createInstance()
ja.init({
  lng: 'ja',
  resources: {
    ja: { zod: jaTranslation },
  },
})

const en = i18next.createInstance()
en.init({
  lng: 'en',
  resources: {
    en: { zod: enTranslation },
  },
})

const zh = i18next.createInstance()
zh.init({
  lng: 'zh',
  resources: {
    zh: { zod: zhTranslation },
  },
})

const zodMap = {
  th: makeZodI18nMap({ t: th.t }),
  en: makeZodI18nMap({ t: en.t }),
  ja: makeZodI18nMap({ t: ja.t }),
  zh: makeZodI18nMap({ t: zh.t }),
}

z.setErrorMap((err, ctx) => zodMap[getLocale()](err, ctx))

export { z }

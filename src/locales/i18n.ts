import i18next from 'i18next';
import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from './en';
import * as ko from './ko';
import * as cn from './cn';
import * as jp from './jp';
import * as th from './th';
import * as vn from './vn';

const resources: Resource = {
  'en-US': {
    ...en,
  },
  'ko-KR': {
    ...ko,
  },
  'zh-CN': {
    ...cn,
  },
  'ja-JP': {
    ...jp,
  },
  'th-TH': {
    ...th,
  },
  'vi-VN': {
    ...vn,
  },
} as const;

i18next.use(initReactI18next).init({
  resources,
  lng: 'ko-KR',
  fallbackLng: {
    'en-US': ['en-US'],
    default: ['ko-KR'],
    'zh-CN': ['zh-CN'],
    'ja-JP': ['ja-JP'],
    'th-TH': ['th-TH'],
    'vi-VN': ['vi-VN'],
  },
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

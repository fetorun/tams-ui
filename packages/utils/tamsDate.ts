import dayjs from 'dayjs'
import { isEmpty } from './types'
import type { Dayjs } from 'dayjs'

const parseDate = function (
  date: string | number | Date | Dayjs | null,
  format: string | undefined,
  lang: string
): Dayjs | undefined {
  if (date === null) return undefined

  const day =
    isEmpty(format) || format === 'x'
      ? dayjs(date).locale(lang)
      : dayjs(date, format).locale(lang)
  return day.isValid() ? day : undefined
}

export const tamsParseDate = (
  stringDate: string | number | Date | Dayjs | null,
  format: string | undefined = '',
  lang: string
): Dayjs | undefined => {
  if (stringDate === null) return undefined

  if (format === 'HH:mm' || format === 'HH:mm:ss') {
    const mDatetime = dayjs(
      `${dayjs().format('YYYY-MM-DD')}T${stringDate}`,
      [
        'YYYY-MM-DDTHH:mm',
        'YYYY-MM-DDTHHmm',
        'YYYY-MM-DDTHH:mm:ss',
        'YYYY-MM-DDTHHmmss',
      ],
      true
    )
    if (mDatetime.isValid()) {
      return mDatetime.locale(lang)
    } else {
      return undefined
    }
  }

  if (stringDate.toString().length === 4) {
    const mDatetime = dayjs(
      `${dayjs().format('YYYY-MM-DD')}T${stringDate
        .toString()
        .slice(0, 2)}:${stringDate.toString().slice(2)}`,
      ['YYYY-MM-DDTHH:mm'],
      true
    )
    if (mDatetime.isValid()) {
      return mDatetime.locale(lang)
    } else {
      return undefined
    }
  } else if (
    stringDate.toString().length === 5 &&
    stringDate.toString().includes(':')
  ) {
    const mDatetime = dayjs(
      `${dayjs().format('YYYY-MM-DD')}T${stringDate}`,
      ['YYYY-MM-DDTHH:mm'],
      true
    )
    if (mDatetime.isValid()) {
      return mDatetime.locale(lang)
    } else {
      return undefined
    }
  }

  const delimiters = ['', '.', '/', '-']

  let formatsUserFormat: Array<string>
  if (format === 'yyyy-MM-ddTHH:mm:ss') {
    formatsUserFormat = ['YYYY-MM-DDTHH:mm:ss']
  } else {
    let userFormat: string = format
      .toString()
      .replace(' HH:mm', '')
      .toUpperCase()
      .replace('YYYY', 'YY')
    formatsUserFormat = [
      `${userFormat
        .replaceAll('.', '')
        .replaceAll('/', '')
        .replaceAll('-', '')}HHmm`,
      userFormat.replaceAll('.', '').replaceAll('/', '').replaceAll('-', ''),
      `${userFormat} HH:mm`,
      `${userFormat}HHmm`,
      userFormat,
    ]

    userFormat = userFormat.replace('YY', 'YYYY')
    formatsUserFormat.push(
      ...[
        `${userFormat
          .replaceAll('.', '')
          .replaceAll('/', '')
          .replaceAll('-', '')}HHmm`,
        userFormat.replaceAll('.', '').replaceAll('/', '').replaceAll('-', ''),
        `${userFormat} HH:mm`,
        `${userFormat}HHmm`,
        userFormat,
      ]
    )
  }

  function getFormatsStartDay() {
    const formats: string[] = []
    const defaultFormatsStartDay: string[] = [
      'DD|MM|YYYYHHmm',
      'DD|MM|YYYY HHmm',
      'DD|MM|YYYY HH:mm',
      'DD|MM|YYYY',

      'DD|MMM|YYYYHHmm',
      'DD|MMM|YYYY HHmm',
      'DD|MMM|YYYY HH:mm',
      'DD|MMM|YYYY',

      'DD|MM|YYHHmm',
      'DD|MM|YY HHmm',
      'DD|MM|YY HH:mm',
      'DD|MM|YY',

      'DD|MMM|YYHHmm',
      'DD|MMM|YY HHmm',
      'DD|MMM|YY HH:mm',
      'DD|MMM|YY',

      'D|MM|YYHHmm',
      'D|MM|YY HHmm',
      'D|MM|YY HH:mm',
      'D|MM|YY',

      'D|MMM|YYHHmm',
      'D|MMM|YY HHmm',
      'D|MMM|YY HH:mm',
      'D|MMM|YY',

      'D|MM|YYYY HH:mm',
      'D|MM|YYYY HHmm',
      'D|MM|YYYYHHmm',
      'D|MM|YYYY',

      'D|MMM|YYYYHHmm',
      'D|MMM|YYYY HHmm',
      'D|MMM|YYYY HH:mm',
      'D|MMM|YYYY',

      'DD|M|YYHHmm',
      'DD|M|YY HHmm',
      'DD|M|YY HH:mm',
      'DD|M|YY',

      'DD|M|YYYYHHmm',
      'DD|M|YYYY HHmm',
      'DD|M|YYYY HH:mm',
      'DD|M|YYYY',

      'D|M|YYHHmm',
      'D|M|YY HHmm',
      'D|M|YY HH:mm',
      'D|M|YY',

      'D|M|YYYYHHmm',
      'D|M|YYYY HHmm',
      'D|M|YYYY HH:mm',
      'D|M|YYYY',
    ]

    for (const delimiter of delimiters) {
      for (const element of defaultFormatsStartDay) {
        formats.push(element.replace(/\|/g, delimiter))
      }
    }

    return formats
  }
  const formatsStartDay = getFormatsStartDay()

  function getFormatsStartMonth() {
    const formats: string[] = []
    const defaultFormatsStartMonth: string[] = [
      'MM|DD|YYYYHHmm',
      'MM|DD|YYYY HHmm',
      'MM|DD|YYYY HH:mm',
      'MM|DD|YYYY',

      'MMM|DD|YYYYHHmm',
      'MMM|DD|YYYY HHmm',
      'MMM|DD|YYYY HH:mm',
      'MMM|DD|YYYY',

      'MM|DD|YYHHmm',
      'MM|DD|YY HHmm',
      'MM|DD|YY HH:mm',
      'MM|DD|YY',

      'MMM|DD|YYHHmm',
      'MMM|DD|YY HHmm',
      'MMM|DD|YY HH:mm',
      'MMM|DD|YY',

      'MM|D|YYHHmm',
      'MM|D|YY HHmm',
      'MM|D|YY HH:mm',
      'MM|D|YY',

      'MMM|D|YYHHmm',
      'MMM|D|YY HHmm',
      'MMM|D|YY HH:mm',
      'MMM|D|YY',

      'MM|D|YYYY HH:mm',
      'MM|D|YYYY HHmm',
      'MM|D|YYYYHHmm',
      'MM|D|YYYY',

      'MMM|D|YYYYHHmm',
      'MMM|D|YYYY HHmm',
      'MMM|D|YYYY HH:mm',
      'MMM|D|YYYY',

      'M|D|YYHHmm',
      'M|D|YY HHmm',
      'M|D|YY HH:mm',
      'M|D|YY',

      'M|D|YYYYHHmm',
      'M|D|YYYY HHmm',
      'M|D|YYYY HH:mm',
      'M|D|YYYY',
    ]

    for (const delimiter of delimiters) {
      for (const element of defaultFormatsStartMonth) {
        formats.push(element.replace(/\|/g, delimiter))
      }
    }

    return formats
  }
  const formatsStartMonth = getFormatsStartMonth()

  function getFormatsStartYearDay() {
    const formats: string[] = []
    const defaultFormatsStartDay: string[] = [
      'YYYY|DD|MMTHH:mm:ss',

      'YYYY|DD|MMHHmm',
      'YYYY|DD|MM HHmm',
      'YYYY|DD|MM HH:mm',
      'YYYY|DD|MM',

      'YYYY|DD|MMMHHmm',
      'YYYY|DD|MMM HHmm',
      'YYYY|DD|MMM HH:mm',
      'YYYY|DD|MMM',

      'YYYY|D|MMHHmm',
      'YYYY|D|MM HHmm',
      'YYYY|D|MM HH:mm',
      'YYYY|D|MM',

      'YYYY|D|MMMHHmm',
      'YYYY|D|MMM HHmm',
      'YYYY|D|MMM HH:mm',
      'YYYY|D|MMM',

      'YYYY|DD|MHHmm',
      'YYYY|DD|M HHmm',
      'YYYY|DD|M HH:mm',
      'YYYY|DD|M',

      'YYYY|D|MHHmm',
      'YYYY|D|M HHmm',
      'YYYY|D|M HH:mm',
      'YYYY|D|M',
    ]

    for (const delimiter of delimiters) {
      for (const element of defaultFormatsStartDay) {
        formats.push(element.replace(/\|/g, delimiter))
      }
    }

    return formats
  }
  const formatsStartYearDay = getFormatsStartYearDay()

  function getFormatsStartYearMonth() {
    const formats: string[] = []
    const defaultFormatsStartMonth: string[] = [
      'YYYY|MM|DDTHH:mm:ss',

      'YYYY|MM|DD HH:mm',
      'YYYY|MM|DDHHmm',
      'YYYY|MM|DD HHmm',
      'YYYY|MM|DD',

      'YYYY|MMM|DD HH:mm',
      'YYYY|MMM|DDHHmm',
      'YYYY|MMM|DD HHmm',
      'YYYY|MMM|DD',

      'YYYY|MM|D HH:mm',
      'YYYY|MM|DHHmm',
      'YYYY|MM|D HHmm',
      'YYYY|MM|D',

      'YYYY|MMM|D HH:mm',
      'YYYY|MMM|DHHmm',
      'YYYY|MMM|D HHmm',
      'YYYY|MMM|D',

      'YYYY|M|DD HH:mm',
      'YYYY|M|DDHHmm',
      'YYYY|M|DD HHmm',
      'YYYY|M|DD',

      'YYYY|M|D HH:mm',
      'YYYY|M|DHHmm',
      'YYYY|M|D HHmm',
      'YYYY|M|D',
    ]

    for (const delimiter of delimiters) {
      for (const element of defaultFormatsStartMonth) {
        formats.push(element.replace(/\|/g, delimiter))
      }
    }

    return formats
  }
  const formatsStartYearMonth = getFormatsStartYearMonth()

  const mDatetimeUserFormat = dayjs(stringDate, formatsUserFormat, true)
  const mDatetimeStartYearMonth = dayjs(stringDate, formatsStartYearMonth, true)
  const mDatetimeStartYearDay = dayjs(stringDate, formatsStartYearDay, true)
  const mDatetimeStartDay = dayjs(stringDate, formatsStartDay, true)
  const mDatetimeStartMonth = dayjs(stringDate, formatsStartMonth, true)

  const minDatetime = dayjs('1900-01-01')

  if (
    mDatetimeUserFormat.isValid() &&
    mDatetimeUserFormat.isAfter(minDatetime)
  ) {
    return mDatetimeUserFormat.locale(lang)
  } else if (
    mDatetimeStartDay.isValid() &&
    mDatetimeStartDay.isAfter(minDatetime)
  ) {
    return mDatetimeStartDay.locale(lang)
  } else if (
    mDatetimeStartMonth.isValid() &&
    mDatetimeStartMonth.isAfter(minDatetime)
  ) {
    return mDatetimeStartMonth.locale(lang)
  } else if (
    mDatetimeStartYearDay.isValid() &&
    mDatetimeStartYearDay.isAfter(minDatetime)
  ) {
    return mDatetimeStartYearDay.locale(lang)
  } else if (
    mDatetimeStartYearMonth.isValid() &&
    mDatetimeStartYearMonth.isAfter(minDatetime)
  ) {
    return mDatetimeStartYearMonth.locale(lang)
  } else {
    return parseDate(stringDate, format, lang)
  }
}

export const tamsNow = (): Dayjs | undefined => {
  if ((window as any).store?.getters?.currentDatetime) {
    return (window as any).store.getters.currentDatetime.clone()
  }
  return undefined
}

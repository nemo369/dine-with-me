export function debounce(method, delay) {
  clearTimeout(method._tId)
  method._tId = setTimeout(function () {
    method()
  }, delay)
}

export const rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomValue = (array) =>
  array[Math.floor(Math.random() * array.length)]
export const slugify = (param) => {
  param = param
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, '') // trim - from end of text
  return encodeURIComponent(param)
}
export const unSlugify = (param) => {
  param = param.replace(/-/g, ' ') // remove invalid chars

  return decodeURI(param)
}
export const getLoctionInIsrael = (city) => {
  let region = 'golan'
  switch (city) {
    case 'golan':
    case 'מושב שעל':
      region = 'golan'
      break
    case 'zafon':
    case 'שאר ישוב':
    case 'ראש פינה':
    case 'זיכרון יעקב':
    case 'קריית טבעון':
    case 'כפר יונה':
    case 'עין השופט':
    case 'כרכור':
    case 'אלוני אבא':
    case 'כרמיאל':
    case 'כפר ראמה':
    case 'אילניה':
    case 'נתניה':
    case 'אור עקיבא':
    case 'נהריה':
    case 'טירת הכרמל':
    case 'שלומי':
    case 'פרדס חנה':
    case 'יקום':
    case 'מושב מלאה':
    case 'קיבוץ יסעור':
      region = 'zafon'
      break
    case 'hefa':
    case 'חיפה':
    case 'קרית אתא':
    case 'קרית ביאליק':
    case 'עכו':
    case 'קריית חיים':
    case 'זכרון יעקב':
    case 'קרית מוצקין':
      region = 'hefa'
      break
    case 'telaviv':
    case 'תל אביב, דרום':
    case 'תל אביב, צפון':
    case 'בת ים':
    case 'גבעתיים':
    case 'רמת גן':
    case 'תל אביב':
    case 'חולון':
    case 'הרצליה':
    case 'יפו':
    case 'בני ברק':
      region = 'telaviv'
      break
    case 'haMerkaz':
    case 'ראשון לציון':
    case 'רעננה':
    case 'הוד השרון':
    case 'אור יהודה':
    case 'מודיעין':
    case 'צור משה':
    case 'רחובות':
    case 'רמלה':
    case 'כפר דניאל':
    case 'רמת השרון':
    case 'יהוד':
    case 'נחושה':
    case 'פדיה':
    case 'כפר מל"ל':
    case 'מושב מזור':
    case 'כוכב יאיר':
      region = 'haMerkaz'
      break
    case 'haDarom':
    case 'אשדוד':
    case 'גן יבנה':
    case 'קרית גת':
    case 'קריית גת':
    case 'באר שבע':
    case 'אשקלון':
    case 'נתיבות':
    case 'ירוחם':
    case 'נחל עוז':
    case 'מושב צלפון':
      region = 'haDarom'
      break
    case 'jerusalem':
    case 'ירושלים':
    case 'מבשרת ציון':
    case 'בית נקופה':
    case 'מעלה אדומים':
    case 'צור הדסה':
      region = 'jerusalem'
      break
    case 'palestine':
    case 'אריאל':
    case 'נעלה':
    case 'אורנית':
    case 'תפוח':
    case 'בית אל':
    case 'חוקוק ובת חפר':
      region = 'palestine'
      break
    case '':
      region = null
      break

    default:
      console.log('city', city)
      break
  }

  return region
}

export const getCountryEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}
export const getAreInIsrael = (region) => {
  let hebName = ''
  switch (region) {
    case 'golan':
      hebName = 'הגולן'
      break
    case 'zafon':
      hebName = 'צפון הארץ'
      break
    case 'hefa':
      hebName = 'חיפה'
      break
    case 'telaviv':
      hebName = 'תל אביב'
      break
    case 'haMerkaz':
      hebName = 'המרכז'
      break
    case 'haDarom':
      hebName = 'הדרום'
      break
    case 'jerusalem':
      hebName = 'ירושלים'
      break
    case 'palestine':
      hebName = 'השטחים'
      break
  }

  return hebName
}
export const getCountryId = (c) => {
  let countryCode = null

  if (!c.community) {
    return countryCode
  }
  const countreis = {
    IL: 'ישראל',
    MA: 'מרוקו',
    TN: 'תוניסיה',
    PL: 'פולין',
    AU: 'אוסטרליה',
    RU: 'רוסיה',
    FR: 'צרפת',
    IR: 'פרס',
    TR: 'טורקיה',
    PS: 'ערבי',
    GR: 'יוון',
    DE: 'גרמניה',
    IN: 'הודו',
    IQ: 'עיראק',
    YE: 'תימן',
    AZ: `אזרביג'אן`,
    RS: `סרביה`,
    LY: `לוב`,
    BY: `בלארוס`,
    CA: `קנדה`,
    UZ: `אוזבקיסטן`,
  }
  for (const [key, value] of Object.entries(countreis)) {
    if (COUPLES_SESSIONS.includes(+c.session_number)) {
      const communitys = c.community?.split(',')
      communitys.forEach((community) => {
        community = community.replace(/,/g, '')?.trim()

        if (value === community.trim()) {
          countryCode = key
        }
      })
    } else {
      const [community] = c.community.split('(מוצא)')
      if (value === community.trim()) {
        countryCode = key
        break
      }
    }
  }

  if (!countryCode && c.community) {
    // console.error(c.name)
    // console.error(c.community)
  }
  return countryCode
}

export const COUPLES_SESSIONS = [3, 4]

export function shuffle(array) {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

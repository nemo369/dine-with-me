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
    case 'קיבוץ יסעור':
      region = 'zafon'
      break
    case 'hefa':
    case 'חיפה':
    case 'קרית אתא':
    case 'עכו':
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
    case 'כפר דניאל':
    case 'רמת השרון':
    case 'יהוד':
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
      region = 'palestine'
      break

    default:
      console.log(city)
      break
  }

  return region
}

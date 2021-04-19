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

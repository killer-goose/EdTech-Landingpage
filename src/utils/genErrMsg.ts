const genErrMsg = (x: string): string => {
  const val = x.slice(5).split('-').join(' ')
  return val + '!'
}
export default genErrMsg

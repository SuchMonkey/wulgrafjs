export default function(signatureString, callback) {
  let _signature = signatureString.split(':')

  return {
    fireIf(signaturePattern, ...params) {
      let condition = signaturePattern.split(':').every((x, i) => x == _signature[i] || x == '*')

      if(condition) callback(...params)

      return condition
    }
  }
}

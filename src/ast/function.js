/**
 * Function
 * @param {ast.Function} type
 * @returns {*}
 */
export default function(type) {
  switch (type.name) {
    case 'between':
    case 'notBetween':
    case 'in':
    case 'notIn':
    case 'overlap':
    case 'contains':
    case 'contained':
    case 'any':
      return {['$' + type.name]: type.args}
    default:
      throw new Error('Unknown function')
  }
}

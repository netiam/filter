import expression from './expression'
import ast from '../ast'

/**
 * Identifier
 * @param {ast.Expression|ast.Function|ast.Identifier|String|Number|Boolean|null} type
 * @param {*} type.id
 * @returns {*}
 */
export default function identifier(type) {
  if (type instanceof ast.Expression) {
    return expression(type)
  } else if (type instanceof ast.Function) {
    console.warn('Functions are not supported at the moment')
    return true
  } else if (type instanceof ast.Identifier) {
    return type.id
  } else {
    return type
  }
}

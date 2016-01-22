import expression from './expression'
import fn from './function'
import ast from '../ast'

/**
 * Identifier
 * @param {ast.Expression|ast.Function|ast.Identifier|String|Number|Boolean|null} type
 * @param {*} type.id
 * @returns {*}
 */
export default function(type) {
  if (type instanceof ast.Expression) {
    return expression(type)
  } else if (type instanceof ast.Function) {
    return fn(type)
  } else if (type instanceof ast.Identifier) {
    return type.id
  } else {
    return type
  }
}

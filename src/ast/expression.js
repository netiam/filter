import identifier from './identifier'

/**
 * Expression
 * @param {Object} expr
 * @param {String} expr.left
 * @param {String} expr.op
 * @param {String} expr.right
 * @returns {*}
 */
export default function expression(expr) {
  let lft = identifier(expr.left)
  let rgt = identifier(expr.right)
  let e

  switch (expr.operator) {
    // Logical operators
    case 'and':
      return {$and: [lft, rgt]}
    case 'or':
      return {$or: [lft, rgt]}
    case 'eq':
      e = {}
      e[lft] = rgt
      return e
    case 'ne':
      e = {}
      e[lft] = {$ne: rgt}
      return e
    case 'gt':
      e = {}
      e[lft] = {$gt: rgt}
      return e
    case 'ge':
      e = {}
      e[lft] = {$gte: rgt}
      return e
    case 'lt':
      e = {}
      e[lft] = {$lt: rgt}
      return e
    case 'le':
      e = {}
      e[lft] = {$lte: rgt}
      return e
    // Search operators
    case 'lk':
      e = {}
      e[lft] = new RegExp(rgt, 'i')
      return e
  }
}

import _ from 'lodash'
import expression from './ast/expression'
import parser from './parser.js'
import ast from './ast'

parser.parser.yy = ast

export default class Filter {
  constructor(query = '') {
    this.query = query
  }

  /**
   * Get expression
   * @returns {Object}
   */
  toObject() {
    if (!this.query) {
      return {}
    }

    return expression(parser.parse(this.query))
  }

  /**
   * Logical expressions
   * @param q
   * @param op
   * @return Filter
   */
  logical(q, op) {
    if (!this.query) {
      this.query = q
      return this
    }

    this.query += ' ' + op + ' '

    return this
  }

  /**
   * Add one or more conditions
   * @param {String|Object} q
   * @returns {Filter}
   */
  where(q) {
    // If no expression available, just apply hash
    if (!this.query && _.isString(q)) {
      this.query = q
      return this
    }

    // Apply AND operation for each key/value pair
    if (_.isObject(q) && !_.isEmpty(q)) {
      let ext = ''
      _.forEach(q, function(val, key) {
        ext += key + ' EQ \'' + val + '\''
      })
      if (!this.query && ext) {
        this.query = ext
      } else {
        this.query += ' AND ' + ext
      }
    }

    return this
  }

  /**
   * Op: and
   * @param q
   * @return Filter
   */
  and(q) {
    return this.logical(q, 'and')
  }

  /**
   * Op: or
   * @param q
   * @return Filter
   */
  or(q) {
    return this.logical(q, 'or')
  }

  /**
   * Op: eq
   * @param q
   * @return Filter
   */
  eq(q) {
    return this.logical(q, 'eq')
  }

  /**
   * Op: ne
   * @param q
   * @return Filter
   */
  ne(q) {
    return this.logical(q, 'ne')
  }

  /**
   * Op: gt
   * @param q
   * @return Filter
   */
  gt(q) {
    return this.logical(q, 'gt')
  }

  /**
   * Op: ge
   * @param q
   * @return Filter
   */
  ge(q) {
    return this.logical(q, 'ge')
  }

  /**
   * Op: lt
   * @param q
   * @return Filter
   */
  lt(q) {
    return this.logical(q, 'lt')
  }

  /**
   * Op: le
   * @param q
   * @return Filter
   */
  le(q) {
    return this.logical(q, 'le')
  }
}

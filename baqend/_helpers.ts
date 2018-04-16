import { concat, filter, map, mapValues, mergeWith, pick, reduce } from 'lodash'

/**
 * @param {number[]} numbers
 * @return {number}
 */
export function meanValue(numbers: number[]): number {
  return reduce(numbers, (mean, n) => mean + (n / numbers.length), 0)
}

/**
 * @param {T[]} numbers
 * @return {number[]}
 * @type T
 */
export function finites(numbers: any[]): number[] {
  return filter(numbers, Number.isFinite)
}

/**
 * @param {Array<Object<T>>} objects
 * @return {Object<Array<T>>}
 * @type T
 */
export function mergeConcat<T>(objects: Array<{ [key: string]: T }>): { [key: string]: T[] } {
  if (objects.length === 1) {
    return mapValues(objects[0], a => [a])
  }

  return (mergeWith as any)(...objects, (a: any, b: any) => concat(a, b))
}


/**
 * Aggregates an array of runs.
 *
 * @param runs
 * @param fields
 * @return A mean containing the aggregated values.
 */
export function aggregateFields<U>(runs: U[], fields: Array<keyof U>) {
  const means = map(runs, run => pick(run, fields)) as Array<{ [key: string]: any }>
  return mapValues(mergeConcat(means), values => meanValue(finites(values)))
}

/**
 * Escapes a regular expression.
 *
 * @param str The string to escape.
 * @return The escaped string.
 */
export function escapeRegExp(str: string): string {
  return str.replace(/[[\]/{}()*+?.\\^$|-]/g, '\\$&')
}

/**
 * Turns a string into a matchable regular expression.
 */
export function toRegExp(str: string): RegExp {
  return new RegExp(escapeRegExp(str))
}

/**
 * Cleans all entries of an object which contain an empty value.
 */
export function cleanObject<T extends { [key: string]: any }>(obj: T): Required<T> {
  const result: Required<T> = Object.create(null)
  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      result[key] = value
    }
  }

  return result
}

/**
 * Assigns fields of the source to the target.
 */
export function assignObject<S>(target: S, source: S, ...keys: Array<keyof S>) {
  for (const key of keys) {
    target[key] = source[key]
  }
}

/**
 * Appends an element to a possible empty array.
 */
export function appendItem<T>(array: T[] | null | undefined, item: T): T[] {
  if (array instanceof Array) {
    array.push(item)
    return array
  }

  return [item]
}
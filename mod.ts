/**
 * @module @cstroliadavis/is-object
 * @author Chris Strolia-Davis<web.dev@strolia-davis.us>
 * @copyright 2024
 * @licence [MIT]{@link ./LICENSE}
 * @version 1.0.1
 */

/**
 * Checks to see if a value is an object
 *
 * @example
 * Test examples:
 * ```ts
 * import { expect } from "jsr:@std/expect";
 *
 * expect(isObject({})).toBe(true);
 * expect(isObject(null)).toBe(false);
 * expect(isObject("not an object")).toBe(false);
 * expect(isObject([])).toBe(true);
 * expect(isObject(new Date())).toBe(true);
 * expect(isObject({any: 1})).toBe(true);
 * expect(isObject(undefined)).toBe(false);
 * ```
 * @param {unknown} input The value to check
 * @returns {boolean} true or false depending on if the value is a non-null object
 */
export const isObject = (input: unknown): boolean =>
  !!(input && typeof input === "object");

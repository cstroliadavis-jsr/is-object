/**
 * # is-object
 *
 * -------------------------------------------------------------------------------------------------
 *
 * [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
 * ![version](https://img.shields.io/badge/version-0.0.0-blue)
 *
 * ## Description
 *
 * A function that checks if a value is an object and returns true or false
 *
 * ### Motivation
 *
 * In short, it gets a bit irritating to have to constantly check that a value is a `typeof`
 * 'object' as well as not `null`. This is a simple function that simplifies that in an obvious way.
 *
 * ## Installation
 *
 * ### Deno
 *
 * ```shell
 * deno add jsr:@cstroliadavis/is-object
 * ```
 *
 * ### Node.js
 *
 * ```shell
 * npx jsr add jsr/is-object
 * ```
 *
 * ## Usage
 *
 * ### JavaScript or TypeScript
 *
 * ```ts ignore
 * import { isObject } from 'jsr:@cstroliadavis/is-object@0.0.0';
 *
 * const someValue = null;
 *
 * if(isObject(someValue))
 *   console.log("It's an object");
 * else
 *   console.log("This is no object");
 * ```
 * Writes `This is no object` to the console
 *
 * ## License
 *
 * [MIT](./LICENSE)
 *
 * Generally speaking, feel free to use and modify this, and please provide attribution.
 *
 * ## Contributing
 *
 * If you find a bug, or have a feature request, please open an issue.
 *
 * https://github.com/cstroliadavis-jsr/is-object/issues
 *
 * -------------------------------------------------------------------------------------------------
 *
 * @module @cstroliadavis/is-object
 * @author Chris Strolia-Davis<web.dev@strolia-davis.us>
 * @copyright 2024
 * @licence [MIT]{@link ./LICENSE}
 * @version 0.0.0
 */

/**
 * Creates a frozen, deep-copy of an object
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
 * @param input The value to check
 * @returns true or false depending on if the value is a non-null object
 */
export const isObject = (input: unknown): boolean =>
  !!(input && typeof input === "object");

export default isObject;

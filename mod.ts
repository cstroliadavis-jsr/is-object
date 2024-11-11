/**
 * @module @cstroliadavis/is-object
 * @version 0.0.0
 *
 * # is-object
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
 * In short, it gets a bit irritating to have to constantly check that a value is a `typeof` 'object'
 * as well as not `null`. This is a simple function that simplifies that in an obvious way.
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
 * ```ts
 * ```
 *
 * ## License
 *
 * See [MIT](./LICENSE)
 *
 * Generally speaking, feel free to use and modify this, and please provide attribution.
 *
 * ## Contributing
 *
 * If you find a bug, or have a feature request, please open an issue.
 *
 * https://github.com/cstroliadavis-jsr/is-object/issues
 */

/**
 * Creates a frozen, deep-copy of an object
 *
 * @example
 * Examples:
 * @code
 * ```ts
 * import { describe, it } from "jsr:@std/testing/bdd";
 * import { expect } from "jsr:@std/expect";
 *
 * const isObjectTests = describe("isObject");
 *
 * it({
 *   name: "returns true if the value is an object",
 *   parent: isObjectTests,
 *   fn() {
 *     expect(isObject({}).toBe(true);
 *   },
 * });
 * ```
 */
export const isObject = (input: any) => input;

export default isObject;

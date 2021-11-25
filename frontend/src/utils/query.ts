import {
  entries,
  filter,
  flatten,
  flow,
  isEmpty,
  map,
  negate,
} from "lodash/fp";

type Value = string | string[] | number | undefined | null;

type ParamPair = [string, string];

/**
 * Expands an entry
 * If v is an array of length n, returns n items with k as the entry key.
 *
 * So, given: ["tags", ["one", "two"]]
 * The result is: [["tags", "one"], ["tags", "two"]]
 *
 * Which is the necessary structure for URLSearchParams.
 */
const expand = ([k, v]: [string, Value]): ParamPair[] | undefined => {
  if (v === undefined || v == null) {
    return undefined;
  }
  if (v instanceof Array) {
    return v.map((n: string): ParamPair => [k, n]);
  }
  return [[k, v.toString()]];
};

/**
 * Converts some object into a URL safe query parameter object.
 * @param q an object containing some query parameters
 * @returns a URLSearchParams object
 */
export const queryToParams = <T extends Record<string, Value>>(
  q: T
): URLSearchParams => {
  const init: ParamPair[] = flow(
    // convert object to [string, Value] entries
    entries,
    // expand entries where Value is an array
    flow(
      // [k, v] => [[k, v]] where v may be an array
      map(expand),
      // [[k, v], [k, v]] => [k, v], [k, v]
      flatten
    ),
    // filter out empty entries
    filter(negate(isEmpty)),

    filter(([, v]) => v)
  )(q);

  // construct a URL query from the expanded object.
  return new URLSearchParams(init);
};

import type { IfNever, IfUnknown } from 'type-fest'
import type { OValue, Option } from './model'
import type { IfVoid, MapFn, NonNullish } from './types'

// export interface Option<T> {
//   // static of
//   // isNone
//   // isSome
//   // ap
//   // map
//   // flatMap
//   // match

//   isSome(): this is Option<T>
//   isNone(): this is Option<T>

//   ap<U>(opt: Option<(value: T) => U>): Option<NonNullish<U>>
//   map<U>(fn: (value: T) => U): Option<U>
//   flatMap<U>(fn: (value: T) => Option<NonNullish<U>>): Option<NonNullish<U>>

//   orElse<U extends IfUnknown<T, unknown, T>>(value: U): U | T

//   /**
//    * Unwraps an Option and will conditionally run the supplied functions based on the type of the Option.
//    */
//   match<
//     U extends IfVoid<U, void, IfNever<T, unknown, IfUnknown<T, unknown, T>>>,
//   >(onNone: () => U): U | T
//   match<
//     U extends IfVoid<U, void, IfNever<T, unknown, IfUnknown<T, unknown, T>>>,
//   >(onNone: () => U, onSome: (v: T) => U): IfVoid<U, undefined, U>
// }

export function ap<T, U>(fn: Option<(value: T) => U>) {
  return function apOption(o: Option<T>) {
    return o.ap(fn)
  }
}

export function map<T, U>(fn: (value: T) => U) {
  return function mapOption(o: Option<T>) {
    return o.map(fn)
  }
}

export function flatMap<T, U>(fn: (value: T) => Option<OValue<U>>) {
  return function flatMapOption(o: Option<T>) {
    return o.flatMap(fn)
  }
}

export function match<T>(...args: Parameters<Option<T>['match']>) {
  return function matchOption(o: Option<T>) {
    return o.match(...args)
  }
}

export const global_const: f64 = 1.6180339; // Exported constant
export let global_mut: i64 = 42; // Exported mutable
let counter: i64 = 0; // Count invocations

// Exported add function
export function add(a: i64, b: i64): i64 {
  return a + b;
}

// Exported count function
export function count(): i64 {
  counter += 1;
  return counter;
}

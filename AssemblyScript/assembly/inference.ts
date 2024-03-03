declare function echo_i32(v: i32): i32
declare function echo_i64(v: i64): i64
declare function echo_f32(v: f32): f32
declare function echo_f64(v: f64): f64

export function add_i32(a: i32, b: i32): i32 {
  return echo_i32(a + b);
}

export function add_i64(a: i64, b: i64): i64 {
  return echo_i64(a + b);
}

export function add_f32(a: f32, b: f32): f32 {
  return echo_f32(a + b);
}

export function add_f64(a: f64, b: f64): f64 {
  return echo_f64(a + b);
}

declare function import_int(i: i64): void
declare function import_float(i: f64): void

export function callback(): void {
  import_int(-123);
  import_float(-12.34);
}

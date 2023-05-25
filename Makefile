.PHONY: as rust

as:
	cd AssemblyScript && npm run build:all

rust:
	cd Rust && RUSTFLAGS="-C link-arg=-s -C target-feature=+multivalue" cargo build --release --target wasm32-wasi

all:
	make as && make rust

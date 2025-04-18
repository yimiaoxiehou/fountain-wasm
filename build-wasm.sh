#!/bin/bash

wasm-pack build --target web --out-dir pkg -s yimiaoxiehou
cd pkg
npm publish --access public
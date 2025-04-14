import * as wasm from "@yimiaoxiehou/fountain-wasm";

const content = 'Your wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish aYour wasm pkg is ready to publish a';
const enc = wasm.initEncode(content);

let val = wasm.nextVal(enc);
let data = wasm.decode(val);
while (data.length == 0) {
    val = wasm.nextVal(enc);
    data = wasm.decode(val);
}
console.log(new TextDecoder().decode(data));

# fountain-wasm

将 fountain-code 的 rust 实现 wasm 化，方便在浏览器中使用
## 用法
### 发送端
```js
import { init_encode, next_val } from '@yimiaoxiehou/fountain-wasm';

const data = new Uint8Array(1024);
// 填充 data
const encoder = init_encode(512, data); // 512 是包的大小

while (true) {
    const pkg = next_val(encoder);
    if (pkg) {
        // 发送 pkg
    }
    break;
}
```

### 接收方
```js
// 接收方
import { decode } from '@yimiaoxiehou/fountain-wasm';

while (true) {
    const data = decode(512, pkg); // 512 是包的大小
    if (data) {
    console.log(ok);
    }
    break;
}
```
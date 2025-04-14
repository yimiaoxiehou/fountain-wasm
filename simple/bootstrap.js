import("./index.js")
  .then(() => console.log("WASM module loaded successfully"))
  .catch(e => {
    console.error("Error importing `index.js`:", e);
    if (e instanceof WebAssembly.RuntimeError) {
      console.error("WASM panic details:", e.message);
    }
  });
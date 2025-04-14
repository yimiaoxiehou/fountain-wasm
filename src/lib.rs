extern crate wasm_bindgen;
extern crate rand;

use wasm_bindgen::prelude::*;
use ltcode::{Encoder, EncoderType, Decoder, Droplet, CatchResult::{Missing, Finished}};

mod soliton;
mod ltcode;
// 移除重复的 use ltcode::{Encoder,EncoderType};
// 引入外部crate
extern crate web_sys;
static mut INIT_DECODER: bool = false;
// 使用Option包装Decoder
static mut DECODER: Option<Decoder> = None;

// 启用 web_sys 的 console 特性
#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn initEncode(data: &str) -> *mut Encoder {
    let buf = data.as_bytes().to_vec();
    Box::into_raw(Box::new(Encoder::new(buf, 64, EncoderType::Random)))
}

#[wasm_bindgen]
pub fn nextVal(enc: *mut Encoder) -> *mut Droplet {
    let enc = unsafe { &mut *enc };
    match enc.next() {
        Some(droplet) => {
            Box::into_raw(Box::new(droplet))
        },
        None => std::ptr::null_mut()
    }
}

#[wasm_bindgen]
pub fn free_encoder(enc: *mut Encoder) {
    unsafe { Box::from_raw(enc); }
}

#[wasm_bindgen]
pub fn decode(drop_ptr: *mut Droplet) -> Vec<u8> {
    let drop = unsafe { Box::from_raw(drop_ptr) };
    unsafe {
        if DECODER.is_none() {
            log(&format!("init decoder :{}", drop.total));
            DECODER = Some(Decoder::new(drop.total, 64));
        }
        match DECODER.as_mut().unwrap().catch(*drop) {
            Missing(_) => Vec::new(),
            Finished(result, _) => result
        }
    }
}
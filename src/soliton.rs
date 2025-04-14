extern crate rand;

use rand::prelude::*;  // 使用prelude导入常用trait和类型
use rand::rngs::StdRng;  // 明确导入StdRng

pub struct IdealSoliton {
    limit: f32,
    rng: StdRng,
}

impl IdealSoliton {
    pub fn new(k: usize, seed: usize) -> IdealSoliton {
        let rng = StdRng::seed_from_u64(seed as u64); // 移除 mut
        IdealSoliton {
            limit: 1.0 / (k as f32),
            rng: rng,
        }
    }
}

impl Iterator for IdealSoliton {
    type Item = usize;

    fn next(&mut self) -> Option<usize> {
        let y = self.rng.gen::<f32>();
        if y >= self.limit {
            let res = (1.0_f32 / y).ceil() as usize;  // 明确指定为f32类型
            Some(res)
        } else {
            Some(1)
        }
    }
}

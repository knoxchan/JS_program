function random_16str() {
    for (s = '', i = 0; i < 3; i++) {
        s += (65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1);
    }
    return s
}

console.log(random_16str())

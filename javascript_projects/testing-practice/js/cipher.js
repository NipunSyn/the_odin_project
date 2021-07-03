//code from Medium- Suyeon Kang
class CaesarCipher {
  static encrypt(s, n) {
    return s
      .split("")
      .map((c) => {
        const ascii = c.charCodeAt(0);
        if (" " == c) return c;
        return c.toUpperCase().charCodeAt(0) + n > 90
          ? String.fromCharCode(ascii + n - 90 + 64)
          : String.fromCharCode(ascii + n);
      })
      .join("");
  }
}

module.exports = CaesarCipher
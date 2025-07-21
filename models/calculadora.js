class Calculadora {
  soma(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new Error('Os argumentos devem ser números.');
    }
    return arg1 + arg2;
  }

  sub(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new Error('Os argumentos devem ser números.');
    }
    return arg1 - arg2;
  }

  mult(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new Error('Os argumentos devem ser números.');
    }
    return arg1 * arg2;
  }

  div(arg1, arg2) {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new Error('Os argumentos devem ser números.');
    }
    if (arg2 === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    return arg1 / arg2;
  }
}

exports = new Calculadora();
module.exports = exports;

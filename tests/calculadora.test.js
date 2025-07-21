const calculadora = require('../models/calculadora.js');

describe('Calculadora', () => {
  test('soma de dois números', () => {
    const result = calculadora.soma(1, 2);
    expect(result).toBe(3);
  });

  test('soma com argumento não numérico', () => {
    expect(() => calculadora.soma(1, 'a')).toThrow('Os argumentos devem ser números.');
  });

  test('subtração de dois números', () => {
    const result = calculadora.sub(5, 3);
    expect(result).toBe(2);
  });

  test('subtração com argumento não numérico', () => {
    expect(() => calculadora.sub(5, 'b')).toThrow('Os argumentos devem ser números.');
  });

  test('multiplicação de dois números', () => {
    const result = calculadora.mult(2, 3);
    expect(result).toBe(6);
  });

  test('multiplicação com argumento não numérico', () => {
    expect(() => calculadora.mult(2, 'c')).toThrow('Os argumentos devem ser números.');
  });

  test('divisão de dois números', () => {
    const result = calculadora.div(6, 3);
    expect(result).toBe(2);
  });

  test('divisão com argumento não numérico', () => {
    expect(() => calculadora.div(6, 'd')).toThrow('Os argumentos devem ser números.');
  });

  test('divisão por zero', () => {
    expect(() => calculadora.div(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('divisão por zero com número negativo', () => {
    expect(() => calculadora.div(-5, 0)).toThrow('Divisão por zero não é permitida.');
  });
});

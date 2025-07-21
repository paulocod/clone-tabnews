function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

describe('Calculadora', () => {
  test('soma', () => {
    expect(soma(2, 1)).toBe(3);
  });

  test('sub', () => {
    expect(sub(2, 1)).toBe(1);
  });
});

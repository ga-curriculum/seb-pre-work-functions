describe('The multiply function', () => {
  it('successfully returns the result of multiplying two numbers', () => {
    const twenty = multiply(4, 5);
    const eighteen = multiply(2, 9);
    expect(twenty).toEqual(20);
    expect(eighteen).toEqual(18);
  });
});

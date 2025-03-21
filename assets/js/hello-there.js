describe('The helloThere function', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it('successfully greets using the given name', () => {
    helloThere('Jamal');
    expect(console.log).toHaveBeenCalledWith('Hello, Jamal!');
    helloThere('Ibrahim');
    expect(console.log).toHaveBeenCalledWith('Hello, Ibrahim!');
  });
});

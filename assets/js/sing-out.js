describe('The sing function', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it("successfully logs the message every time it's invoked", () => {
    sing();
    expect(console.log).toHaveBeenCalled();
  });
});

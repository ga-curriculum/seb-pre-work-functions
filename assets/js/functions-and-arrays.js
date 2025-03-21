describe('The printArray function', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it('logs each element of a given array', () => {
    const prizes = ['gold', 'silver', 'bronze', 'participation trophy'];
    printArray(['gold', 'silver', 'bronze', 'participation trophy']);
    for (let i = 0; i < prizes.length; i++) {
      expect(console.log).toHaveBeenCalledWith(prizes[i]);
    }
  });
});

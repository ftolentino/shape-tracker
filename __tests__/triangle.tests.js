import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    const equiTriangle = new Triangle(5,5,5)
    expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  });
});
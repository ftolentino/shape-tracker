import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly determine whether three lengths make an isosceles triangle', () => {
    const isocTriangle = new Triangle(5,5,7)
    expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  });
});
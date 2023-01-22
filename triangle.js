INVALID_ARGUMENTS = "The arguments were not valid";
NOT_A_TRIANGLE = "Impossible to create a triangle with those sides";
EQUILATERAL = "Equilateral triangle";
ISOSCELES = "Isosceles triangle";
SCALENE = "Scalene triangle;

/*
 * Given the three sides of a triangle it calculates the type of the
 * triangle.
 */
function getTriangleType(a, b, c) {
  type = "";
  // In Javascript isNaN returns true if the argument is Not a Number (NaN)
  if ( isNaN(a) || isNaN(b) || isNaN(c) ) { //Inputs are not numbers
    type = INVALID_ARGUMENTS;
  } else { // Inputs are numbers
    // Convert from objects to float
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    if ((a <= 0) || (b <= 0) || (c <= 0)) { // A side is not positive
      type = INVALID_ARGUMENTS;
    } else if ( (a+b <= c) || (a+c <= b) || (b+c <= a)) { // invalid triangle
      type = NOT_A_TRIANGLE;
    } else if ((a == b) && (b == c)) { // all sides equal = equilateral
      type = EQUILATERAL;
    } else if ((a == b) || (b == c) || (a == c)) { // 2 sides = isosceles
      type = ISOSCELES;
    } else { // All sides different = scalene
      type = SCALENE;
    }
  }
  return type;
}

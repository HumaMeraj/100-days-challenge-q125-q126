// Modify a method in an object to use the this keyword to access another property in the same object.
// An object with multiple properties and a method that interacts with them using 'this'
var rectangle = {
    length: 5,
    width: 6,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea()); // outputs: 30
// The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.

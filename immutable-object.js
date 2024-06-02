const obj = { name: 'Sachin', age: 30 };

Object.freeze(obj);

// Attempting to change the properties of the object
obj.name = 'Rahul'; // This will fail silently in non-strict mode, or throw an error in strict mode
obj.age = 40; // This will fail silently in non-strict mode, or throw an error in strict mode

console.log(obj); // Output: { name: 'Sachin', age: 30 }

// Attempting to add new properties to the object
obj.address = 'Mumbai'; // This will fail silently in non-strict mode, or throw an error in strict mode

console.log(obj); // Output: { name: 'Sachin', age: 30 }

// Attempting to delete properties from the object
delete obj.age; // This will fail silently in non-strict mode, or throw an error in strict mode

console.log(obj); // Output: { name: 'Sachin', age: 30 }

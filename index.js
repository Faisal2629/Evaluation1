// 2. Reverse Words in a String

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}
const result = reverseWords("JavaScript is fun");
console.log(result);



//4. Deep Copy of an Object
const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  
  function deepCopy({name, address}){
    return `name: ${name}, address: ${address}`;
  }

  const copy = deepCopy(obj);
  console.log(copy);
  // Output: { name: "John", address: { city: "New York", zip: 10001 } }
  
  
//   5. Merge Objects

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

function mergeObjects (obj1, obj2){
    return Object.assign({}, obj1, obj2);
}

const result = mergeObjects(obj1, obj2);
console.log(result);
// Output: { name: "John", age: 40, city: "New York" }



//6. Rearrange Fruits

function rearrangeFruits(fruits){
    return fruits.splice(0, 6)
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(fruits));



//7. Grouping and Sorting
const products = [
    { productName: "Laptop", category: "Electronics", quantity: 10, price: 1200, rating: 4.5 },
    { productName: "Smartphone", category: "Electronics", quantity: 15, price: 800, rating: 4.2 },
    { productName: "Headphones", category: "Electronics", quantity: 20, price: 50, rating: 4.0 },
    { productName: "Backpack", category: "Fashion", quantity: 30, price: 50, rating: 4.7 },
    { productName: "Shoes", category: "Fashion", quantity: 25, price: 80, rating: 4.3 },
    { productName: "T-Shirt", category: "Fashion", quantity: 40, price: 20, rating: 4.8 },
    { productName: "Desk", category: "Furniture", quantity: 5, price: 300, rating: 4.6 },
    { productName: "Chair", category: "Furniture", quantity: 8, price: 150, rating: 4.4 },
    { productName: "Table", category: "Furniture", quantity: 7, price: 200, rating: 4.1 },
    { productName: "Bookshelf", category: "Furniture", quantity: 3, price: 100, rating: 4.9 },
    { productName: "Camera", category: "Photography", quantity: 12, price: 500, rating: 4.7 },
    { productName: "Lens", category: "Photography", quantity: 6, price: 250, rating: 4.5 }
  ];
  

  function groupAndSortProducts (products){
     category.sort(function(a, b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
     });
     rating.sort(function(a, b){return b - a});

     return products;
  }
  
const groupedAndSortedProducts = groupAndSortProducts(products);
console.log(groupedAndSortedProducts);


//9. File Segregation

const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "image2.png",
    "text1.txt",
    "text2.txt",
    "photo1.jpg",
    "photo2.jpg",
    "program1.exe",
    "program2.exe",
    "data1.csv",
    "data2.csv",
    "report1.pdf",
    "report2.pdf",
    "image3.png",
    "text3.txt",
    "photo3.jpg",
    "document3.pdf"
  ];
  
function segregateFiles (files){
    function reducer(accumulator, currentValue, index) {
        const returns = accumulator + currentValue;
        console.log(
          `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
        );
        return returns;
      }
      
      array.reduce(reducer);
}  
segregateFiles (files)



//10. Employee Grouping and Sorting


const employees = [
    { name: "Alice", age: 30, salary: 50000, department: "HR" },
    { name: "Bob", age: 35, salary: 60000, department: "Finance" },
    { name: "Charlie", age: 28, salary: 55000, department: "HR" },
    { name: "David", age: 40, salary: 70000, department: "IT" },
    { name: "Eve", age: 32, salary: 65000, department: "Finance" },
  ];

  function groupByDepartment(employees){


    department.sort(function(a, b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
     });
     age.sort(function(a, b){return a - b});

     return employees;
  }
  
  console.log(groupByDepartment(employees));
  
  
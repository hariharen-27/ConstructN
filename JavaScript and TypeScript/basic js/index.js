//  function alerts(){
//     window.confirm("hello world");
// }

// function printvalue(){
//     var values=document.getElementById("say").value;
//     alert("Welcome: "+values);
// }

// function showcommentform() {  
//     var data="Name:<br><input type='text' name='name'><br>Comment:<br><textarea rows='5' cols='50'></textarea><br>";  
      
//     document.getElementById('mylocations').innerHTML=data;  
//      }  

//      function validate() {  
//         var msg;
//         //console.log("first");  
//         if(document.getElementById("userPass").value.length>5){  
//         msg="good";  
//         //console.log("first1");
//         }  
//         else{  
//         msg="poor";  
//         //console.log("first2");
//         }  
//         //console.log("first3");
//         document.getElementById('mylocation').innerText=msg;  
    
//     } 
//     const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
//     const colorBox = document.getElementById('colorBox');
//     function changeColor() {
//         // Get a random color from the array
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
//         // Change the background color of the color box
//         document.getElementById('colorBox').style.backgroundColor = randomColor;
//       }   
      
    // Function to read the click count from the cookie
function getClickCount() {
    const cookies = document.cookie;
    const match = cookies.match(/clickCount=(\d+)/);
  
    return match ? parseInt(match[1]) : 0;
  }
  
  // Function to set the click count cookie with an expiration date
  function setClickCount(count) {
    // Set the cookie with an expiration date (e.g., 7 days from now)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // 7 days from now
    document.cookie = `clickCount=${count}; expires=${expirationDate.toUTCString()}; path=/`;
  }
  
  // Initialize the click count
  let clickCount = getClickCount();
  
  // Get references to the buttons
  const clickButton = document.getElementById('clickButton');
  const showCountButton = document.getElementById('showCountButton');
  
  // Function to increment the click count and update the cookie
  function incrementClickCount() {
    clickCount++;
    setClickCount(clickCount);
  }
  
  // Function to display the click count
  function showClickCount() {
    alert(`Button clicked ${clickCount} times`);
  }
  
  // Attach click event listeners
  clickButton.addEventListener('click', function() {
    incrementClickCount();
  });
  
  showCountButton.addEventListener('click', function() {
    showClickCount();
  });
  
  function MyClass() {
    // Private variable
    var privateVariable = 'I am private';
  
    // Public method with access to private variable
    this.publicMethod = function() {
      console.log(privateVariable);
    };
  }
  
  var myObject = new MyClass();
  myObject.publicMethod(); // Outputs: I am private
  console.log(myObject.privateVariable); // Undefined (cannot access directly)
  
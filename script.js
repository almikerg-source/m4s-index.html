(function () {
  "use strict";


  var names = [
    "John",
    "Jenny",
    "Alice",
    "Bob",
    "Jake",
    "Mary",
    "James",
    "Sara"
  ];

  // Step 4: Loop over names array
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    // Step 5: Check if name starts with j or J
    if (name[0] === "j" || name[0] === "J") {
      displayText(makeString("Goodbye", name));
    } else {
      displayText(makeString("Hello", name));
    }
  }
})();

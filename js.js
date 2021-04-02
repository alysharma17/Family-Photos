var people= [
    "1. Me and My Sister (I'm the taller one)",
    "2. My Mom",
    "3. My Dad",
  ];
  var images= [
        "IMG_7201.JPG",
        "IMG_7055.jpg",
        "IMG_3442.PNG",
      ];
    
  var us=0; 
  function changeimage() {
   document.getElementById ("defaultimage").src= images [us];
    document.getElementById("start").innerHTML= people [us];
   us++;
   if (us==3) {
     us=0
   }
  
  }

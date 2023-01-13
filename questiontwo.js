var json = [{ 
        "id" :"raj", 
        "msg"   : "(for, for in, for of, forEach)", 
    }, 
    { 
        "id" : "raj1",  
        "msg"   : "(for, for in, for of, forEach)", 
    }]; 
    //for loop 
    for(var i = 0; i < json.length; i++) { 
        var obj = json[i]; 
     
        console.log(obj.id); 
        console.log(obj.msg); 
     
    } 
    //for Each 
    json.forEach(function(obj) { console.log(obj.msg); }); 
     
    //for In 
    for (var key in json) { 
    if (json.hasOwnProperty(key)) { 
      console.log(json[key].id); 
      console.log(json[key].msg); 
      
    } 
    } 
    //for Of 
    let text = ""; 
    for (let x of json[key].id) { 
     text += x;  
    } 
     console.log(text)

    //outputs :
//     raj
// questiontwo.js:14 (for, for in, for of, forEach)
// questiontwo.js:13 raj1
// questiontwo.js:14 (for, for in, for of, forEach)
// 2questiontwo.js:18 (for, for in, for of, forEach)
// questiontwo.js:23 raj
// questiontwo.js:24 (for, for in, for of, forEach)
// questiontwo.js:23 raj1
// questiontwo.js:24 (for, for in, for of, forEach)
// questiontwo.js:33 raj1
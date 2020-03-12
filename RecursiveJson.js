var user =  {
   name : "Shubham Jindal",
   address : {
      parmanentAddress : {
          city : "Agra",
          state : "Uttar Pradesh",
          latandLang : {
              latitide : "123456789",
              langitude : "987654321"
          }
      },
      officeAddress : {
        city : "Jaipur",
        state : "Rajasthan",
        latandLang : {
            latitide : "2333333333",
            langitude : "111111111"
        }
      }
   },
   interset : ["music" ,"fun" , "code"]
}

var comresseduser = {};
function compressUserData(user, parent){
   for(let key in user){
     if(Array.isArray(user[key])){
       var s = "";
       for(var i =0; i<user[key].length-1; i++){
           s = s + user[key][i] + ',';
       }
       s = s + user[key][i]
       comresseduser[parent + "_" + key] = s;
     }
     else if(typeof(user[key])=="object"){
       compressUserData(user[key], parent + "_" + key);
     } else {
       comresseduser[parent + "_" + key] = user[key];
     }
   }
}

compressUserData(user, "user");
console.log(comresseduser)

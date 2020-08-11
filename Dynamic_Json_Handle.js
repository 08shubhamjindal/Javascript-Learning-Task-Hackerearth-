supportedKey = (key) =>{
    var newkey ="";
      for(i=1; i<key.length; i++){
          if(key.charCodeAt(i)>=65 && key.charCodeAt(i)<=90){
              newkey = newkey + " " + key[i];
          }else newkey = newkey + key[i];
      }
      return key[0].toUpperCase() + newkey
    }




    var str = '';
    handleanotherArray = (data1, id1)=>{
       console.log(id1)
       var qqqq = document.getElementById(id1)
       if(qqqq==null){ 
         
        
        
        var zz = id1;
        var a = id1.indexOf("*");
            a = id1.substring(0, a);
        var table =  document.getElementById(a);
        var zz = id1;
        var a = id1.indexOf("*");
            a = id1.substring(0, a);
        var table =  document.getElementById(a);
        var xx = '';
        xx = xx +  "<table id="+zz+" border = '1'>" + '<tr>';

        for(let key in data1){
            for(let keyAgain in data1[key]){
                     xx= xx + '<th>' + supportedKey(keyAgain) + '</th>';
            }
        }
        xx= xx + '</tr><tr>';
       for(let key in data1){
           for(let keyAgain in data1[key]){
               if(Array.isArray(data1[key][keyAgain])){
                 var yy = JSON.stringify(data1[key][keyAgain]);
                 id1 = id1 + 's';
                 xx = xx + "<td><input type='button' value='Show Data' onclick=\'handleanotherArray("+yy+", \""+id1+"\")\'></td>"
               }else{
                    xx= xx + '<td>' + data1[key][keyAgain] + '</td>';
               }
           }
       }
        xx = xx + '</tr>'  + "</table border = '1'>"
        table.innerHTML = table.innerHTML + xx;
       }
       else{
           console.log('pahle')
       }
    }




    callfunction = (user) =>{
        var data = document.getElementById('data')
        for(let key in user){
             if (Array.isArray(user[key])){
                data.innerHTML = data.innerHTML + '<p>'+supportedKey(key) +'-------</p>'
                data.innerHTML = data.innerHTML + '<div id= '+str+'s'+'></div>'
                handleanotherArray(user[key], str + 's' + '*')
                str= str + 's';
             }else{
                 data.innerHTML = data.innerHTML + '<p>'+supportedKey(key) +'-------' + user[key] + '</p>'
             }
        }
    }
    
    const user = {
        "nodeOne": [
        {"shikharJindal": "06/07/2020Jindal"},
        {"mohitSindalJindal": 1231234567890},
        {"elementSeven": [
            {"qqqqUip": "06/07/2020Jindal"},
            {"ssssDip": [
                {"new1": "Newwwwwwww111"},
                {"new2": "neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"}]
            },
        ]}
        ],  
        "nodeTwo": "05/06/2020",
        "nodeThree": 777,
        "nodeFour": [
            {"elementOne": "B Street"},
            {"elementTwo": "City"},
            {"elementThree": "Area - 591323"},
            {"elementFour": [
                {"elementFive": "06/07/2020"},
                {"elementSix": 123},
                {"elementSeven": [
                    {"qqqqUip": "06/07/2020Jindal"},
                    {"ssssDip": 1231234567890}
                ]},
            ]}
        ],
        "nodeFive" : "shubham Jindalaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
    
    callfunction(user);

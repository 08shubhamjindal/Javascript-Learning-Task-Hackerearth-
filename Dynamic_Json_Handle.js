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
    handlingRecursiveTable = (arrayOfData, newId)=>{


       var qqqq = document.getElementById(newId)
       if(qqqq==null){ 

        var zz = newId;
        var a = newId.indexOf("*");
            a = newId.substring(0, a);
        var table =  document.getElementById(a);

        var recursiveTable = '';
        recursiveTable +=   "<table id="+zz+" border = '1'>" + '<tr>';

        for(let key in arrayOfData){
            for(let keyAgain in arrayOfData[key]){
                     recursiveTable +=  '<th>' + supportedKey(keyAgain) + '</th>';
            }
        }

        recursiveTable +=  '</tr><tr>';

        for(let key in arrayOfData){
           for(let keyAgain in arrayOfData[key]){

               if(Array.isArray(arrayOfData[key][keyAgain])){
                 var stringifyData = JSON.stringify(arrayOfData[key][keyAgain]);
                 newId = newId + 's';
                 recursiveTable  +=  "<td><input type='button' value='Show Data' onclick=\'handlingRecursiveTable("+stringifyData+", \""+newId+"\")\'></td>"
               }else{
                    recursiveTable +=  '<td>' + arrayOfData[key][keyAgain] + '</td>';
               }
           }
       }

        recursiveTable  +=  '</tr>'  + "</table border = '1'>"
        table.innerHTML = table.innerHTML + recursiveTable;
       }

       else{
           console.log('pahle')
       }
    }




    renderData = (user) =>{
        var data = document.getElementById('data')
        for(let key in user){
             if (Array.isArray(user[key])){
                data.innerHTML = data.innerHTML + '<p>'+supportedKey(key) +'-------</p>'
                data.innerHTML = data.innerHTML + '<div id= '+str+'s'+'></div>'
                handlingRecursiveTable(user[key], str + 's' + '*')
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
    
    renderData(user);

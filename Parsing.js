var jsondata;
fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json' )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        jsondata = data;
        //appendData(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });
    var map = {};
    var sum = {};
    var newmap = {};
    var check =false;
    function sorted(){
      check = true;
    }

    setTimeout(function(){
    var currenttime = new Date();
    var time = currenttime.getHours() + ":" + currenttime.getMinutes();
    time = '8:56';
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < jsondata.length; i++) {
        map[i] = 0;
        sum[i] = 0;
        newmap[i] = false;
        var div = document.createElement("div");
        div.innerHTML = '<p id="hii">Item Name-> ' + jsondata[i].itemname + ' <br/>Item Price->' + jsondata[i].price + '<br/></p>';
        var avaiTimeArraySepComma = jsondata[i].availabletime.split(',');
        var avaiTimeArraySepDashFirst = avaiTimeArraySepComma[0].split('-');
        var avaiTimeArraySepDashSecond = avaiTimeArraySepComma[1].split('-');
        var timeA = new Date();
        timeA.setHours(time.split(":")[0], time.split(":")[1]);
        timeB = new Date();
        timeB.setHours(avaiTimeArraySepDashFirst[0].split(":")[0], avaiTimeArraySepDashFirst[0].split(":")[1]);
        timeC = new Date();
        timeC.setHours(avaiTimeArraySepDashFirst[1].split(":")[0], avaiTimeArraySepDashFirst[1].split(":")[1]);
        timeD = new Date();
        timeD.setHours(avaiTimeArraySepDashSecond[0].split(":")[0], avaiTimeArraySepDashSecond[0].split(":")[1]);
        timeE = new Date();
        timeE.setHours(avaiTimeArraySepDashSecond[1].split(":")[0], avaiTimeArraySepDashSecond[1].split(":")[1]);
        if ((timeA >= timeB && timeA <= timeC) ||
            (timeA >= timeD && timeA <= timeE)) {
            div.innerHTML += '<button style="background-color:green" onclick="incrementcounter(' + i + ')">Add to Cart</button><br/>Quantity 0' + '<br/>-----';

        }else {
            div.innerHTML = div.innerHTML + '<button style="background-color:red">Cant Add</button>' + '<br/>-----<br/>';
        }
        mainContainer.appendChild(div);
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.cssClass { color: #F00; width: 300px;border: 15px solid green;padding: 50px; margin: 20px; }';
        mainContainer.appendChild(style);
        document.getElementById('myData').className = 'cssClass';
    }
  }, 1000);

function incrementcounter(id) {
    map[id] = map[id] + 1;
    newmap[id] = true;
}

function showdata(){
       var mainContainer = document.getElementById("showdata1");
        for (var i = 0; i < jsondata.length; i++) {
            if (map[i] > 0 && newmap[i]==true){
                newmap[i]=false;
                var div = document.createElement("div");
                div.id = 'ss'+i;
                var ss = div.id;
                if(document.getElementById(ss)!=null){
                  document.getElementById(ss).innerHTML =jsondata[i].itemname + ' ' + jsondata[i].price + '*' + map[i] + ' = ' + (jsondata[i].price)*(map[i]);
                  sum[i] = (jsondata[i].price)*(map[i]);
                }else{
                div.innerHTML = jsondata[i].itemname + ' ' + jsondata[i].price + '*' + map[i] + ' = ' + (jsondata[i].price)*(map[i]);
                  sum[i] = (jsondata[i].price)*(map[i]);
                }
                mainContainer.appendChild(div);
            }
        }
      var summm=0;
      for (var i = 0; i < jsondata.length; i++) {
        summm = Number(summm) + Number(sum[i]);
      }
      console.log(summm);
}
function searchValue() {
          let srchString = '';
          var searchField = $('#search').val().trim();
          if(searchField!=''){
          let srchVal = jsondata.filter(val => val.itemname.includes(searchField));
          srchVal.forEach((item) => {
              srchString += `<li>${item.itemname}>>${item.price}</li>`
          })
          $('#resultDiv').empty().append(srchString);
        }
}

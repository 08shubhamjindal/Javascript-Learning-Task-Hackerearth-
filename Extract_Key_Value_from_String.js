function custom_compare (a,b) {
  return a.value1 - b.value1;
}

var string  = "Credentials:                                   url:                      https://imfpush.au-syd.bluemix.net/imfpush/v1/apps/6c04e989-6329-4b1d-bb0a-b81cd6739f1e      apikey:                   1chsOytpsDGKaCVNZzmmoJGJ5j-7p_Kid2tt7FFSczjJ      appGuid:                  6c04e989-6329-4b1d-bb0a-b81cd6739f1e      iam_apikey_description:   Auto-generated for key 8f119863-6c67-44a1-b794-f9e8d5beb63f      iam_apikey_name:          SYDNEY_SERVICE_KEY_hardik      iam_role_crn:           crn:v1:bluemix:public:iam::::serviceRole:Manager      iam_serviceid_crn:        crn:v1:bluemix:public:iam-identity::a/e74aaab6adbe4c75a915ed5b8f4f0ca1::serviceid:ServiceId-59fee187-ae9c-4d74-84f5-1bbada679b49      clientSecret:             cf074c23-1836-4541-8be3-1847fdc3912a      plan:                     ADVANCED";
sample_data = [
  { name: 'url', value1: string.indexOf("url") },
  { name: 'apikey', value1: string.indexOf("apikey") },
  { name: 'appGuid', value1: string.indexOf("appGuid") },
  { name: 'iam_apikey_description', value1: string.indexOf("iam_apikey_description") },
  { name: 'iam_apikey_name', value1: string.indexOf("iam_apikey_name") },
  { name: 'iam_role_crn', value1: string.indexOf("iam_role_crn") },
  { name: 'plan', value1: string.indexOf("plan") },
  { name: 'clientSecret', value1: string.indexOf("clientSecret") },
  { name: 'iam_serviceid_crn', value1: string.indexOf("iam_serviceid_crn") },
];

function recreate (getstring){
  var colon  = getstring.indexOf(":");
  var key = "";
  var value="";
  for(var i=0; i<colon; i++){
    if(getstring[i]!=" "){
      key = key + getstring[i];
    }
  }
  var flag=1;
  for(var i=colon+1; i<getstring.length; i++){
    if(getstring[i]==" " && flag==1){
      continue;
    }else{
      value = value + getstring[i];
      flag=0;
    }
  }
  console.log(key);
  console.log(value);
}

sample_data.sort(custom_compare);
var xx;
var yy;

for (var i=0;i<sample_data.length-1; i++) {
  var newstring = " ";
  xx = sample_data[i].value1;
  yy = sample_data[i+1].value1;
   for(j=xx; j<yy; j++){
      newstring = newstring + string[j];
   }
   recreate(newstring);
}

newstring = " ";
for(j=sample_data[sample_data.length-1].value1; j<string.length; j++){
   newstring = newstring + string[j];
}
recreate(newstring);


----------------------------------------------
const str = `iam_role_crn:         crn:v1:bluemix:public:iam::::serviceRole:Manager  
plan:                     ADVANCED      
url:                      https://imfpush.au-syd.bluemix.net/imfpush/v1/apps/6c04e989-6329-4b1d-bb0a-b81cd6739f1e      
apikey:                   1chsOytpsDGKaCVNZzmmoJGJ5j-7p_Kid2tt7FFSczjJ      
appGuid:                  6c04e989-6329-4b1d-bb0a-b81cd6739f1e      
clientSecret:             cf074c23-1836-4541-8be3-1847fdc3912a      
iam_apikey_description:   Auto-generated for key 8f119863-6c67-44a1-b794-f9e8d5beb63f      
iam_apikey_name:          SYDNEY_SERVICE_KEY_hardik      
iam_serviceid_crn:        crn:v1:bluemix:public:iam-identity::a/e74aaab6adbe4c75a915ed5b8f4f0ca1::serviceid:ServiceId-59fee187-ae9c-4d74-84f5-1bbada679b49`;

const arr = str.split("\n");

const obj = arr.reduce((acc, item) => {
  const elements = item.split(": ");
  return {
    ...acc,
    [elements[0]]: elements[1].trim()
  };
}, {});

console.log(obj);

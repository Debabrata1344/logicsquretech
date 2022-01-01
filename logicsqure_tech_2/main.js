const table=document.getElementById("myTable")
console.log(table);

function getData(){
    let details;
    
    url2="https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";
     fetch("data.json").then(response =>response.json()).then(data => {
        if(data.cafes.length>0){
            let temp="";
             for(var i=0;i<data.cafes.length;i++){
                 console.log(data.cafes[i].location_id);
                 temp+="<tr>";
                 temp +="<td>"+i+"</td>";
                 temp +="<td>"+data.cafes[i].name+"</td>"
                 for(var j=0;j<data.places.length;j++){
                     if(data.cafes[i].location_id==data.places[j].id){
                         temp+="<td>"+data.places[j].locality+"</td>";
                         temp+="<td>"+data.places[j].postal_code+"</td>";
                         temp+="<td>"+data.places[j].lat+"</td>";
                         temp+="<td>"+data.places[j].long+"</td>";
                         console.log(data.places[j].street_no)
                     }
                 }
                 

                 
             }
             document.getElementById("data").innerHTML=temp;
            }
            
       
     })            //  response.json())
  
}


getData();
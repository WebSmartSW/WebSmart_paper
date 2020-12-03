
function applyForm(){
    console.log("hello")
    console.log(document.getElementById("title"))
   let description = document.getElementById("description").value;
   let title = document.getElementById("title").value;
   let leaderName = document.getElementById("leaderName").value;
   let leaderId = document.getElementById("leaderId").value;
   let teamName = document.getElementById("teamName").value;
   let phone = document.getElementById("phone").value;
   let email = document.getElementById("email").value;
   //console.log(description,title,leaderName,ledaerId,teamName,phone,email)
   $.ajax({
    type: "post",
    url: 'http://localhost:7000/admin/apply',
     datatype: 'json',
     contentType: "application/json; charset=utf-8",
    data:JSON.stringify({description:description,title:title||null,leaderName:leaderName,leaderId:Number(leaderId),
        teamName:teamName,phone:phone,email:email}),
   success: function(data){

     console.log(data)
     }
    }) 
}
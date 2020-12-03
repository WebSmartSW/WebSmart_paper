let members=[{
    name:"",
    id:""
}];
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
   let res;
   console.log(JSON.stringify({description:description,title:title||null,leaderName:leaderName,leaderId:Number(leaderId),
    teamName:teamName,phone:phone,email:email,members:JSON.stringify(members)}))
   $.ajax({
    type: "post",
    url: 'http://localhost:7000/admin/apply',
     datatype: 'json',
     contentType: "application/json; charset=utf-8",
    data:JSON.stringify({description:description,title:title||null,leaderName:leaderName,leaderId:Number(leaderId),
        teamName:teamName,phone:phone,email:email,members:JSON.stringify(members)}),
   success: function(data){
    res = data.length
     console.log(data)
     }
    }) 
    console.log(res)


}
function addMember(){
    let NumberOfMember = (members.length)-1;
    let memberNameList = document.getElementsByName("memberName");
    let memberIdList = document.getElementsByName("memberId");

   let name = memberNameList[NumberOfMember].value;
   let id = memberIdList[NumberOfMember].value;
   
   members[NumberOfMember]={name:name,id:id};
    
    let member={
        name:"",
        id:""
    };
    members.push(member)
   
    let header = document.querySelector("#temp");	//제거하고자 하는 엘리먼트
    header.parentNode.removeChild(header); 
    document.getElementById("member").innerHTML="" ;

    members.map((member,index)=>{
        memberForms(member,index);
    })
       
      

}

function memberForms(member,index){
    
    console.log(member)
    let memberForm =
    `   <div id="temp"><div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text bg-secondary text-white">팀원</span>
        </div>
        <input type="text" class="form-control" placeholder="팀원 이름" name="memberName" id=${index} value=${member.name}>
        <input type="text" class="form-control" placeholder="팀원 학번" name="memberId" id=${index} value=${member.id}>
      </div> </div>`
      document.getElementById("member").innerHTML += memberForm ;
      console.log(document.getElementById(index))

}
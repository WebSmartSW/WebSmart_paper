let temp = location.href.split("?");

let params = temp[1].split("=")[1];
let rowData = getTaem();
   
  
  
  
  function getTaem(){
      let data
      $.ajax({
          type: "get",
          url: 'http://localhost:7000/admin/team/list',
          datatype: 'json',
          async:false,
          success: function(msg){
            data = msg;
            
          }
      })
      
      return data;
  }
 
  

 
  function teamMates(member,index){
    
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
function fetchTeamMates(){
   
    let temp = rowData.map(v=>v.members);

   let members= (JSON.parse(temp[params-1]))
   if(members) members.map((member,index)=>teamMates(member,index))
}
function fetchData(){
let data = rowData[params-1]
console.log(data.description,document.getElementById("title"))
document.getElementById("description").value=data.description;
    document.getElementById("title").value=data.title;
  document.getElementById("leaderName").value=data.leaderName;
  document.getElementById("leaderId").value=data.leaderId;
   document.getElementById("teamName").value=data.teamName;
   document.getElementById("phone").value=data.phone;
document.getElementById("email").value=data.email;
}
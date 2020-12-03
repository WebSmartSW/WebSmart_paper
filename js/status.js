var columnDefs = [
  {headerName: "#", field: "index",sortable:true,filter: true},
    {headerName: "팀 이름", field: "teamName",sortable:true,filter: true},
   
    {headerName: "주제", field: "title",sortable:true,filter: true},
    {headerName: "작품 설명", field: "description",sortable:true,filter: true},
    {headerName: "팀장", field: "leaderName",sortable:true,filter: true},
    {headerName: "팀원", field: "members",sortable:true,filter: true}
  ];
 
  var rowData = getTaem();
  let temp = rowData.map(v=>v.members);
  
  for(let i = 0; i<temp.length;i++)
  {
  
   // members.push(JSON.parse(temp[i]))
    let members =(JSON.parse(temp[i]).map(v=>v.name)).toString();
    rowData[i].members = members;
  }
 


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
var gridOptions = {
  columnDefs: columnDefs,
rowData:rowData,

defaultColDef: {
  resizable: true,
},
onGridReady: function (params) {
  params.api.sizeColumnsToFit();

  window.addEventListener('resize', function () {
    setTimeout(function () {
      params.api.sizeColumnsToFit();
    });
  });
},
onCellClicked: function onCellClicked(event) {
  console.log('onCellClicked: ' + (event.data.id));
  window.location.href = `specific.html?id=${event.data.id}`;
}
};
document.addEventListener('DOMContentLoaded', function () {
  var eGridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
  gridOptions.api.sizeColumnsToFit();
});
function getTotal(){
if(document.getElementById("total")){
  console.log(rowData)
document.getElementById("total").innerHTML += String(rowData.length);
}
}
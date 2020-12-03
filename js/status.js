function table(){
var columnDefs = [
  {headerName: "#", field: "index",sortable:true,filter: true},
    {headerName: "팀 이름", field: "teamName",sortable:true,filter: true},
   
    {headerName: "주제", field: "title",sortable:true,filter: true},
    {headerName: "작품 설명", field: "description",sortable:true,filter: true},
    {headerName: "팀장", field: "leaderName",sortable:true,filter: true},
    {headerName: "팀원", field: "description",sortable:true,filter: true}
  ];

      
  // let the grid know which columns and what data to use
  var rowData = getTaem();
  console.log(rowData)
  var gridOptions = {
    columnDefs: columnDefs,
  rowData:rowData
  };
  console.log(rowData.length)
  var eGridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
  // setup the grid after the page has finished loading
  document.getElementById("total").innerHTML += String(rowData.length);

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
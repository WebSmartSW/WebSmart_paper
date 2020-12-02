var columnDefs = [
    {headerName: "팀 이름", field: "teamName",sortable:true,filter: true},
    {headerName: "팀장", field: "teamLeader",sortable:true,filter: true},
    {headerName: "주제", field: "title",sortable:true,filter: true},
    {headerName: "등록일자", field: "submitDate",sortable:true,filter: true}
  ];
 
  // specify the data
  var rowData = [
    {
    
    teamName:"웹 프로그래밍",
    teamLeader:"이진석",
    title:"스시소 경진대회",
    submitDate:"2020-11-30"
    },
  
    
    {teamName:"IOT 프로그래밍",
    teamLeader:"이진수",
    title:"라즈베리파이로 연주하기",
    submitDate:"2020-11-30",
 
},
{
    
    teamName:"마이크로프로세서 응용",
    teamLeader:"이해인",
    title:"베릴로그를 통한 AXI BUS 구현",
    submitDate:"2020-11-30",
}
  ];
      
  // let the grid know which columns and what data to use
  var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function() {
      var gridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(gridDiv, gridOptions);
  });
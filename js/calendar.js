var date = new Date();//오늘 날짜//내 컴퓨터 로컬을 기준으로 date에 Date 객체를 넣어줌
var today = new Date();//today의 Date를 세어주는 역할
var Dday = new Date(2020, 11 - 1, 6);

function prevCalendar() {//이전 달
    date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
    buildCalendar();
}

function nextCalendar() {//다음 달
    date = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
    buildCalendar();
}
function buildCalendar() {//현재 달 달력 만들기
    var doMonth = new Date(date.getFullYear(), date.getMonth(), 1); //이번 달의 첫째 날
    var lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0); //이번 달의 마지막 날
    
    var tbCalendar = document.getElementById("calendar");
    var tbCalendarYM = document.getElementById("tbCalendarYM");

    tbCalendarYM.innerHTML = date.getFullYear() + "년 " + (date.getMonth() + 1) + "월";

    /*while은 이번달이 끝나면 다음달로 넘겨주는 역할*/
    while (tbCalendar.rows.length > 2) {
        //열을 지워줌
        //기본 열 크기는 body 부분에서 2로 고정되어 있다.
        tbCalendar.deleteRow(tbCalendar.rows.length - 1);
        //테이블의 tr 갯수 만큼의 열 묶음은 -1칸 해줘야지 
        //30일 이후로 담을달에 순서대로 열이 계속 이어진다.
    }

    var row = null;
    row = tbCalendar.insertRow();
    //테이블에 새로운 열 삽입
    var cnt = 0;// count, 셀의 갯수를 세어주는 역할
    // 1일이 시작되는 칸을 맞추어 줌
    for (i = 0; i < doMonth.getDay(); i++) {
        /*이번달의 day만큼 돌림*/
        cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
        cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
    }
    /*달력 출력*/
    for (i = 1; i <= lastDate.getDate(); i++) {
        //1일부터 마지막 일까지 돌림
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
        if (cnt % 7 == 1) {/*일요일 계산*/
            cell.innerHTML = "<font color=tomato>" + i
        }
        if (cnt % 7 == 0) {/*토요일 계산*/
            cell.innerHTML = "<font color=skyblue>" + i
            row = calendar.insertRow();
        }
        /*오늘의 날짜에 노란색 칠하기*/
        if (date.getFullYear() == today.getFullYear() && date.getMonth() == today.getMonth() && i == today.getDate()) {
            //달력과 로컬의 날짜가 같으면 색깔
            cell.bgColor = "khaki";
        }

        if(date.getFullYear() == Dday.getFullYear() && date.getMonth() == Dday.getMonth() && i == Dday.getDate()) {
            //달력과 Dday의 날짜가 같으면 색깔
            cell.bgColor = "lightcoral";
        }
    }
}
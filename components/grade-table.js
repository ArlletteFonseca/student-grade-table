class GradeTable{
  constructor(tableElement,noGradesElement){
    this.tableElement=tableElement;
    this.noGradesElement=noGradesElement;
  }
  updateGrades(grades){
    var tbody=this.tableElement.querySelector("tbody");
    tbody.textContent=" ";
    for(var i=0;i<grades.length;i++){
      var tr=document.createElement("tr");
      var tdStudent=document.createElement("td");
      var tdCourse=document.createElement("td");
      var tdGrade=document.createElement("td");
      var tdOperations=document.createElement("td");
      tdStudent.textContent=grades[i].name;
      tdCourse.textContent=grades[i].course;
      tdGrade.textContent=grades[i].grade;
      tdOperations.textContent="hello"
      tr.appendChild(tdStudent);
      tr.appendChild(tdCourse);
      tr.appendChild(tdGrade);
      tbody.appendChild(tr);
      this.deleteGrade();
    }

    if(grades===" "){
      hiddenP.classList=" ";
    }else{
      hiddenP.classList="d-none";
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade=deleteGrade;
  }
  renderGradeRow(data,deleteGrade){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    var button=document.createElement("button");
    td4.appendChild(button);
    button.classList="btn";
    td1.textContent=data;
    td2.textContent=data;
    td3.textContent=data;
    button.textContent="DELETE";
    button.addEventListener("click",function(){
      deleteGrade(data.id);
    })

    return tr;
  }
}

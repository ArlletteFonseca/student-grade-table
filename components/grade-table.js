class GradeTable{
  constructor(tableElement){
    this.tableElement=tableElement;
  }
  updateGrades(grades){
    var tbody=this.tableElement.querySelector("tbody");
    tbody.textContent=" ";
    for(var i=0;i<grades.length;i++){
      var tr=document.createElement("tr");
      var tdStudent=document.createElement("td");
      var tdCourse=document.createElement("td");
      var tdGrade=document.createElement("td");
      tdStudent.textContent=grades[i].name;
      tdCourse.textContent=grades[i].course;
      tdGrade.textContent=grades[i].grade;
      tr.appendChild(tdStudent);
      tr.appendChild(tdCourse);
      tr.appendChild(tdGrade);
      tbody.appendChild(tr);
    }
  }
}

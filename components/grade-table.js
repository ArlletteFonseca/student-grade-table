class GradeTable{
  constructor(tableElement,noGradesElement){
    this.tableElement=tableElement;
    this.noGradesElement=noGradesElement;
  }
  updateGrades(grades){
    var tbody=this.tableElement.querySelector("tbody");
    tbody.textContent=" ";
    for(var i=0;i<grades.length;i++){
      var render=this.renderGradeRow(grades[i],this.deleteGrade);
      tbody.appendChild(render);
    }
    if(grades=== null){
        var p=document.getElementById("hidden-p");
        p.classList.remove("d-none");
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade=deleteGrade;
  }
  renderGradeRow(grade,deleteGrade){
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
    button.type="button";
    td1.textContent=grade.name;
    td2.textContent=grade.course;
    td3.textContent=grade.grade;
    button.textContent="DELETE";
    button.addEventListener("click",function(){deleteGrade(grade.id)});
    return tr;
  }
}

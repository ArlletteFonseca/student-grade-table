class GradeTable{
  constructor(tableElement,noGradesElement){
    this.tableElement=tableElement;
    this.noGradesElement=noGradesElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody=this.tableElement.querySelector("tbody");
    tbody.textContent=" ";
    for(var i=0;i<grades.length;i++){
      var render=this.renderGradeRow(grades[i],this.deleteGrade);
      tbody.appendChild(render);
    }
    if(grades.length===0){
      var p=document.getElementById("hidden-p");
      p.classList.remove("d-none");
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade=deleteGrade;
  }
  onUpdateClick(updateExistingGrade){
    this.updateExistingGrade=updateExistingGrade;
    console.log("Hello it works");
  }
  renderGradeRow(grade,deleteGrade,updateExistingGrade){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    var buttonTrash=document.createElement("button");
    var buttonEdit=document.createElement("button");
    td4.appendChild(buttonEdit);
    td4.appendChild(buttonTrash);
    buttonEdit.classList = "fas fa-edit btn btn-info btn-sm";
    buttonEdit.type = "button";
    buttonTrash.classList ="fas fa-trash btn btn-danger btn-sm m-1";
    buttonTrash.type="button";
    td1.textContent=grade.name;
    td2.textContent=grade.course;
    td3.textContent=grade.grade;
    buttonTrash.addEventListener("click",function(){deleteGrade(grade.id)});
    buttonEdit.addEventListener("click",function()
    {updateExistingGrade(grade.id)})
    return tr;
  }
}


class App{
  constructor(gradeTable,pageHeader){
    this.handleGetGradesError=this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess=this.handleGetGradesSuccess.bind(this);
    this.gradeTable=gradeTable;
    this.pageHeader=pageHeader;
  }
  handleGetGradesError(error){
    console.error("error");
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var gradesSum=0;
    var gradesLength=grades.length
    for(var i=0;i<grades.length;i++){
     gradesSum+=grades[i].grade;
    }
    var avgGrade=gradesSum/gradesLength;
    this.pageHeader.updateAverage(avgGrade);
  }
  getGrades(){
    $.ajax({
      method:"GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "bMeUYeQj"},
      success:this.handleGetGradesSuccess,
      error:this.handleGetGradesError
    })
  }
  start(){
    this.getGrades();
  }
}

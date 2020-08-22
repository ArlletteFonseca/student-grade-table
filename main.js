var tableElement=document.getElementsByClassName("grading-table")[0];
var gradeTable=new GradeTable(tableElement);
var headerElement=document.getElementsByClassName("page-header")[0];
var pageHeader=new PageHeader(headerElement);
var grades=new App(gradeTable,pageHeader);
grades.start();

class GradeForm{
  constructor(formElement){
    this.formElement=formElement;
    this.handleSubmit=this.handleSubmit.bind(this);
    addEventListener("click",formElement);
  }
  onSubmit(createGrade){
    this.createGrade=createGrade;
  }
  handleSubmit(event){
   event.preventDefault;
    console.log("hi");
  }
}

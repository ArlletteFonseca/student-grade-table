class PageHeader{
  constructor(headerElement){
    this.headerElement=headerElement;
  }

  updateAverage(newAverage){
    var header=this.headerElement;
    var badge=header.querySelector("span");
    badge.textContent=newAverage;
  }
}

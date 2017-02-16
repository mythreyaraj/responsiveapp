(function(){
  var navitems = document.getElementsByClassName('navitems');
  for(i=0;i<navitems.length;i++){
      navitems[i].addEventListener("click",function(){
        for(i=0;i<navitems.length;i++){
          navitems[i].classList.remove('active');
        }
        this.classList.add('active');
      });
  }
  var workshop = document.getElementsByClassName('workshopinfo');
  for(i=0;i<workshop.length;i++){
    workshop[i].addEventListener("click",function() {
      console.log(this.childNodes);
      document.getElementById('modalcontent').src=this.childNodes[1].src;
      document.getElementById('modal').style.display="block";
      document.getElementById('close').addEventListener('click',function(){
        document.getElementById('modal').style.display="none";
      });
    });
  }

})();

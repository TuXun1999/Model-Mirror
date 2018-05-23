function File(name, update){
 this.name=name;
 this.update=update;
}
File.prototype.getName=function(){
 return this.name;
}
File.prototype.getRealName=function(){
 var real_name;
 var breach=this.name.lastIndexOf('.');
 real_name=this.name.slice(0,breach);
 return real_name;
}

File.prototype.getUpdate=function(){
 return this.update;
}

var Files=new Array();

Files[0]=new File("alpine.htm","2018-5-18");
Files[1]=new File("archive.raspberrypi.htm","2018-5-19");
Files[2]=new File("HHVM.htm","2018-5-19");
/* Add more files here */

function searchFile(keywords){
 var showFiles=new Array();
 var i;

 var content="";
 for(i=0;i<Files.length;i++){
  if(Files[i].getName().indexOf(keywords)>=0){
    content+="<tr>" + "<td align='left' width='400px'>" + "<a class='file_name' href=Files/" + Files[i].getName() +" target='blank'>" + 
              Files[i].getRealName() + "</a></td><td align='center' width='150px'>" + Files[i].getUpdate() + "</td><td align='center' width=200px><a>Help</a></td></tr>";
    }
 }
 if(content==""){content+="<tr><td colspan=3>No File Matched</td></tr>";}
 return content; 
}





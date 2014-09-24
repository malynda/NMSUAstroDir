faculty = [];
$.getJSON( "rstaff.json", function(json) {
  faculty = json.rstaff;
console.log(faculty)
  var html = "<h1>Research Staff</h1>"
  html += "<table>"
  for(var i=0; i<faculty.length; i++) {
      html += "<tr><td><a href='http://astronomy.nmsu.edu/dept/html/directory.faculty."+faculty[i].email+".shtml'>"+faculty[i].name+"</a></td>"
      html += "<td>Office: "+faculty[i].office+"</td>"
      html += "<tr><td>"+faculty[i].title+"</td>"
      html += "<td>Phone: "+faculty[i].phone+"</td><tr>"
      html += "<tr><td></td><td>E-mail: "+faculty[i].email+"</td><tr>"
      html += "<tr><td></td><td>Research Interest: "+faculty[i].research+"</td><tr>"
      html += "<tr><td height=10>&nbsp</td></tr>"
  }
  html += "</table><br><br><p>Please append '@nmsu.edu' to all contact e-mail addresses listed above.</p>"
   $(".container").append(html);

});

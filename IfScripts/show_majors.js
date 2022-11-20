let studentName ;
let studentMajor = "CSCI";

if (studentMajor == "BIOL" ) {
    console.log(" Major Code : BIOL " +
         " Name Of Major : Biology " +
         " Department : Science Bldg, Room 310 ")
}else if (studentMajor == "CSCI") {
    console.log(" Major Code : CSCI " + 
            " Name Of Major : Computer Science " + 
            " Department : Sheppard Hall, Room 314 ");
}else if (studentMajor == "ENG ") {
    console.log(" Major Code : ENG " + 
            " Name Of Major: English" + 
            " Department : Kerr Hall, Room 201 ");
}else if (studentMajor == "HIST ") {
    console.log(" Major Code : HIST " + 
            " Name Of Major : History " + 
            " Department : Kerr Hall, Room 114 ");
}else if (studentMajor == "MKT"  ) {
    console.log("Major Code : MKT" + 
            "Name Of Major : Marketing" + 
            "Department : Westly Hall, Room 310");
}else {
    console.log("Not Found");
}

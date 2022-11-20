let majorCode;
let majorName;
let dept;
let studentMajorCode = "HIST";

switch (studentMajorCode) {
    case 0:
    case 1:
        majorCode = "BIOL";
        majorName = "Biology";
        dept = "Science Bldg, Room 310";
        break;
    case 2 :
        majorCode = "CSCI";
        majorName = "Computer Science";
        dept = "Sheppard Hall, Room 314";
        break;
    case 3 :
        majorCode = "ENG";
        majorName = "English";
        dept = "Kerr Hall, Room 201";
        break;
    case 4 :
        majorCode = "HIST";
        majorName = "History";
        dept = "Kerr Hall, Room 114";
        break;
    case 5 :
        majorCode = "MKT";
        majorName = "Marketing";
        dept = "Westly Hall, Room 310";
        break;
    default:
        break;
}
console.log(majorCode);
console.log(majorName);
console.log(dept);
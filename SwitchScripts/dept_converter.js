let deptCode = 5;
let deptName;

switch (deptCode)  {
    case 0 :
    case 1 :
        deptName = "Marketing";
        break;
    case 2 :
    case 3 : 
    case 4 :
    case 5 :
        deptName = "Human Resources";
        break;
    case 6 :
    case 7 :
    case 8 :
    case 9 :
    case 10 :
        deptName = "Accounting";
        break;
    case 11 :
    case 12 :
        deptName = "Legal";
        break;
    case 13 :
    case 14 :
    case 15 :
    case 16 :
    case 17 :
    case 18 :  
    deptName = "IT";
        break;          
    case 19 :
    case 20 :
        deptName = "Customer Relations";
        break;
    default:
        deptName = "not found.";
}

console.log(deptName)
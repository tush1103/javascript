//object geeks1
let geeks1 = {
    name: "ABC",
    article: "C++"
}
//object geeks2
let geeks2 = {
    name: "CDE",
    article: "JAVA"
}
 
//object geeks3
let geeks3 = {
    name: "IJK",
    article: "C#"
}
 
function printVal() {
    console.log(this.name + " contributes about " + 
                this.article + "<br>");
}
 
let printFunc2 = printVal.bind(geeks1);
//using bind()
// bind() takes the object "geeks1" as parameter//
printFunc2();
 
let printFunc3 = printVal.bind(geeks2);
printFunc3();
 
let printFunc4 = printVal.bind(geeks3);
printFunc4();
//uniquely defines each objects
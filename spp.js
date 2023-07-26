
const calcAge2=function(brithyeah){
    return 2037-brithyeah;
}
const calcAge3=brithyeah => 2037-brithyeah;
const age3 = calcAge3(1991);
console.log(age3);
const yearsUnitlRetirenent= (brithyeah,firstName)=>{
    const age = 2037-brithyeah;
    const retirement=65-age;
    // return retirement;
    return `${firstname} retires in ${retirement}`
    
}




function calcAge1(birthyear){
    return 2037-birthyear;
}
const age1 = calcAge1(1991);
console.log(age1);
const calcAge2 = function(birthyear){
    return 2037-birthyear;

}
const age2=calcAge2(1995);
console.log(age1,age2);
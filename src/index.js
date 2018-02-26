module.exports = function check(str, bracketsConfig) {

let stack=[];

for (let i=0; i<str.length; i++) {
    console.log (`i=`+i);
    for (let j=0; j<bracketsConfig.length; j++) {


        if (str[i] === bracketsConfig[j][0]) {stack.push(str[i]); }


       // console.log (stack);

        if (str[i] === bracketsConfig[j][1]) {
            console.log (`j=`+j);

            let a = stack.pop(str[i]);
            console.log (stack);

            if (a === undefined){  console.log ("undef"); return false;}

            if (a != bracketsConfig[j][0]){  console.log ("expected " +bracketsConfig[j][1] + "found " + a ); return false;}


        }
    }

    }
    if (stack.length!=0 )return false;
    return true;






  // your solution
}

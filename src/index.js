module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let ccount = 0;

    for (let i = 0; i < str.length; i++) {
        console.log(`i=` + i);
        for (let j = 0; j < bracketsConfig.length; j++) {

            if (str[i] === bracketsConfig[j][0] && (bracketsConfig[j][0] !== bracketsConfig[j][1])) {
                stack.push(str[i]);
            }

            if (bracketsConfig[j][0] == bracketsConfig[j][1] && (str[i] === bracketsConfig[j][0])) {
                ccount = 0;
                for (let k = 0; k < stack.length; k++) {
                    if (stack[k] == bracketsConfig[j][0]) ccount++;
                    console.log("eq count="+ccount);
                }

                if (stack.length == 0 || ccount == 0) {stack.push(str[i]);  console.log("first push ="+str[i]);}


                else if (stack[stack.length - 1] == str[i]) {let a=stack.pop() ; console.log("first pop ="+a);}

                else {stack.push(str[i]); console.log("just push ="+str[i]);};


            }


            if (str[i] === bracketsConfig[j][1] && (bracketsConfig[j][0] !== bracketsConfig[j][1])) {
                console.log(`j=` + j);

                let a = stack.pop(str[i]);
                console.log(stack);

                if (a === undefined) {
                    console.log("undef");
                    return false;
                }

                if (a != bracketsConfig[j][0]) {
                    console.log("expected " + bracketsConfig[j][1] + "found " + a);
                    return false;
                }

            }
        }
    }

if (stack.length != 0) return false;
return true;
}

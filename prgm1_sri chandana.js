var n = 6;
var len = n * n;

let res = [];

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));


function matrix(n) {
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        for(var k=0;;k++){

        res[i][j]=alphabet[k];
        }
    }
}

    for(var i=0;i<n;i++){
        for(var j=i;j<n;j++){
            temp[0][0]=res[i][j];
            res[i][j]=res[j][i];
            res[j][i]= temp[0][0];
        }
    }
}
  


console.log(res);
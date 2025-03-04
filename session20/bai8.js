let n = +prompt("Nhập n số nguyên tố đầu tiên");
let count = 0;
let i = 2;
let text = `${n} số nguyên tố đầu tiên là: `;
if(Number.isInteger(n) && n > 0){
    while(count < n){
        let found = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0){
                found = false;
            }
        }
        if(found){
            text += i;
            if(count < n - 1){
                text += ",";
            }
            count++;
        }
        i++;
    }
    console.log(text);
}
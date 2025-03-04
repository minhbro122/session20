let num = +prompt("Mời bạn nhập 1 số nguyên dương");
let sum = 0;
if(Number.isInteger(num) && num>0){
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    alert(sum);
}else{
    alert(`Dữ liệu nhập vào không hợp lệ`);
}
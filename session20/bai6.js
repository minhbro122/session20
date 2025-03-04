let num = +prompt("Nhập số cần kiểm tra");
let found = 0;
for (let i = 1; i <= num; i++) {
    if(num % i === 0){
        found++;
    }
}
if(found === 2){
    alert(`Số ${num} là số nguyên tố`);
}else{
    alert(`Số ${num} không phải là số nguyên tố`);
}
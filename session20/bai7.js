let n = +prompt("Mời nhập số fibo sẽ hiển thị");
let first = 1;
let second = 1;
let text = `Dãy fibonacci từ f(0) đến f(${n}) là: 1, 1, `;

if(Number.isInteger(n) && n > 0){
    for (let i = 0; i < n - 2; i++) {
        let next = first + second;
        text += next;
        if(i < n-3){
            text += " ,";
        }
        first = second;
        second = next;
    }
    alert(text);
}else{
    alert('Dữ liệu không hợp lệ');
}
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(Object.keys(person))
console.log(Object.values(person))

let originaString = "Lop hoc web cua KITS";
console.log(originaString.length)
console.log(originaString.slice(-12,-9))
console.log(originaString.replaceAll(" ",","))

const check = (text) =>{
   return text.includes("Dev")? true:false;
}
console.log(check("Dev"))

const soNguyenTo = (nguyenTo) => {
    let result = false;
    if(nguyenTo>1){
        let count = 0;
        for (i = 1 ; i <= nguyenTo; i++){
            if(nguyenTo % i === 0){
                count++;
            }
        }
        if(count ===2){
            result = true;
        }
    }else{
        result = false;
    }
    return result;
    
}
console.log(soNguyenTo(27))

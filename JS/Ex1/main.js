//bai 1
let math = (a,b) =>{
    return a*b;
}
//bai 2
let chanLe = (i) => {
    (i%2 == 0)? console.log("i la so chan") : console.log("i la so le")
}
//bai 3
let hello =(name) => {   
    return "xin chao " +  name;
}
//bai 4
let hello1 =(name,age) => {
    return "xin chao " +  name + " " + age + " " + "tuoi";
}

console.log(math(2,4))
chanLe(6)
console.log(hello("luan"))
console.log(hello1("luan",23))

//bai 5
const trungBinh = (diem) =>{
    if(diem<5){
        return "ko dat"
    }
    else if (diem>=5 && diem<6.5){
        return "Dat"
    }
    else if (diem>=6.5 && diem<8){
        return "Kha"
    }
    else if (diem>=6.5 && diem<8){
        return "kha"
    }
    else if (diem>=8){
        return "gioi"
    }
    else{return "ko hop le" }
}
console.log(trungBinh(2))

// cach 2

// switch (diem) {
//     case diem<5:
//         return "ko dat";
//       break;
//     case diem>=5 && diem<6.5:
//         return "Dat";
//       break;
//       case diem>=6.5 && diem<8:
//         return "Kha";
//         break;
//         case diem>=6.5 && diem<8:
//             return "kha";
//         break;
//         case diem>=8:
//             return "gioi";
//         break;
//     default:
//         return "undefined";
//   }

//bai 6
let print = (n) =>{
    for (let i = 0 ; i < n; i++){
        console.log(i) ;
    }
}
print(5)
//bai 7
let sum = (a) =>{
    let result = 0;
    for(let i =0; i<=100; i++){
        result += i;
    }
    return result
}
console.log(sum(100))

//bai 8
document.getElementsByClassName("introduce")[0].style.color = "yellow";
document.getElementById("introduce").style.color = "red";

const para = document.createElement("p")
document.body.appendChild(para)

const changeName = () => {
    document.getElementById("myName").innerHTML= "TDMH";
}
const myFunction = () => {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}

//bai 9
const students = ["Vỹ","Khương","Quỳnh Anh","Nhất Anh", "Tiến Anh", "Đức Anh"];
console.log(students.length)
const viTri = (student) =>{
    return students.indexOf(student)
}
console.log(`Vị trí index của Nhất Anh là ${viTri("Nhất Anh")}`);
delete students[0];
console.log(students)
console.log(students.join("-"))
delete students[2]
console.log(students)
const students2 = ["Sơn Anh","Phước"]
const KITS = students.concat(students2)
console.log(KITS)
console.log(Math.round(Math.random() *100));
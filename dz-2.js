'Use strict';

//Задание 1

//for(i=10; i>=1; i--) {
//  alert(i);
//}

//Задание 2

//for (i=2; i<=10; i++) {
//if(i % 2 == 0){
//   alert(i);
//} 
//}

//Задание 3

//for (i=11; i>=1; i--) {
//if(i % 2 == 1){
//   alert(i);
//} 
//}

//Задание 4

s = '';
n = 1;

while (n <= 11) {
  if(n % 2 == 0) {
  s += `<img src="images/${n}.jpg" width=200; height=200; style='border: 7px solid green; padding: 5px;'>`; 
    
}else {
  s += `<img src="images/${n}.jpg" width=200; height=200; style='border: 7px solid blue; padding: 5px;'>`;
}
n++ 
}
pic.innerHTML = s;






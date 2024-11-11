// TASK-A
let month = +prompt('1-ден 12-ге дейін сан енгізіңіз:')

if (month == 3, 4, 5) {
  alert('Айы:' + month + '\n' + 'Мезгілі: Көктем')
} else if (month == 6, 7, 8) {
  alert('Айы:' + month + '\n' + 'Мезгілі: Жаз')
} else if (month == 9, 10, 11) {
  alert('Айы:' + month + '\n' + 'Мезгілі: Күз')
} else if (month == 12, 1, 2) {
  alert('Айы:' + month + '\n' + 'Мезгілі: Қыс')
} else{
  alert('"1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз')
}

//TASK-B
let a = +prompt('Бірінші санды енгізіңіз:')
let b = +prompt('Екінші санды енгізіңіз:')

switch(a,b){      
    case a>=b:
        alert(' Үлкен сан' + a && ('Орташа мән'(a + b) / 2))
    break;
    case b>=a:
        alert(' Үлкен сан' + b && ('Орташа мән'(a + b) / 2))
    break;
    default:
    alert('Error')
}

//TASK-C
let a = +prompt('Бірінші санды енгізіңіз:')
let b = +prompt('Екінші санды енгізіңіз:')
let с = +prompt('Үшінші санды енгізіңіз:')

if (a >= b || a >= c) {
  alert('Үлкен сан:' + a && ('Кіші сан:' + b || 'Кіші сан:' + c) && (a - b - c))
}
else if (b >= a || b >= c) {
  alert('Үлкен сан:' + b && ('Кіші сан:' + c || 'Кіші сан:' + a) && (a - b - c))
}
else if (c >= a || c >= b) {
  alert('Үлкен сан:' + c && ('Кіші сан:' + a || 'Кіші сан:' + b) && (a - b - c))
}
else{
    alert('Error')
}

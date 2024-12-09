//TASK-1

let school = {
  name: 'AmjiltCyberSchool',
  phoneNumber: +777707070707,
  students: [
    {
      name: 'Asadbek',
      top: '24/8',
      progress: 100,
      lesson: 2,
    },
    {
      name: 'Meir',
      top: '24/8',
      progress: 90,
      lesson: 2,
    },
    {
      name: 'Asan',
      top: '24/3',
      progress: 70,
      lesson: 2,
    },
    {
      name: 'Usen',
      top: '24/5',
      progress: 90,
      lesson: 2,
    },
    {
      name: 'Omar',
      top: '24/1',
      progress: 60,
      lesson: 2,
    },
  ],
  //TASK-2
  changeSchoolName: () => {
    let newschoolName = prompt('Jana mekteptin atyn engiziniz')
    newschoolName = school.name
    console.log(school.name)
  },
  //TASK-3
  changePhoneNumber: () => {
    let newPhoneNumber = prompt('Jana mekteptin atyn engiziniz')
    newPhoneNumber = school.phoneNumber
    if (newPhoneNumber == ' ') {
      return console.log(school.phoneNumber)
    } else {
      console.log(newPhoneNumber)
    }
  },
  //TASK-4
  listStudentNames: () => {   
    return this.students.name
  },
}
console.log(school);


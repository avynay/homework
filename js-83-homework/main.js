console.log('--- ↓ задание 1 ↓ ---')
const user = {
  name: 'Andrey',
  age: 24,
  sex: 'male',
  isAdmin: true,
  sayHello(name) {
    console.log(`Hello, ${name} =)`)
  }
}
console.log(user.name, user.age, user.sex, user.isAdmin)
console.log('--- ↓ задание 2 ↓ ---')
user.sayHello('Andrey')
console.log('--- ↓ задание 3 ↓ ---')
const users = [
  {
  name: 'Arnold',
  age: 30,
    sex: 'male',
      isAdmin: true
  },
  {
  name: 'Biba',
  age: 18,
    sex: 'female',
      isAdmin: false
  },
  {
  name: 'Boba',
  age: 22,
    sex: 'male',
      isAdmin: false
  },
  {
  name: 'Pupa',
  age: 40,
    sex: 'male',
      isAdmin: false
  },
  {
  name: 'Lupa',
  age: 34,
    sex: 'female',
      isAdmin: false
  }
]
function count(array){
  let userNum = 0
  for (let i=0;i<array.length;i++) {
    if (array[i].isAdmin === false) {
      userNum ++;
    }
  }
  console.log(userNum)
}
count(users)

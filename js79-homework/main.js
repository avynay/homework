let age = 24
if (age >= 18) {
  console.log('Вы совершеннолетний')
}
else{
  console.log('Вам еще нет 18')
}
age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам нет 18 :c')

let welcome =18
switch (welcome) {
  case 17:
    alert('Some text if right');
    break;
  case 18: 
  case 24:
    alert('Welcome to the club,buddy');
    alert('stick yout finger in m...');
    break;
  default:
    alert('default');
}
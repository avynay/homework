const tick = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let b = 1;b < tick.length;b = b + 2)
  console.log(tick[b])

const line = '--------------------'
console.log(line)

const rainbow = ['Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Голубой', 'Синий', 'Фиолетовый']
rainbow[1] = 'Фиолетовый'
rainbow[2] = 'Синий'
rainbow[3] = 'Голубой'
rainbow[4] = 'Зеленый'
rainbow[5] = 'Желтый'
rainbow[6] = 'Оранжевый'
rainbow[7] = 'Красный'
for(let i = 1;i < rainbow.length;i = i + 1)
  console.log(rainbow[i])


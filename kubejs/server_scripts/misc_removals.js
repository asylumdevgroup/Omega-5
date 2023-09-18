onEvent('recipes', event => {
    event.remove({output: 'cyclic:uncrafter'})
    event.remove({output: 'crossroads:ingot_bronze'})
  })
import { mQ } from './lib/miniQuery'

let counter = 0
mQ('button')
  .addClass('btn')
  .on('click', () => {
    counter++
    mQ('span')
      .addAttr('data-counter', counter)
      .html(counter)
  })

mQ('h1').destroy()

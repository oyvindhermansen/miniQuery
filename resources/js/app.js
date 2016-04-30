import { mQ } from './lib/miniQuery'

mQ('h1')
  .addClass('hey')
  .removeClass('hey')
  .addClass('lol')
  .on('click', () => {
    if (mQ('h1').hasClass('lol')) {
      mQ('h1').hide()
    }
  })

mQ('button').on('click', () => {
  mQ('h1').show()
})

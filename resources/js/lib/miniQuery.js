'use strict'

class miniQuery {
  constructor(selector) {
    this.selector = selector
    this.mQuerySelector = document.querySelectorAll(this.selector)
    if(!this.selector) throw new Error('There is no selector')
  }

  html(markup) {
    if (!markup) throw new Error('There is no markup / text')
    this.mQuerySelector[0].innerHTML = markup
    return this
  }

  loop(data, cb) {
    if (typeof cb != 'function') throw new Error('Loop takes a callback function')
    for (let i in data) {
      cb(i, data[i])
    }
    return data
  }

  on(event, cb) {
    this.mQuerySelector[0].addEventListener(event, cb, true)
    return this
  }

  removeClass(classname) {
    if (this.mQuerySelector[0].classList.contains(classname)) {
      this.mQuerySelector[0].classList.remove(classname)
    }
    return this
  }

  addClass(classname) {
    if (!this.mQuerySelector[0].classList.contains(classname)) {
      this.mQuerySelector[0].classList.add(classname)
    } else {
      throw new Error('It already contains the class you are trying to add')
    }
    return this
  }

  hasClass(classname, cb) {
    if (!this.mQuerySelector[0].classList.contains(classname)) {
      //return true
    }
    return this
  }

  css(opts) {
    if (!opts) throw new Error('css method takes an object as a param')
    this.opts = ({}, opts)
    let counter = 0
    for (let i in opts) {
      let keys = Object.keys(this.opts)[counter]
      let value = this.opts[keys]
      counter++

      this.mQuerySelector[0].style[keys] = value
    }
    return this
  }

  wipeAttr(attribute) {
    if (typeof attribute === 'string') {
      this.mQuerySelector[0].removeAttribute(attribute)
    }
    return this
  }

  addAttr(name, value) {
    if (!name) throw new Error('Empty attribute name')
    if (typeof value === 'undefined') throw new Error('No value was set for this attribute')
    this.mQuerySelector[0].setAttribute(name, value)
    return this
  }

  getAttr(attribute) {
    if (!attribute) throw new Error('There is no attribute to fetch')
    this.mQuerySelector[0].getAttribute(attribute)
    return this
  }
}

export const mQ = selector => new miniQuery(selector)

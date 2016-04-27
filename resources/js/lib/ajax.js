'use strict'

import { abyss } from './abyss'
import XMLHttpRequest from 'xmlhttprequest'
/*
class Ajax extends Abyss {
  ajax(opts) {
    opts = ({
      type: null,
      url: null,
      dataType: null,
      success: null
    }, opts)

    let ajax

    if (window.XMLHttpRequest) {
      ajax = new XMLHttpRequest()
    } else {
      ajax = new ActiveXObject('Microsoft.XMLHTTP')
    }

    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4 && ajax.status === 200) {
        const parsedJsonResponse = JSON.parse(ajax.responseText)
        return opts.success(parsedJsonResponse)
      }
    }
    const formattedType = opts.type.toLowerCase()
    ajax.open(formattedType, opts.url, true)
    ajax.send()
  }
}
*/

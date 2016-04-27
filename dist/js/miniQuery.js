(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _miniQuery = require('./lib/miniQuery');

var counter = 0;
(0, _miniQuery.mQ)('button').addClass('btn').on('click', function () {
  counter++;
  (0, _miniQuery.mQ)('span').addAttr('data-counter', counter).html(counter);
});

(0, _miniQuery.mQ)('h1').destroy();

},{"./lib/miniQuery":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var miniQuery = function () {
  function miniQuery(selector) {
    _classCallCheck(this, miniQuery);

    this.selector = selector;
    this.mQSelector = document.querySelectorAll(this.selector);
    if (!this.selector) throw new Error('There is no selector');
  }

  _createClass(miniQuery, [{
    key: 'html',
    value: function html(markup) {
      if (!markup) throw new Error('There is no markup / text');
      this.mQSelector[0].innerHTML = markup;
      return this;
    }
  }, {
    key: 'loop',
    value: function loop(data, cb) {
      if (typeof cb != 'function') throw new Error('Loop takes a callback function');
      for (var i in data) {
        cb(i, data[i]);
      }
      return data;
    }
  }, {
    key: 'on',
    value: function on(event, cb) {
      this.mQSelector[0].addEventListener(event, cb, true);
      return this;
    }
  }, {
    key: 'removeClass',
    value: function removeClass(classname) {
      if (this.mQSelector[0].classList.contains(classname)) {
        this.mQSelector[0].classList.remove(classname);
      }
      return this;
    }
  }, {
    key: 'addClass',
    value: function addClass(classname) {
      if (!this.mQSelector[0].classList.contains(classname)) {
        this.mQSelector[0].classList.add(classname);
      } else {
        throw new Error('It already contains the class you are trying to add');
      }
      return this;
    }
  }, {
    key: 'hasClass',
    value: function hasClass(classname, cb) {
      if (!this.mQSelector[0].classList.contains(classname)) {
        //return true
      }
      return this;
    }
  }, {
    key: 'css',
    value: function css(opts) {
      if (!opts) throw new Error('css method takes an object as a param');
      this.opts = ({}, opts);
      var counter = 0;
      for (var i in opts) {
        var keys = Object.keys(this.opts)[counter];
        var value = this.opts[keys];
        counter++;

        this.mQSelector[0].style[keys] = value;
      }
      return this;
    }
  }, {
    key: 'wipeAttr',
    value: function wipeAttr(attribute) {
      if (typeof attribute === 'string') {
        this.mQSelector[0].removeAttribute(attribute);
      }
      return this;
    }
  }, {
    key: 'addAttr',
    value: function addAttr(name, value) {
      if (!name) throw new Error('Empty attribute name');
      if (typeof value === 'undefined') throw new Error('No value was set for this attribute');
      this.mQSelector[0].setAttribute(name, value);
      return this;
    }
  }, {
    key: 'getAttr',
    value: function getAttr(attribute) {
      if (!attribute) throw new Error('There is no attribute to fetch');
      this.mQSelector[0].getAttribute(attribute);
      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.mQSelector[0].parentNode.removeChild(this.mQSelector[0]);
      return this;
    }
  }]);

  return miniQuery;
}();

var mQ = exports.mQ = function mQ(selector) {
  return new miniQuery(selector);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXMvanMvYXBwLmpzIiwicmVzb3VyY2VzL2pzL2xpYi9taW5pUXVlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBLElBQUksVUFBVSxDQUFkO0FBQ0EsbUJBQUcsUUFBSCxFQUNHLFFBREgsQ0FDWSxLQURaLEVBRUcsRUFGSCxDQUVNLE9BRk4sRUFFZSxZQUFNO0FBQ2pCO0FBQ0EscUJBQUcsTUFBSCxFQUNHLE9BREgsQ0FDVyxjQURYLEVBQzJCLE9BRDNCLEVBRUcsSUFGSCxDQUVRLE9BRlI7QUFHRCxDQVBIOztBQVNBLG1CQUFHLElBQUgsRUFBUyxPQUFUOzs7QUNaQTs7Ozs7Ozs7OztJQUVNLFM7QUFDSixxQkFBWSxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFNBQUssVUFBTCxHQUFrQixTQUFTLGdCQUFULENBQTBCLEtBQUssUUFBL0IsQ0FBbEI7QUFDQSxRQUFHLENBQUMsS0FBSyxRQUFULEVBQW1CLE1BQU0sSUFBSSxLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUNwQjs7Ozt5QkFFSSxNLEVBQVE7QUFDWCxVQUFJLENBQUMsTUFBTCxFQUFhLE1BQU0sSUFBSSxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNiLFdBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixTQUFuQixHQUErQixNQUEvQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7eUJBRUksSSxFQUFNLEUsRUFBSTtBQUNiLFVBQUksT0FBTyxFQUFQLElBQWEsVUFBakIsRUFBNkIsTUFBTSxJQUFJLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQzdCLFdBQUssSUFBSSxDQUFULElBQWMsSUFBZCxFQUFvQjtBQUNsQixXQUFHLENBQUgsRUFBTSxLQUFLLENBQUwsQ0FBTjtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozt1QkFFRSxLLEVBQU8sRSxFQUFJO0FBQ1osV0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLGdCQUFuQixDQUFvQyxLQUFwQyxFQUEyQyxFQUEzQyxFQUErQyxJQUEvQztBQUNBLGFBQU8sSUFBUDtBQUNEOzs7Z0NBRVcsUyxFQUFXO0FBQ3JCLFVBQUksS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLFNBQW5CLENBQTZCLFFBQTdCLENBQXNDLFNBQXRDLENBQUosRUFBc0Q7QUFDcEQsYUFBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLFNBQW5CLENBQTZCLE1BQTdCLENBQW9DLFNBQXBDO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7OzZCQUVRLFMsRUFBVztBQUNsQixVQUFJLENBQUMsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLFNBQW5CLENBQTZCLFFBQTdCLENBQXNDLFNBQXRDLENBQUwsRUFBdUQ7QUFDckQsYUFBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLFNBQW5CLENBQTZCLEdBQTdCLENBQWlDLFNBQWpDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTSxJQUFJLEtBQUosQ0FBVSxxREFBVixDQUFOO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7OzZCQUVRLFMsRUFBVyxFLEVBQUk7QUFDdEIsVUFBSSxDQUFDLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixTQUFuQixDQUE2QixRQUE3QixDQUFzQyxTQUF0QyxDQUFMLEVBQXVEOztBQUV0RDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7d0JBRUcsSSxFQUFNO0FBQ1IsVUFBSSxDQUFDLElBQUwsRUFBVyxNQUFNLElBQUksS0FBSixDQUFVLHVDQUFWLENBQU47QUFDWCxXQUFLLElBQUwsSUFBYSxJQUFJLElBQWpCO0FBQ0EsVUFBSSxVQUFVLENBQWQ7QUFDQSxXQUFLLElBQUksQ0FBVCxJQUFjLElBQWQsRUFBb0I7QUFDbEIsWUFBSSxPQUFPLE9BQU8sSUFBUCxDQUFZLEtBQUssSUFBakIsRUFBdUIsT0FBdkIsQ0FBWDtBQUNBLFlBQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQVo7QUFDQTs7QUFFQSxhQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBbkIsQ0FBeUIsSUFBekIsSUFBaUMsS0FBakM7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7NkJBRVEsUyxFQUFXO0FBQ2xCLFVBQUksT0FBTyxTQUFQLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2pDLGFBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixlQUFuQixDQUFtQyxTQUFuQztBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs0QkFFTyxJLEVBQU0sSyxFQUFPO0FBQ25CLFVBQUksQ0FBQyxJQUFMLEVBQVcsTUFBTSxJQUFJLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ1gsVUFBSSxPQUFPLEtBQVAsS0FBaUIsV0FBckIsRUFBa0MsTUFBTSxJQUFJLEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQ2xDLFdBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixZQUFuQixDQUFnQyxJQUFoQyxFQUFzQyxLQUF0QztBQUNBLGFBQU8sSUFBUDtBQUNEOzs7NEJBRU8sUyxFQUFXO0FBQ2pCLFVBQUksQ0FBQyxTQUFMLEVBQWdCLE1BQU0sSUFBSSxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNoQixXQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsWUFBbkIsQ0FBZ0MsU0FBaEM7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLFVBQW5CLENBQThCLFdBQTlCLENBQTBDLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUExQztBQUNBLGFBQU8sSUFBUDtBQUNEOzs7Ozs7QUFHSSxJQUFNLGtCQUFLLFNBQUwsRUFBSztBQUFBLFNBQVksSUFBSSxTQUFKLENBQWMsUUFBZCxDQUFaO0FBQUEsQ0FBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBtUSB9IGZyb20gJy4vbGliL21pbmlRdWVyeSdcblxubGV0IGNvdW50ZXIgPSAwXG5tUSgnYnV0dG9uJylcbiAgLmFkZENsYXNzKCdidG4nKVxuICAub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvdW50ZXIrK1xuICAgIG1RKCdzcGFuJylcbiAgICAgIC5hZGRBdHRyKCdkYXRhLWNvdW50ZXInLCBjb3VudGVyKVxuICAgICAgLmh0bWwoY291bnRlcilcbiAgfSlcblxubVEoJ2gxJykuZGVzdHJveSgpXG4iLCIndXNlIHN0cmljdCdcblxuY2xhc3MgbWluaVF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICB0aGlzLm1RU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpXG4gICAgaWYoIXRoaXMuc2VsZWN0b3IpIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gc2VsZWN0b3InKVxuICB9XG5cbiAgaHRtbChtYXJrdXApIHtcbiAgICBpZiAoIW1hcmt1cCkgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyBtYXJrdXAgLyB0ZXh0JylcbiAgICB0aGlzLm1RU2VsZWN0b3JbMF0uaW5uZXJIVE1MID0gbWFya3VwXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGxvb3AoZGF0YSwgY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignTG9vcCB0YWtlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uJylcbiAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgIGNiKGksIGRhdGFbaV0pXG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBvbihldmVudCwgY2IpIHtcbiAgICB0aGlzLm1RU2VsZWN0b3JbMF0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IsIHRydWUpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzbmFtZSkge1xuICAgIGlmICh0aGlzLm1RU2VsZWN0b3JbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzbmFtZSkpIHtcbiAgICAgIHRoaXMubVFTZWxlY3RvclswXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzbmFtZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzbmFtZSkge1xuICAgIGlmICghdGhpcy5tUVNlbGVjdG9yWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc25hbWUpKSB7XG4gICAgICB0aGlzLm1RU2VsZWN0b3JbMF0uY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSXQgYWxyZWFkeSBjb250YWlucyB0aGUgY2xhc3MgeW91IGFyZSB0cnlpbmcgdG8gYWRkJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGhhc0NsYXNzKGNsYXNzbmFtZSwgY2IpIHtcbiAgICBpZiAoIXRoaXMubVFTZWxlY3RvclswXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NuYW1lKSkge1xuICAgICAgLy9yZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY3NzKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHRocm93IG5ldyBFcnJvcignY3NzIG1ldGhvZCB0YWtlcyBhbiBvYmplY3QgYXMgYSBwYXJhbScpXG4gICAgdGhpcy5vcHRzID0gKHt9LCBvcHRzKVxuICAgIGxldCBjb3VudGVyID0gMFxuICAgIGZvciAobGV0IGkgaW4gb3B0cykge1xuICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdHMpW2NvdW50ZXJdXG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLm9wdHNba2V5c11cbiAgICAgIGNvdW50ZXIrK1xuXG4gICAgICB0aGlzLm1RU2VsZWN0b3JbMF0uc3R5bGVba2V5c10gPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgd2lwZUF0dHIoYXR0cmlidXRlKSB7XG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLm1RU2VsZWN0b3JbMF0ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkZEF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcignRW1wdHkgYXR0cmlidXRlIG5hbWUnKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbHVlIHdhcyBzZXQgZm9yIHRoaXMgYXR0cmlidXRlJylcbiAgICB0aGlzLm1RU2VsZWN0b3JbMF0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXRBdHRyKGF0dHJpYnV0ZSkge1xuICAgIGlmICghYXR0cmlidXRlKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIGF0dHJpYnV0ZSB0byBmZXRjaCcpXG4gICAgdGhpcy5tUVNlbGVjdG9yWzBdLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5tUVNlbGVjdG9yWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5tUVNlbGVjdG9yWzBdKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1RID0gc2VsZWN0b3IgPT4gbmV3IG1pbmlRdWVyeShzZWxlY3RvcilcbiJdfQ==

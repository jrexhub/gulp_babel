"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var txt = 'babel test...';
console.log(txt); //class構文

var Person =
/*#__PURE__*/
function () {
  // console.log('test1');
  function Person(name, pref) {
    _classCallCheck(this, Person);

    this.name = name;
    this.pref = pref;
    console.log('test2');
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("".concat(this.name, " from ").concat(this.pref));
    }
  }]);

  return Person;
}();

var Okada = new Person('Okada', 'Tottori');
Okada.greet();
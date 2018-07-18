
가능하면 생성자함수 메서드 return값에는 this를 주어 메서드체이닝이 일어날수있게끔한다.<br>
https://github.com/airbnb/javascript#constructors--chaining
```javascript
function Test(){}


Test.prototype.testA = function(){
    return this
}
Test.prototype.testB = function(){
    return this
}
Test.prototype.testC = function(){
    return this
}


var test = new Teset()
test.testA().testB().testC()

```
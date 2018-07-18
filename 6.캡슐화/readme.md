# _를 내부 변수명 앞에붙인다
```javascript
       /*생성자 함수 앞글자를 대문자로 하는것과같이 컨스트럭터 속성명에 _를 붙인다.*/
        function Rectangle(width,height){
            this._width=width;
            this._height=height;
        }
        Rectangle.prototype.getArea = function(){
            return this._width*this.height;
        }
        var rectangle = new Rectangle(5,7)
        alert('Area: ' + rectangle.getArea())
 
```

# 클로저를 이용한다.
메모리를 줄이기 위한 프로토타입에 약간 위배되지만 약간의 메모리를 사용하고서 변수를 보호하기 위한 스킬이다.

```javascript
       function Rectangle(width,height){
            var _width=width;
            var _height=height;

            this.getWidth = function(){
                return _width;
            }

            this.getHeight = function(){
                return _height;
            }

            this.setWidth = function(value){ 
                if(value <= 0){return alert('0보다 작은 값은 넣을수 없습니다')}
                _width= value;   
            }
            this.setHeight = function(value){ 
                if(value <= 0){return alert('0보다 작은 값은 넣을수 없습니다')}
                _height= value;
            }
        }
        Rectangle.prototype.getArea = function(){
            return this.getWidth() * this.getHeight();
        }
        var rectangle = new Rectangle(5,7);
        
        alert('Area: ' + rectangle.getArea());

```


# 컨벤션을 이용한다
_로 시작하는것은 건들이지 말아달라는 뜻이다.

```javascript
   function Rectangle(width,height){
            this._width=width;
            this._height=height;         
        }

        Rectangle.prototype.getArea = function(){
            return this._width * this._height;
        }
        Rectangle.prototype.getWidth = function(){
            return _width;
        }

        Rectangle.prototype.getHeight = function(){
            return _height;
        }

        Rectangle.prototype.setWidth = function(value){ 
            if(value <= 0){
                return alert('0보다 작은 값은 넣을수 없습니다')
            }
            _width= value;   
        }
        Rectangle.prototype.setHeight = function(value){ 
            if(value <= 0){
                return alert('0보다 작은 값은 넣을수 없습니다')
            }
            _height= value;
        }
        var rectangle = new Rectangle(5,7);
        
        alert('Area: ' + rectangle.getArea());

```
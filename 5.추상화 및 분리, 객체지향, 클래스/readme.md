객체는 신장의 크기,몸무게,체중,눈,코,입을 모두 객체화할수있다.


```javascript
var student0 ={이름:'A',국어:80,영어:90,수학:70,과학:10}


var student1 ={이름:'B',국어:70,영어:93,수학:67,과학:62}


var student1 ={이름:'C',국어:30,영어:62,수학:89,과학:67}
```


위에는 사람의 데이터를 추상화한것이다.


# ※추상화란?
현실에 있는 객체를 모두 모방하는 것이 아니라 프로그램에 필요한 속성만을 가져와서 객체화하는것.


```javascript
var students = []

students.push({이름:'A',국어:80,영어:90,수학:70,과학:10})


students.push({이름:'B',국어:70,영어:93,수학:67,과학:62})


students.push({이름:'C',국어:30,영어:62,수학:89,과학:67})
console.log(students)
```



```javascript
var students = []

students.push({이름:'A',국어:80,영어:90,수학:70,과학:10})


students.push({이름:'B',국어:70,영어:93,수학:67,과학:62})


students.push({이름:'C',국어:30,영어:62,수학:89,과학:67})


var output = "이름\t총합\t평균\n";

for(var i = 0; i < students.length;i++){
	var sumAll = students[i].국어 + students[i].영어 + students[i].수학 + students[i].과학;
	var average = sumAll/4;
	 
	output += students[i].이름+"\t\t"+sumAll+"\t\t"+average +"\n"
}

console.log(output)

```



```javascript
var students = []

students.push({이름:'A',국어:80,영어:90,수학:70,과학:10})


students.push({이름:'B',국어:70,영어:93,수학:67,과학:62})


students.push({이름:'C',국어:30,영어:62,수학:89,과학:67})



for(var i = 0; i < students.length;i++){
    students[i].getSum = function(){
        return this.국어 + this.수학 + this.영어 + this.과학;
    }

    students[i].getAverage = function(){
        return this.getSum() / 4
    }

    students[i].toString = function(){
        output += this.이름 +"\t\t" + this.getSum() + "\t\t" + this.getAverage() + "\n"

    }
}

var output = "이름\t\t종합\t\t평균\n"
for(var i = 0; i < students.length;i++){
    output += students[i].toString();
}

console.log(output)

```


```javascript
function createStudent(이름,국어,수학,영어,과학){
    var object = {
        이름:이름,
        국어:국어,
        수학:수학,
        영어:영어,
        과학:과학
    }
    object.getSum = function(){
        return this.국어 + this.수학 + this.영어 + this.과학;
    }

    object.getAverage = function(){
        return this.getSum() / 4
    }

    object.toString = function(){
        return this.이름 +"\t\t" + this.getSum() + "\t\t" + this.getAverage() + "\n"

    }

    return object
}

var students = []
students.push(createStudent('A',80,80,80,80))
students.push(createStudent('B',90,70,50,30))
students.push(createStudent('C',20,70,80,50))
students.push(createStudent('D',50,60,70,30))
 


 var output = "이름\t종합\t평균\n"
 for(var i = 0 ; i < students.length;i++){
     output+= students[i].toString()
   
 }
 console.log(output)

```

# 객체지향

```javascript
function Student(이름,국어,수학,영어,과학){
        this.이름=이름;
        this.국어=국어;
        this.수학=수학;
        this.영어=영어;
        this.과학=과학;   
}

Student.prototype.getSum = function(){
    return this.국어 + this.수학 + this.영어 + this.과학;
}

Student.prototype.getAverage = function(){
    return this.getSum() / 4
}

Student.prototype.toString = function(){
    return this.이름 +"\t\t" + this.getSum() + "\t\t" + this.getAverage() + "\n"
}


var students = []
students.push(new Student('A',80,80,80,80))
students.push(new Student('B',90,70,50,30))
students.push(new Student('C',20,70,80,50))
students.push(new Student('D',50,60,70,30))
 


 var output = "이름\t종합\t평균\n"
 for(var i = 0 ; i < students.length;i++){
     output+= students[i].toString()
   
 }
 console.log(output)

 console.log(students)

```


# class 단위의 코딩

```javascript
    class Student{
        constructor(이름,국어,수학,영어,과학){
            this.이름=이름;
            this.국어=국어;
            this.수학=수학;
            this.영어=영어;
            this.과학=과학;   
        }

        
        getSum(){
            return this.국어 + this.수학 + this.영어 + this.과학;
        }

        getAverage(){
            return this.getSum() / 4
        }

        toString(){
            return this.이름 +"\t\t" + this.getSum() + "\t\t" + this.getAverage() + "\n"
        }
    }

```
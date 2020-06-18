/*document.write("<h2>Chapter 21-25</h2>")
//task 1
var first=prompt("Enter Your First Name ")
var last=prompt("Enter Your Last Name ")
var fullname=(first+" "+last)
alert("Welcome "+fullname)

//task2
var mobile=prompt("Enter your favourite mobile: ")
document.write("My favourite phone is : "+mobile,"<br>")
document.write("The length is :"+mobile.length)

//task3
var pak="Pakistan"
document.write("<br>Index of n is :",pak.indexOf("n"))

//task 4
var hello="hello World"
document.write("<br>Last index of l is: ",hello.lastIndexOf("l"))

//task 5
var pakistani="Pakistani"
document.write("<br>The character at 3rd index is: ",pakistani[3])

//task 6
var fn=prompt("Enter your first name")
var ln=prompt("Enter your last name")
alert("Welcome "+fn.concat(" "+ln))

//task 7
var str="Hyderabad"
document.write("<br>City: ",str)
document.write("<br>After replacement: ",str.replace("Hyder","Islam"))

//task 8
var msg="Ali and Sami are best friends. They play cricket andfootball together"
document.write("<br>",msg)
document.write("<br>",msg.replace(/and/g,"&"))

//task 9
var conversion=472
document.write("<br>Value: ",conversion,"<br>Type: ",typeof(conversion))
var conver=String(conversion)
document.write("<br>Value: ",conver,"<br>Type: ",typeof(conver))

//task 10
var program=prompt("Enter the word")
alert("Capital letter: "+program.toUpperCase())

//task 11
var title=prompt("Enter the word: ")
alert("Title case: "+title.charAt(0).toUpperCase() + title.substr(1).toLowerCase())

//task 12
var num=35.36
var con=String(num)
document.write("<br> Number: ",num,"<br>Result: ",con.replace(".",""),"<br>")

//task 14

var bakery=["cake","paties","pastry","cookies"]
var search=prompt("Which item do you want?")
var f=search.slice(0,1)
var l=search.slice(1)
var first=f.toLowerCase()
var last=l.toLowerCase()
var search=first+last

function hey(search){
var p=bakery.length-1
for(i=0;i<=p;++i){
    if(bakery[i]==search){
        return(bakery[i]+" is available at index "+i+" in our bakery")   
        
    }
  
}return(search+" is not found, SORRY!")
}document.write("<br>",hey(search))

//task 15
var pass=prompt("Enter the password")
if(pass[0]==parseInt(pass)){
    alert("Password can not begin with a number ")
}
else if(pass.length<6){
    alert("Please enter a strong password")
}
else{
    alert("Your Password is valid")
}

//task16
var splitting="University Of Karachi"
var arr=[]
var p=splitting.split("")
for(i=0;i<=p.length-1;++i){
    document.write(p[i],"<br>")
    arr.push(p[i])
}



//task17
var take=prompt("Enter the word")
document.write("<br>",take.charAt(take.length-1))

//task18
var dog="the quick brown fox jumps over the lazy dog"
var searching=dog.match(/the/g)
document.write(searching.length)

document.write("<h2>Chapter 26-30</h2>")

//task 1
var numbers=prompt("Enter the number")
document.write("<br>Number: ",numbers,"<br>Round of: ",Math.round(numbers),"<br>Floor value: ",Math.floor(numbers),"<br>Ceil value: ",Math.ceil(numbers))

//task 2
var num=prompt("Enter negative number")
document.write("<br>Number: ",num,"<br>Round of: ",Math.round(num),"<br>Floor value: ",Math.floor(num),"<br>Ceil value: ",Math.ceil(num))

//task 3
var absolute=prompt("Enter the number")
document.write("<br> abs is: ",Math.abs(absolute))

//task 4
var dice="The number of dice is: "
document.write("<br>",dice,(Math.round(Math.random(dice)*10)))

//task 5
var coin="Random coin value is: "
var toss=(Math.round(Math.random(coin)*10))
document.write("<br>",toss,"<br>")
if(toss<=2){
    document.write(coin," Head")
}
else{
    document.write(coin," Tail")
}

//task 6
document.write("<br> The random number is: ",(Math.round(Math.random()*100)))


//task 8
var secret=(Math.round(Math.random()*10))
var take=prompt("Enter the number between 1-10")
if(secret==take){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}

document.write("<h2>Chapter 31-34</h2>")

//task 1
var d=new Date()
document.write("<br>",d)

//task 2
var d=new Date()
var months=["jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
document.write("<br>Current month: ",months[d.getMonth()])

//task 3
var d=new Date()
var k=d.toString()
document.write("<br>Today is: ",k.slice(0,3))

//task 4
var d=new Date()
var k=d.toString()
var l=k.slice(0,3)
if(l=="Sat"|l=="Sun"){
    document.write("<br>It's a funday")
}

//task 5
var d=new Date()
var k=d.toString()
var g=k.slice(8,10)
if(g<16){
    document.write("<br>First fifteen days of month")
}
else{
    document.write("<br>Last days of month")
}

//task 6
var d=new Date()
document.write("<br>Current date: ",d,"<br>Ellapsed milliseconds since januray 1: ",d.getTime())

//task 7
var hr=new Date().getHours()
if(hr>12){
    document.write("It's PM")
}
else{
    document.write("It's AM")
}

//task 8
var laterdate=new Date()
laterdate.setFullYear(2020,11,31)
document.write("<br>",laterdate)

//task 9
var fd=new Date("6/18/2015")
var sd=new Date("6/17/2020")
var q=Math.abs(sd.getTime()-fd.getTime());
var dayss=Math.ceil(q/(1000*3600*24))
document.write("<br>",dayss,"days have been passed since 1st Ramadam,2015")

//task 10
var fd=new Date("1/01/2015")
var sd=new Date("11/07/2020")
var q=Math.abs(sd.getTime()-fd.getTime());
var dayss=Math.ceil(q/(3600*24))
document.write("<br>",dayss,"seconds elapsed between the reference date and the beginning of 2015")


//task 11
var w=new Date()
var w2= new Date()
w.setHours(17)
document.write("<br> Current date ",w,"<br> 1 hour ago it was: ",w2)


//task 12
var dates=new Date()
document.write("Current date: ",dates)
dates.setFullYear(1920,06,17)
document.write("<br> 100 years back it was ",dates)

//task 13
var d=new Date()
var age=prompt("Enter your age: ")
document.write("<br>Your birth year is : ", (d.getFullYear()-age))

//task 14
var name=prompt("Enter your name")
var d=new Date()
var months=["jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
var numberofunit=300
var charges=200
var netamount=numberofunit*charges
var late=100
var gross=netamount+late
document.write("<h2>K-electric bill</h2><br>Customer Name : ",name,"<br>Month: ",months[d.getMonth()],"<br>Numbers of unit: ",numberofunit,"<br>Charges per unit: ",charges,"<br>net amount Payable(Within due date) : ",netamount,"<br>Late payment surcharge: ",late,"<br>Gross amount payable: ",gross)



document.write("<h2>Chapter 35-38</h2>")

//task 1
function first(){
    d=new Date()
    return d
}
document.write("<br>",first())

//task 2
var take=prompt("Enter first name")
var last=prompt("Enter last name")
function input(){
    alert("Welcome! "+take+" "+last)
}
input()

//task 3
var num=+prompt("enter number")
var num1=+prompt("enter number")
function adding(){
    b=num+num1
    return b
}
document.write("<br>",adding())

//task 4
function calc(num1,opr,num2){
    if(opr=="+"){
        return num1+num2
    }
    else if(opr=="-"){
        return num1-num2
    }
    else if(opr=="*"){
        return num1*num2
    }
    else if(opr=="/"){
        return num1/num2
    }

}
document.write("<br>",calc(2,"+",2))

//task 5
function square(a){
    return a*a
}
document.write("<br>",square(4))

//task 6
function fact(n){
    if(n==1|n==0){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
document.write("<br>Factorial is ",fact(4))

//task 7
var n1=+prompt("Enter number 1")
var n2=+prompt("Enter number 2")
function counting(){
for(i=n1;i<=n2;++i){
    document.write("<br>",i)
}
}counting()

//task 8
var nest=+prompt("Enter base")
var nest2=+prompt("Enter perpendicular")
function hypotenus(){
    var hypo=Math.sqrt(nest*nest + nest2*nest2)
    function square(){
        var a=hypo*hypo
        return a
    }return square()


}document.write("<br>",hypotenus())

//task 9
function area(width,height){
    return width*height
}
document.write("<br>","A= ",area(2,3),"<br>A= ",area(width=2,height=4))

//task 10
function palindrome(f){
    if(f==f.split('').reverse().join('')){
        return "It is palindrome"
    }
    else{
        return "It is not palindrome"
    }
}document.write("<br>",palindrome("madam"))

//task 11
function cases(upper){
var arr2=upper.split(' ')
var empty=[]
    for(i=0;i<arr2.length;++i){
        empty.push(arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1))
    }document.write("<br>",empty.join(' '))
}(cases("quick brown fox"))

//task 12
function longestWord(string) {
    var str = string.split(" ")
    var longest = 0
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length
            var word = str[i]
        }
    }
    return word
}
document.write("<br>",longestWord("Web Development Tutorial"))

//task 13
function countings(str,letter){
var r=str.split('')
count=0
for (i = 0; i < str.length; i++) {
    if(r[i]==letter){
        count+=1
    }
}return count

}document.write("<br>",countings("JSResourceS.com","o"))

//task 14
function calcCircumfernce(radius){
    return 2*3.142*radius
}
function calcArea(radius){
    return 3.142*radius*radius
}
document.write("<br>The circumference is: ",calcCircumfernce(2),"<br>The area of circle is: ",calcArea(3))*/



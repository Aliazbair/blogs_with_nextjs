# learn typescript

## map to learn 
 - TSC (TypeScript Compiler)
 - Config File
 - Folder Structure
 - Basic Types
 - Arrays & Tuples
 - Unions & Enum
 - Objects
 - Type Assertion
 - Functions
 - Interfaces
 - Function Interface
 - Classes
 - Data Modifiers
 - Implement Interface in Class
 - Extending Classes (Subclasses)
 - Generics
 - TypeScript With React

# TSC (TypeScript Compiler)
to compiler ts file use
> tsc file name

or you can use watch flag auto compiler files
> tsc --watch index

# Config File
to configuration typescript file will create config file with the command
> tsc --init

# Folder Structure
use Folder Structure to order file very will like react and vue
to work with dir you can use outDir in config file and spacey the folder
>  "outDir": "./src", 
and root is
>   "rootDir": "./src", 
use tsc command to compiler 
> tsc

# Basic Types
you can set string type or number or boolean or any type

```js
let id: number = 90;
let myName:string='ali'
let isAdmin:boolean=true
let color:any='red'
let age:number

age=30
```
# Arrays & Tuples

```js
let ids:number[]=[1,2,4,5]
let names:string[]=['ali','omer']
let anyType:any[]=[1,'ali',true]

console.log(anyType);
```

Tuples you can specify type and display with order
```js
let person:[string,number,boolean]=['ali',12,true]
// tuple with array
let emp:[number,string][]

emp=[
[1,'ali'],
[2,'nosa'],
[3,'osman'],
]

console.log(emp);
```
# Unions & Enum

Unions allow you to set many type to sem var

```js
let productId:number | string
productId=true
productId='AA'

// Enum
enum direction1{
    Up=1,Let,Right,Top
}
enum direction2{
    Up='Up',Let='Let',Right='Right',Top='Top'
}
console.log(direction2.Up);
```

# Object

```js
let people:{
    id:number,
    name:string
}={
    id:1,
    name:'ali'
}

console.log(people);

// or use define type
type Users={id:number,name:string}

const User:Users={
    id:2,
    name:'nosa'
}
console.log(User);

//  TYPE Assertion
let cid:any=1
let customerId=<number>cid
//  or can use this
customerId=cid as number

```

# Functions

```js
function addNum(x:number,y:number):number{
    return x+y

}
```

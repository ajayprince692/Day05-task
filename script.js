//Using For loop

var arr=[
    {
        "name": "Ajay",
        "age" : 20
    },
    {
        "name": "Prince",
        "age" : 23
    },
    {
        "name": "Dravid",
        "age" : 32
    }
    
]
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
    console.log(arr[i].name);
    console.log(arr[i].age);
}

//Using For in loop

var arr1=[
    {
        "name": "Vijay",
        "age" : 30
    },
    {
        "name": "Princess",
        "age" : 25
    },
    {
        "name": "David",
        "age" : 35
    }
    
]
for(var i in arr1){
    console.log(arr1[i]);
    console.log(arr[i].name);
    console.log(arr[i].age);
}

//Using For of loop

var arr2=[
    {
        "name": "jay",
        "age" : 10
    },
    {
        "name": "joe",
        "age" : 12
    },
    {
        "name": "Dev",
        "age" : 55
    }
    
]
for(let i of arr2){
    console.log(i);
    console.log(i.name);
    console.log(i.age);
}


//Resume data in JSON format


let Resume=[
    {
    Aboutme:{
        Name:"Ajay",
        Age:23,
        Phone:9876543210,
        Email:"abc@gmail.com",
        Address:"123,Rich street,Dumeel"
    },
    Education:{
        "10th":96,
        "12th":85,
        "BE" :82.5
    },
    Skills:{
        Frontend:"HTML,CSS,JavaScript,Bootstrap,Nodejs",
        Backend:"Reactjs,Expressjs",
        Database:"MongoDB",
        Cloud :"AWS"
    },
    Languages_Known:["Tamil","English"]
        },
];
console.log(Resume);
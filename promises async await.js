const welcome = (abc) => {
console.log(`hello my name is ${namee}`);
}
function def(){
    const namee = 'utkarsh';
    def(namee);
}
def(welcome);
//////////////////////////////////////////////////

const welcome1 = () => {
    setTimeout(() => {
        console.log("1")
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                        setTimeout(() => {
                            console.log("600");
                            setTimeout(() => {
                                console.log("7");
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
welcome1();
//////////////////////////////////////////////////////////////////////

let welcome2 = new Promise((resolve,reject) => {
    resolve();
})

welcome2.then(() => {
    setTimeout(() => {
      console.log("1")
    }, 1000);
  }).then(() => {
    setTimeout(() => {
      console.log("2")
    }, 2000);
  }).then(() => {
    setTimeout(() => {
      console.log("3")
    }, 3000);
  }).then(() => {
    setTimeout(() => {
      console.log("4")
    }, 4000);
  }).then(() => {
    setTimeout(() => {
      console.log("5")
    }, 5000);
  }).then(() => {
    setTimeout(() => {
      console.log("6")
    }, 6000);
  }).then(() => {
    setTimeout(() => {
      console.log("7")
    }, 7000);
  })
///////////////////////////////////////////////////////////
let id = "yes";

const Argument = new Promise((resolve,reject)=>{
        if(id=="yes"){
        resolve(id);}
        else{
        reject()};
    });
Argument
    .then((id)=>{
        console.log("Promise Resolved");

    })
    .catch(()=>{
        console.log("Promise Rejected");

    })
    .finally(()=>{
        console.log("END");
    })
    ///////////////////////////////////////////////
    function welcome4(name, callback) {
        console.log('Hi' + ' ' + name);
        callMe();
      }
      function callMe() {
        console.log('I am callback function');
      }
      welcome4('Smith', callMe);
      /////////////////////////////////////////////////////
      function getEmployeeID1() {

        setTimeout(() => {
            console.log("Fetching the Employee details");
            let id = [1, 2, 3, 4, 5];
            console.log(id);
      
            setTimeout(() => {
                let employeeDetails = {
                    name: "John Smith",
                    age: 34,
                };
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
      
                setTimeout(() => {
                    employeeDetails.gender = "Male",
                        console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
      
                    setTimeout(() => {
                        employeeDetails.salary = 21000;
                        console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                    }, 2000);
      
                }, 2000);
      
            }, 2000);
      
        }, 2000);
      }
      getEmployeeID1()
/////////////////////////////////////////////////////////
let countValue = new Promise(function (resolve, reject) {
  resolve('Promise resolved'); 
});

countValue.then(
   function successValue(result) {
       console.log(result);
   },
)

.catch(
   function errorValue(result) {
       console.log(result);
   }
);
////////////////////////////////////////////////////////////////////
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});

async function asyncFunc() { 
      let result = await promise; 
      console.log(result);
}
asyncFunc();

/////////////////////////////////////////////////////////////////////
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  console.log('End of Promises');
});
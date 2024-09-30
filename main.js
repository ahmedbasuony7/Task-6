




//  task 1 

var list1 = [
    
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];



function  result (list1) {

    let  programminglang =    { Python : 0 , Ruby : 0 , JavaScript :0  }

    list1.forEach((ele) => {
            programminglang[ele.language]++;
    })

    let pythonCount = programminglang ['Python'];
    let JavaScriptCount = programminglang ['JavaScript'];
    let RubyCount = programminglang ['Ruby'];

    console.log(pythonCount , JavaScriptCount , RubyCount);

    const countsArray = [pythonCount, RubyCount, JavaScriptCount];
    const maxCount = Math.max(...countsArray);
    const minCount = Math.min(...countsArray);

    console.log(maxCount , minCount);

    return maxCount <= 2 * minCount;
}

console.log(result(list1));





//  task  2 

var list2 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

console.log("#######    task - 2   ########");

let average  = list2.reduce((acc , curr) => {
    return   ( curr.age + acc.age ) /2
} )

console.log(average);



//   task 3 


console.log("#######    task - 3   ########");

var list3 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];


function  checkZone (list3) {
    let continent =  {  Africa : 0 , Americas : 0 , Asia : 0 , Europe : 0 , Oceania : 0 }


    list3.forEach((ele) => 
        continent[ele.continent]++
        // console.log(ele.continent)
    )

    let AfricaCount = continent['Africa'];
    let AmericasCount = continent['Americas'];
    let AsiaCount = continent['Asia'];
    let EuropeCount = continent['Europe'];
    let OceaniaCount = continent['Oceania'];

    console.log(`AfricaCount = ${AfricaCount}  ,  AmericasCount =  ${AmericasCount} , AsiaCount = ${AsiaCount} , EuropeCount = ${EuropeCount} ,  OceaniaCount = {OceaniaCount} `);

    // check is at least one developer from the required 5 geographic zones.
    if (AfricaCount >=1 &&  AmericasCount>= 1   &&  AsiaCount>= 1   &&  EuropeCount>= 1 
        &&  OceaniaCount>= 1) {
        return true
    }

}

console.log((checkZone(list3)));




//    task  -  4 

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) 
// representing data about developers who have signed up to attend the next coding meetup 
// that you are organising. Your task is to return either:
// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:
// your function should return true. Notes:
// The strings representing a given language will always be formatted in the same way 
// (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.

console.log("#######    task - 4   ########");

var list4 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];


let  checkLanguage = list4.reduce((acc , curr , index) =>{
    return     curr.language  === "JavaScript"  ? true : false 
}) 

console.log(checkLanguage);


//  another solution 
function  checkLanguage2  (list4 ) {
    let checker = list4[0].language;

    let res = list4.reduce(( acc , curr  ) =>{
        return  curr.language  === checker  ? true : false  
    } ,0 )
    return res;
}

console.log(checkLanguage2(list4));

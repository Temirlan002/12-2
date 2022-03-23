//ES5 vs ES6


//es6
// const a = 4;

// let b = 10;

//es5
// var c = 20;
//
// c = "hello!"
// console.log(c)

// const first_name = "jack"
// const last_name = "Barbaro"

// console.log(first_name + " " + last_name)
// console.log(`${first_name} ${last_name}`)

// const getFullName = (user) => {
    // return "First Name: " + user.first_name + "\n" + "Last Name: " + user.last_name;
    // return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
// };


// const user = {
//     first_name: "Jack",
//     last_name: 'Barbaro'
// }
//
// console.log(getFullName(user))

// spread operator

const mass = [1, 2, 3, 4, 5]
const mass2 = [...mass]

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)
//
// const obj = {
//     username: 'jack',
//     age: 19,
//     last_name: 'Barbaro',
//     full_name: 'jack Barbaro'
// }
//
// const obj2 = {
//     ...obj,
//     key: "value",
//     key2: "value2"
// }
//
// console.log(obj2)


// деструктиризация

const props = {
    onsubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: "value"
        },
        {
            key: "value"
        },
        {
            key: "value"
        },
    ]
}

const {data, onsubmit} = props;

console.log(data);
onsubmit();


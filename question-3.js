// เริ่มเขียนโค้ดตรงนี้
async function getUsers () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data
  }

const userData = await getUsers();
const result = userData.map((user)=>user.name).filter(((user)=>user.length>17))
console.log(result)



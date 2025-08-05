const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  
function addCompanyName (company,companyName) {
  for (let i= 0;i<company.length;i++) {
    company[i]['company']=companyName;
  }
}
addCompanyName(alphaTech,'alphaTech');
addCompanyName(betaSoft,'betaSoft');
addCompanyName(gammaDev,'gammaDev');
console.log(alphaTech)


const allEmployees = alphaTech.concat(betaSoft, gammaDev);
// console.log(allEmployees);


const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;}).map((employee) => {
    return {
      name: employee.name,
      company: employee.company 
    };
  });



console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  


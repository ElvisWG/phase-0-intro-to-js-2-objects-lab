const employee = {name:"Elvis Gatukui", streetAddress:"28th Avenue Nairobi"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]:value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const addObject = Object.assign({}, employee);
    delete addObject[key];
    return addObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
}


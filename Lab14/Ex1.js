fs = require('fs');

var filename = 'user_data.json';

data = fs.readFileSync(filename, 'utf-8');

//console.log(typeof data);

users_reg_data = JSON.parse(data);

console.log(users_reg_data['itm352'].password);
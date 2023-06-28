var member = ['jiwhy', 'why', 'ji'];
console.log(member[1]);
var i = 0;
while (i < member.length) {
    console.log('array loop: ' + member[i]);
    i++;
}

var roles = {
    'programmer': 'jiwhy',
    'designer': 'why',
    'manager': 'ji',
}
console.log(roles.designer);
console.log(roles['programmer']);

for (var name in roles) {
    console.log('object loop: ' + name + ' value: ' + roles[name]);
}
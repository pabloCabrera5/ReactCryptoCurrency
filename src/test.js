let p = 'Name - John, Surname - Wick, Pet - Dog, Occupation - Unknown'.split(',')
let obj= {};
for(let i=0; i<p.length; i++){
    let key = p[i].split('-')[0].trim();
    let value = p[i].split('-')[1].trim();
    obj[key] = value
}
console.log(obj)

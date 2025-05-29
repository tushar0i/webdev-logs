// Conditionals statements
if('string 1'==='string 2'){
    console.log('the string are equal');
}else{
    console.log('string are not equal');
}

// can use onli if or multiple if else statement ;

// we can also use switch insted of  multiple if else statements;

const colors =[ 'orange','blue','green','yellow','pink','red'];

const randomIndex = Math.floor(Math.random()*colors.length);

const randomColor = colors[randomIndex];

switch (randomColor) {
    case 'orange':
        console.log('the color is orange');
        break;
    case 'blue':
        console.log('the color is blue');
        break;
    case 'green':
        console.log('the color is green');
        break;
    case 'red':
        console.log('the color is red');
        break;
    case 'pink':
        console.log('the color is pink');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;

    default:
        console.log('color not found');
        break;
}
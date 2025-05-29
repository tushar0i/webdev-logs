// Loops


//dummy data
const blogPosts = [
{
title: 'What is JavaScript?',
author: 'Tushar Thakur',
publishDate: 'Dec 20, 2024',
content: 'some post content here'
},
{
title: 'How do Arrays work?',
author: 'Tushar Thakur',
publishDate: 'Jan 1, 2025',
content: 'some post content here'
},
{
title: 'How long does it take to learn coding?',
author: 'Tushar Thakur',
publishDate: 'Jan 26, 2025',
content: 'some post content here'
}
]


// now to print this we will use a loop
for (let index = 0; index < blogPosts.length; index++) {
    const postTitle = blogPosts[index].title;
    const postAuthor = blogPosts[index].author;
    const postDate = blogPosts[index].publishDate;
    const postContent = blogPosts[index].content;

    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
    console.log();
    
}

// anotherExample
const myArray = [20,'hi',30,'index','play',33,11,9,'doingThings'];

for (let i = 0; i < myArray.length; i++) {
    if(typeof(myArray[i]) === 'number'){

        console.log(myArray[i]);
    }
}

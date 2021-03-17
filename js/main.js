'use strict';

let score=0;



function function1()
{

  let yourName = prompt('what is you name?');
  alert('welcome' + ' ' + yourName);

  let mySport = prompt('is basketball my favorite sport?');
  let mySport2 = mySport.toLowerCase();
  if (mySport2==='yes')
  {
    alert('you are correct!');
    // eslint-disable-next-line no-unused-vars
    score++;
  }
  else
  {
    alert('you are worng!');
  }

}
function1();

// if (mySport === 'yes')
// {
//   console.log();('you are correct!');
// }
// else
// {
//   console.log();('you are worng!');
// }

function function2 ()
{
  let myAge = prompt('Am I 24 years old?');
  let myAge2 = myAge.toLowerCase();
  if (myAge2 === 'yes')
  {
    alert('that right');
    score++;
  }
  else
  {
    alert('thats not right!');
  }
}
function2();

// let myAge = prompt('Am I 24 years old?');
// if (myAge === 'yes')
// {
//   console.log();('that right');
// }
// else
// {
//   console.log();('thats not right!');
// }


function function3 ()
{
  let myNickNAme = prompt('is my favourit nick name semsem ?');
  // eslint-disable-next-line no-undef
  let MyNick= myNickNAme.toLowerCase();
  if (MyNick === 'no')
  {
    alert('that right,its suma :)');
    score++;
  }
  else
  {
    alert('thats not right, its suma!');
  }
}
function3();


// let myNickNAme = prompt('is my favourit nick name semsem ?');
// if (myNickNAme === 'no')
// {
//   console.log();('that right,its suma :)');
// }
// else
// {
//   console.log();('thats not right, its suma!');
// }
function function4 ()
{
  let myHobby = prompt('is drawing one of my hobbies?');
  let myHobby2 = myHobby.toLowerCase();
  if (myHobby2 === 'yes')
  {
    alert('that right,im a good painter :)');
    score++;
  }
  else
  {
    alert('thats not right');
  }
}
function4();


// let myHobby = prompt('is drawing one of my hobbies?');
// if (myHobby === 'yes')
// {
//   console.log();('that right,im a good painter :)');
// }
// else
// {
//   console.log();('thats not right');
// }
function function5 ()
{
  let myHeight = prompt('is my height 160 cm ?');
  let myHeight2 = myHeight.toLowerCase();
  if (myHeight2 === 'yes')
  {
    alert('Nooo, im 171 cm ');
  }
  else
  {
    alert('your right, im 171 cm');
    score++;
  }
}
function5();


// let myHeight = prompt('is my height 160 cm ?');
// if (myHeight === 'yes')
// {
//   console.log();('Nooo, im 171 cm ');
// }
// else
// {
//   console.log();('your right, im 171 cm');
// }

function function6()
{

  let guessing = prompt ('guess a number between 1-20' );

  for (let i=0; i<3; i++)
  {
    if ( guessing <12 )
    {
      alert ('this is lower than the correct number');
      let guessing = prompt ('guess a number between 1-20' );
    }
    else if ( guessing > 12)
    {
      alert ('this is higher than the correct answer');
      let guessing = prompt ('guess a number between 1-20' );
    }
    else
    {
      alert ('correct answer');
      score++;
      i=10;
    }
  }
}
function6();


// let answer = prompt ( 'what is my favorite food?');
// let question = ['mansaf','chocolate','shawarma','kabsa'];
// for (let a=0; a<5; a++)
// {
//   if (question.includes(answer))
//   {
//     alert ( 'good answer');
//     score++;
//   }
//   else
//   {
//     alert ( 'thats wrong');
//     let answer = prompt ( 'what is my favorite food?');
//   }
// }
// alert (question);


function function7 ()
{
  let food = ['mansaf','chocolate','shawarma','kabsa'];
  // let correct = false;
  for ( let s=1 ; s<6; s++ )
  {
    let favFood = prompt('what is my favorit food?');

    for (let s=0;s<food.length; s++)
    {
      if (favFood === food[s])
      {
        alert ( 'good answer');
        // eslint-disable-next-line no-unused-vars
        // correct=true;
        score++;
        break;
      } else
      {
        alert ( 'thats wrong');
        prompt('what is my favorit food?');
      }
    }
  }
}
function7();

alert (`your scoor is${score} out of 7`);











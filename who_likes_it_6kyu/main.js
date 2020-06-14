/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
*/

function likes(names) {
  // for loop with counting the index of likes 
  //if likes is more than 2 then print a string that count how many like after the first 3 people. 
  if (names.length >= 4){

  var moreLikes = names.slice(2,names.length).length

  console.log( `${names[0]}, ${names[1]} and ${moreLikes} others like this`)

  }else if(names.length === 0){

    console.log( `no one likes this`)
  }else{

  console.log( `${names[0]}, ${names[1]} and ${names[3]} like this`)
  }
}


// other notes: make it as effective as possiable with hundred likes or more..

likes([])//, 'no one likes this');
likes(['Peter'])//, 'Peter likes this');
likes(['Jacob', 'Alex'])//, 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark'])//, 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']) //, 'Alex, Jacob and 2 others like this');
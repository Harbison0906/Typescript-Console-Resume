let resume = {
  Name: 'seth harbison',
  Career: 'Accounting Assistant',
  Description: 'I love music and movie trivia'
}

console.log(         //list
  'Name: ' + resume.Name.toUpperCase() + "\n" +
  'Career: ' + resume.Career + "\n" +
  'Description: ' + resume.Description
);

let myInterests = ['Mid-century architecture', 'Movies', 'Drums']
console.log('');
console.log('My Interests:');
console.log(
  '* ' + myInterests[0] + "\n" +
  '* ' + myInterests[1] + "\n" +
  '* ' + myInterests[2] + "\n"
);

console.log('');

console.log('My Previous Experience:');

function displayPosition(company, title, description) {
  console.log(
    '* ' + company + ' | ' + 
    title + ' | ' +
    description
  );
}

displayPosition('Lewis Thomason', 'Legal Courier', 'Deliver documents to court houses, clients, other firms; issue/serve subpoenas; Notary Public ');

displayPosition('Books-A-Million', 'Magazine Specialist', 'Resposible for keeping magazines up to date and organized');

displayPosition('Printers and Stationers, Inc.', 'Warehouse Employee', 'Assemble, deliver, and install office furniture for small and large businesses');

console.log('');




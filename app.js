var myResume = {
    Name: 'seth harbison',
    Career: 'Functional Test Analyst I',
    Description: 'I love music and movie trivia'
};
console.log(//list
'Name: ' + myResume.Name.toUpperCase() + "\n" +
    'Career: ' + myResume.Career + "\n" +
    'Description: ' + myResume.Description);
var myInterests = ['Mid-century architecture', 'Movies', 'Drums'];
console.log('');
console.log('My Interests:');
console.log('* ' + myInterests[0] + "\n" +
    '* ' + myInterests[1] + "\n" +
    '* ' + myInterests[2] + "\n");
console.log('');
console.log('My Previous Experience:');
function displayPosition(company, title, description) {
    console.log('* ' + company + ' | ' +
        title + ' | ' +
        description);
}
displayPosition('Parallon', 'Functional Test Analyst 1', 'Run code tests to ensure medical codes are working correctly when calculating insurance reimbursement for patients');
displayPosition('Lewis Thomason', 'Legal Courier', 'Deliver documents to court houses, clients, other firms; issue/serve subpoenas; Notary Public ');
displayPosition('Books-A-Million', 'Magazine Specialist', 'Resposible for keeping magazines up to date and organized');
displayPosition('Printers and Stationers, Inc.', 'Warehouse Employee', 'Assemble, deliver, and install office furniture for small and large businesses');
console.log('');
function displaySkill(name, boolean) {
    if (boolean == true) {
        console.log('* BAM: ' + name);
    }
    else {
        console.log('* ' + name);
    }
}
displaySkill('Drums', true);
displaySkill('OnBase Accounting Software', true);
displaySkill('Microsoft Excel', true);
displaySkill('Nunchucks', false);
displaySkill('Woodworking', true);
displaySkill('Voice Impressions', true);

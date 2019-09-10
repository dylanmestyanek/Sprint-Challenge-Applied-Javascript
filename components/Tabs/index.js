// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(respo => respo.data.topics.forEach(title => tabs.appendChild(createTab(title))))
.catch(err => console.log('Failed to grab data', err));

function createTab(title){
    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab');
    tabContainer.textContent = title;
    
    return tabContainer;
}
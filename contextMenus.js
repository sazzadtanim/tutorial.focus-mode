
let selection=''
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  selection=info.selectionText
  switch (info.menuItemId) {
    case 'radio':
      // Radio item function
      console.log('Radio item clicked. Status:', info.checked);
      break;
    case 'checkbox':
      // Checkbox item function
      console.log('Checkbox item clicked. Status:', info.checked);
      break;
    default:
      // Standard context menu item function
      console.log(`Translate "${selection}" clicked`);
  }
}


chrome.runtime.onInstalled.addListener(function (props) {
  // Create one test item for each context type.

    let title = "Translate to BANGLA";
    chrome.contextMenus.create({
      title: title,
      contexts: ['selection'],
      id: '1'
    });
  
  console.log({props})

 
});
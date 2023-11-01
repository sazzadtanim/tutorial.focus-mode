
let selection=''
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
async function genericOnClick(info) {
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
      // const data=await fetchDataFromOtherSite(selection)
      // console.dir({data})
      console.log(`Translate "${data}" clicked`);
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

async function fetchDataFromOtherSite(word){
  const res=await fetch(getDictionaryImageUrl(word),{mode:'no-cors'})
  const data= await res.blob()
 return data
} 


function getDictionaryImageUrl(word){
  const processedWord=word.toLowerCase().trim()
  const firstLetterOfTheWord=processedWord.charAt(0)
  return `https://www.english-bangla.com/public/images/words/D${firstLetterOfTheWord}/${processedWord}`
}
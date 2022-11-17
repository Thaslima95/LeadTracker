// javascript
let myLeads=[]
const inputEl=document.getElementById('input-el')
let myLeadsEl=document.getElementById('myLeads-el')
let inputBtn=document.getElementById('save-el')
let deleteBtn=document.getElementById('delete-el')
let tabBtn=document.getElementById('Savetab-el')
//const tab=[{url:"www.google.com"}]
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        myLeadsStrng=JSON.stringify(myLeads)
        localStorage.setItem("myLeads",myLeadsStrng)
        renderLeads(myLeads);

  });
    
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    renderLeads(myLeads);
})
let localstoragetext=JSON.parse(localStorage.getItem("myLeads"))
if(localstoragetext)
{
myLeads=localstoragetext;
renderLeads(myLeads);
}
inputBtn.addEventListener("click",function(){
   const text=`https://${inputEl.value}`

myLeads.push(text)
myLeadsStrng=JSON.stringify(myLeads)
localStorage.setItem("myLeads",myLeadsStrng)
renderLeads(myLeads);
inputEl.value=""
})
function renderLeads(leads){
    
    let listItems=""
for(let i=0;i<leads.length;i++)
{
    localStorage.getItem(leads)
   // listItems+="<li><a href='"+ myLeads[i]+"' target='_blank'>"+ myLeads[i]+"</li>"
    listItems+=`
    <li>
    <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
    </li>`

}
myLeadsEl.innerHTML=listItems;
}







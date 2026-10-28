
// DOM Properties / Methods

// getElementById(id) → Given ID wala ek element find karta hai.

// getElementsByClassName(className) → Given class wale saare elements find karta hai.

// getElementsByTagName(tagName) → Given tag ke saare elements find karta hai.

// querySelector(selector) → Given selector ka pehla matching element find karta hai.

// querySelectorAll(selector) → Given selector ke saare matching elements find karta hai.

// outerHTML → Element ke tag aur uske andar ka complete HTML deta/set karta hai.

// innerHTML → Element ke andar ka complete HTML content deta/set karta hai.

// innerText → Element ka visible text deta/set karta hai.

// textContent → Element ka saara text content deta/set karta hai.

// style → Element ki CSS styling change karne ke liye use hota hai.

// children → Parent element ke sirf HTML child elements deta hai.

// childNodes → Parent ke saare child nodes, including text aur comments, deta hai.

// firstElementChild → Parent ka pehla HTML element deta hai.

// firstChild → Parent ka pehla child node deta hai.

// lastElementChild → Parent ka last HTML element deta hai.

// lastChild → Parent ka last child node deta hai.

// nextElementSibling → Current element ke baad wala next HTML element deta hai.

// nextSibling → Current element ke baad wala next node deta hai.

// previousElementSibling → Current element se pehle wala HTML element deta hai.

// previousSibling → Current element se pehle wala node deta hai.

// parentElement → Current element ka parent HTML element deta hai.

// parentNode → Current node ka parent node deta hai.

// closest(selector) → Current element se upar nearest matching element find karta hai.

// getAttribute(name) → Element ke given attribute ki value get karta hai.

// setAttribute(name, value) → Element ka attribute set ya change karta hai.

// createElement(tagName) → JavaScript mein new HTML element create karta hai.

// append() → Element ke andar end mein content/element add karta hai.

// prepend() → Element ke andar start mein content/element add karta hai.

// before() → Element ke bahar, usse pehle content/element add karta hai.

// after() → Element ke bahar, uske baad content/element add karta hai.

// remove() → Element ko DOM se remove karta hai.

// appendChild(node) → Parent ke end mein child node add karta hai (OLD METHODS)

// removeChild(node) → Parent ke andar se given child node remove karta hai (OLD METHODS)

// addEventListener(event, function) → Kisi event ko listen karke function run karta hai.

// removeEventListener(event, function) → Added event listener ko remove karta hai.

// forEach() → Array ke har element par function run karta hai.

// document → Puri HTML webpage/DOM ko represent karta hai.

// document.body → HTML document ka body element deta hai.

// document.head → HTML document ka head element deta hai.




//* ==============================
//* DOM IN JAVASCRIPT
//* ==============================


//* ==============================
//* DOM Properties and Methods
//* ==============================

//! DOM Properties:

// getElementById(id)
// getElementsByClassName(className)
// getElementsByTagName(tagName)
// querySelector(selector)
// querySelectorAll(selector)
// outerHTML
// innerHTML
// innerText
// textContent
// style

// ----------------------------------------------------


//! DOM Methods:
// createElement(tagName)
// append()
// prepend()
// before()
// after()
// remove()
// appendChild(node)   //old
// removeChild(node)   //old
// addEventListener(event, function)
// removeEventListener(event, function)
// setAttribute(name, value)
// getAttribute(name)
// parentNode / parentElement
// childNodes / children
// firstChild / firstElementChild
// lastChild / lastElementChild
// nextSibling / nextElementSibling
// previousSibling / previousElementSibling
// closest(selector)
// forEach (Array.from)


// ----------------------------------------------------


// ===========================
// DOM-PROPERTIES
// ===========================



// 1
//  let div = document.getElementById("container");
//  console.log(div);



// ----------------------------------------------------


// 2
// let div = document.getElementsByClassName("cont");
// console.log(div);

// // console.log(...div);

// for (let item of div) {
//     console.log(item.innerHTML);
//     console.log(item.innerText);
//     console.log(item.textContent);
//     console.log(item);
// }



// ----------------------------------------------------



// 3
// let lii = document.getElementsByTagName("li");
// console.log(lii);

// console.log(...li);

// for(let item of li){
//     console.log(item);
// }


// ----------------------------------------------------


// 4
// let li = document.querySelector("li");
// console.log(li);
// console.log(li.innerHTML = "Atruba");


// ----------------------------------------------------


// 5
// let li = document.querySelectorAll("li");
// console.log(li);



// li.forEach((item)=>{
//     console.log(item);

// })



// for(let item of li){
//     console.log(item);

// }



// ==================================================================================================================


// ===========================
// DOM-METHODS
// ===========================

// console.log(document);
// console.log(document.body);         //body
// console.log(document.head);         //head

// ----------------------------------------------------

// 1. children

// let bodychild = document.body.children;
// console.log(bodychild);

// for (let item of bodychild) {
//     console.log(item);

// }


// [...bodychild].forEach((elem) => {
//     console.log(elem);

// })


// ----------------------------------------------------


// 2. childNodes


// let bodychild2 = document.body.childNodes;
// // console.log(bodychild2);

// bodychild2.forEach((elem) => {
//     console.log(elem.innerHTML);

// })


// ----------------------------------------------------

// 3. firstElementChild

// let body = document.body;
// console.log(body.firstElementChild);         //container


// ----------------------------------------------------

// 4. firstChild


// let body = document.body;
// console.log(body.firstChild);                //text


// ----------------------------------------------------

// 5. lastElementChild

// let body = document.body;
// console.log(body.lastElementChild);         //script


// ----------------------------------------------------


// 6. lastChild

// let body = document.body;
// console.log(body.lastChild);             //script


// ----------------------------------------------------

// 7. nextElementSibling

// let div = document.querySelector("#container");
// console.log(div.nextElementSibling);         //h2



// ----------------------------------------------------

// 8. nextSibling

// let div = document.querySelector("#container");
// console.log(div.nextSibling);               //text


// ----------------------------------------------------

// 9. previousElementSibling

// let div = document.querySelector("#container");
// console.log(div.previousElementSibling);               //h1


// ----------------------------------------------------

// 10. previousSibling

// let div = document.querySelector("#container");
// console.log(div.previousSibling);                   //text

// // ----------------------------------------------------

// // 11. parentElement

// let div = document.querySelector("#container");
// console.log(div.parentElement);             //body

// ----------------------------------------------------

// 12. parentNode

// let div = document.querySelector("#container");
// console.log(div.parentNode);                //body 


// ----------------------------------------------------


// 13. closest(selector)

// let heading = document.querySelector("#heading")
// console.log(heading.closest("#container"));
// console.log(heading.closest("h1"));


// ================================================================================================================================


// setAttribute(name, value)
// getAttribute(name)

// all attributes can access and change 
// getAttribute(name)

// let div = document.querySelector("#container");
// console.log(div.getAttribute("id"));            //container
// console.log(div.getAttribute("class"));         //cont
// console.log(div.getAttribute("name"));          //divy
// console.log(div.getAttribute("value"));         //value
// console.log(div.getAttribute("href"));          //link
// console.log(div.getAttribute("title"));         //divcontainer


// ----------------------------------------------------


// setAttribute(name, value)


// div.setAttribute("id", "conyyyyyyyyy");
// div.setAttribute("class", "123");
// div.setAttribute("name", "name2");
// div.setAttribute("value", "value2");
// div.setAttribute("href", "href22");
// div.setAttribute("title", "title22");


// ================================================================================================================================

// createElement(tagName)
// append()
// prepend()
// before()
// after()


// let div = document.querySelector("#container");

// let h3 = document.createElement("h3");
// h3.innerText = "Atruba"
// div.prepend(h3);            //show inside start of the div
// div.append(h3);             //show inside end of the div   
// div.before(h3);             //show outside start of the div
// div.after(h3);              //show outside end of the div
// // h3.remove();             //remove element


// ================================================================================================================================
























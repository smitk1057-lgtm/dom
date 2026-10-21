//let a=document.querySelector('h1')
// a.nodeName='P'
//  console.log(a.tagName)
// console.log(a.tagName) // return only tag name
// console.log(a.nodeName) // return  tagName comment node text node
// console.log(a.firstChild)


//console.log(a.innerText)
//console.log(a.textContent) //formating main deta hai


// a.innerText='baki jo bacha tha kale chor le gaye' //change inner text
//  console.log(a)

// a.innerText='    baki jo bacha \n     tha kale      chor le gaye'
// console.log(a.innerText)
// console.log(a.textContent)

// a.textContent='    baki jo bacha \n tha kale      chor le gaye'
// console.log(a)



// a.innerHTML = '<p> baki jo bacha tha kale chor le gaye </p>'
//  console.log(a.innerHTML)
//  console.log(a.firstChild)

// console.log(a.tagName)
// console.log(a.nodeName)
// console.log(a.innerText)
// console.log(a.textContent)
// console.log(a.innerHTML)



let div= document.querySelector('div')
let ele=document.createElement('p')
ele.innerText='new paragraph'
// div.append(ele)
// div.prepend(ele )
//div.after(ele)
//div.before(ele)

//div.insertAdjacentElement("afterbegin",ele)
//div.insertAdjacentElement("beforeend",ele )
// div.remove() //full div remove ho jayega 
 //let p = div.children[0]
 //p.remove()

// let alpha= document.querySelector('#alpha') 
// alpha.style.backgroundColor='blue'
//console.log(alpha)
//let parent=alpha.parentNode
//console.log(parent)
//parent.appendChild(ele)
//parent.append(ele)  //#text #comment #element

// let newEle=document.createElement('div')
// newEle.innerText='hello'

// parent.replaceChild(newEle,alpha)
// parent.removeChild(newEle)



let lastPara = div.children[2]
div.insertBefore(ele,lastPara)
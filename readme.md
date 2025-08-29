




### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:  getElementById— this is used to get only one specific element.

        getElementsByClassName— this is used to get selected multiple elements; we can use a loop to get a single element.

        querySelector— This selects only the first element from the matching CSS selector. 

        querySelectorAll— this selects all elements from matching CSS selectors. 


2. How do you **create and insert a new element into the DOM**?
Answer:  create DOM - document.createElement("tagName") 
         Set the property.
         insert DOM - appendChild, append, prepend etc
      

3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is a part of JavaScript's DOM Event Propagation.

        When an element is clicked, it moves up from that element to the window. Start from child
        after parent > body > html > document > window.

        when we addEventListener add.If we click on a child, it clicks on the child, parent, and body.
        If we click parent, it clicks on parent and body. If we click body, it clicks on body.


4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Instead of adding event listeners to each child element separately, add an 
        event listener to the parent element and handle child elements using event bubbling.
        No separate listener is required for child elements.
        Even if a new element is added to the DOM, the parent listener will still work. And the advantage
        of this is better performance and cleaner code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: The preventDefault() method is used to stop the default behavior of an   
        event. Example: auto page reload.

        Event propagation—The function does not bubble from child to parent.

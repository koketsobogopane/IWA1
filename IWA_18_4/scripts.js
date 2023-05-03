/**Kitchen express: a product that will be sold to restaurants to help them track customer orders from 
 * the moment they are taken by a waiter until they are finally served to the customer. It also records 
 * the table number and the exact time that the order was created.*/

import { html, createOrderHtml, updateDraggingHtml, moveToColumn } from "./view.js";
import { createOrderData, updateDragging } from "./data.js";
let orderExists = false
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
  * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

const handleDragStart = (event) => {
      
}

const handleDragEnd = (event) => {
};

let ishelpVisible = false 
const handleHelpToggle = (event) => {
    if (ishelpVisible) {
        html.help.overlay.style.display = ''
        ishelpVisible = false;
      } else {
        html.help.overlay.style.display = 'block'
        ishelpVisible = true;
      }
};

let isAddVisible = false
const handleAddToggle = (event) => {
    if (isAddVisible) {
        html.add.form.reset()
        html.add.overlay.style.display = ''
        isAddVisible = false;
      } else {
        html.add.overlay.style.display = 'block'
        isAddVisible = true;
      }
};

const handleAddSubmit = (event) => {
    event.preventDefault()
    const order = {
        title: html.add.title.value,
        table: html.add.table.value,
        column: 'ordered'
    }
  let orderData = createOrderData(order)
  html.add.overlay.style.display = ''
  const resentOrder = createOrderHtml(orderData)
  const customerOrder = html.other.grid.querySelector(`[data-column="${orderData.column}"]`)
  orderExists = true
  customerOrder.innerHTML += resentOrder.innerHTML
  html.add.form.reset()
  customerOrder.setAttribute('draggable', true)
}



let isEditVisble = false; 
const handleEditToggle = (event) => {
if (orderExists === true) {
    if (isEditVisble) {
    html.edit.form.reset()
    html.edit.overlay.style.display = ''
    isEditVisble = false;
   } else {
    html.edit.overlay.style.display = 'block'
    isEditVisble = true;
   }  
}

}

const handleEditSubmit = (event) => {
    event.preventDefault()
    html.edit.overlay.style.display = ''
    if (orderExists === true){

        const orderEdit = {
            title: html.edit.title.value,
            table: html.edit.table.value,
            column: html.edit.column.value
        }
        
        const previousOrdertemplate = {
            title: document.querySelector('[data-order] [data-order-title]'),
            table: document.querySelector('[data-order] dl.order__details div.order__row [data-order-table] '),
        }
        
         previousOrdertemplate.title.innerHTML = orderEdit.title
        previousOrdertemplate.table.innerHTML = orderEdit.table
        moveToColumn(document.querySelector('[data-id]').getAttribute('data-id'), orderEdit.column)
        
    } else {
        console.error ('there is no order to change!')
    }
}

const handleDelete = (event) => {
    document.querySelector('[data-order]').remove() 
    orderExists = false
    html.edit.overlay.style.display = ''
    html.edit.form.reset()
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)


html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}
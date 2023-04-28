import { html, createOrderHtml, updateDraggingHtml, moveToColumn } from "./view.js";
import { createOrderData, updateDragging } from "./data.js";
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
    updateDragging()
    updateDraggingHtml()
    handleDragOver()
    moveToColumn()
}
const handleDragEnd = (event) => {
    updateDragging()
    updateDraggingHtml()
    handleDragOver()
    moveToColumn()
}
const handleHelpToggle = (event) => {html.help.overlay.style.display = 'block'}
const handleHelpToggleOff = (event) => {html.help.overlay.style.display = ''}
const handleAddToggle = (event) => {html.add.overlay.style.display = 'block'}
const handleAddToggleOff = () => {
    html.add.overlay.style.display = ''
}
const handleAddSubmit = (event) => {
    event.preventDefault()
    const order = {
        title: html.add.title.value,
        table: html.add.table.value,
    }
  let orderData = createOrderData(order)
  html.add.overlay.style.display = ''
  const bbb = createOrderHtml(orderData)
  const customerOrder = html.other.grid.querySelector('[data-column="ordered"]')
  customerOrder.innerHTML = bbb.innerHTML
}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggleOff)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

// html.other.grid.addEventListener('click', handleEditToggle)
// html.edit.cancel.addEventListener('click', handleEditToggle)
// html.edit.form.addEventListener('submit', handleEditSubmit)
// html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggleOff)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}
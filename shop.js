const allItems = []
let editIndex;
let deleteIndex;
const errMsg = document.getElementById("errMsg")
const addItem = () => {
    const itemInput = document.getElementById('itemInput').value
    if (itemInput.trim() == ''){
        errMsg.style.display= "block"
    }else{
        errMsg.style.display = "none"
        allItems.push(itemInput)
        console.log(allItems);
        document.getElementById('itemInput').value = ''
        showItems()
    }
}
const deleteItem = (index) => {
    console.log(index);
    allItems.splice(index, 1)
    window.confirm('Are you sure you want to delete')
    totalItems.innerHTML = `${index}`
    lastAdded.innerHTML = `${allItems ? '-' : allItems[allItems.length]}`
    itemCount.innerHTML = `<div style="position:relative"><p style="position:absolute; right:5px; top:-10px;  z-index:-10px; font-size:10px; background-color: #0f172a;color: #ffffff; padding: 3px; border-radius: 5px" >${index}</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
<rect width="256" height="256" fill="none" />
<path fill="#000" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></svg></p></div>
    `
    showItems()
}
const confirmDel = (i) => {
    deleteIndex = i
    warning = allItems[i]
    console.log(warning)
}
const deleteAll = () => {
    const warning = document.getElementById('warning')
    console.log(allItems);
    if(warning){
        allItems.splice(0,allItems.length)
        showItems()
        totalItems.innerHTML = `${allItems?'0':allItems.length}`
        lastAdded.innerHTML = `${allItems ? '-' : allItems[allItems.length]}`
        itemCount.innerHTML = `<div style="position:relative"><p style="position:absolute; right:5px; top:-10px;  z-index:-10px; font-size:10px; background-color: #0f172a;color: #ffffff; padding: 3px; border-radius: 5px" >${allItems?'0':allItems.length}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <path fill="#000" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></svg></p></div>
        `
    } else{
        showItems()
    }    
}

const editItem = (i) => {
    console.log(i);
    editIndex = i
    editInput.value = allItems[i]
}
const saveEdit = () => {
    // alert('Works')
    const userEdit = document.getElementById('editInput').value
    if (userEdit.trim() == ''){
        errMsg.style.display= "block"
    }else{
        errMsg.style.display = "none"
        allItems.splice(editIndex,1,userEdit)
        console.log(allItems);
        showItems()
        document.getElementById('editInput').value = ''
    }
}

function showItems() {
    const lastAdded = document.getElementById('lastAdded')
    product.style.display= "block"
    emptySection.innerHTML = ''
    for(let i = 0; i < allItems.length; i++){
        if(allItems.length == 1){
            totalItems.innerHTML = `${i + 1}`
            lastAdded.innerHTML = `${allItems.length>0?allItems:'-'}`
            itemCount.innerHTML = `<div style="position:relative"><p style="position:absolute; right:6px; top:-10px;  z-index:-10px; font-size:10px; background-color: #0f172a; color: #ffffff; padding: 3px; border-radius: 5px" >${i + 1}</p><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
	<rect width="256" height="256" fill="none" />
	<path fill="#000" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></svg></p></div>`
        } else{
            totalItems.innerHTML = `${i + 1}`
            lastAdded.innerHTML = `${allItems.length>0?allItems[allItems.length - 1]:'-'}`
            itemCount.innerHTML = `<div style="position:relative"><p style="position:absolute; right:4px; top:-13px;  z-index:-10px; font-size:12px; background-color: #0f172a; color: #ffffff; padding: 3px; border-radius: 5px" >${i + 1}</p><p><svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 256 256">
	<rect width="256" height="256" fill="none" />
	<path fill="#000" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></svg></p></div>`
    
        }
        if(emptySection==''){
            itemCount.innerHTML += `0 Items`
        }
        emptySection.innerHTML += `<p> ${allItems[i]} <button onclick="deleteItem(${i})" class="btn btn-danger px-4 fw-semibold">Delete<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<rect width="30" height="24" fill="none" />
	<path fill="#fff" d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z" />
</svg></button> <button onclick="editItem(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success px-4 fw-semibold">Edit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<rect width="30" height="24" fill="none" />
	<g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
		<path stroke-dasharray="44" stroke-dashoffset="44" d="M7 17v-4l10 -10l4 4l-10 10h-4">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.5s" to="0" />
		</path>
		<path stroke-dasharray="20" d="M3 21h18">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
		</path>
		<path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to="0" />
		</path>
	</g>
</svg></button></p> 
        `
        
    }
    
}
const cancel = () => {
    errMsg.style.display = "none"
}
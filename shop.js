const allItems = []
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
        itemCount.innerHTML = `<div style="position:relative"><p style="position:absolute; right:5px; top:-10px;  z-index:-10px; font-size:10px; background-color: #0f172a;color: #ffffff; padding: 3px; border-radius: 5px" >${index}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
	<rect width="256" height="256" fill="none" />
	<path fill="#000" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></svg></p></div>
        `
        showItems()
    }
    // const editItem = () => {
    //     console.log(index);
    //     allItems.splice(index,1,)
    //     showItems()
        
    // }

function showItems() {
    product.style.display= "block"
    emptySection.innerHTML = ''
    for(let i = 0; i < allItems.length; i++){
        if(allItems.length == 1){
            itemCount.innerHTML = `<div style="position:relative"><p style="position:absolute; right:6px; top:-10px;  z-index:-10px; font-size:10px; background-color: #0f172a; color: #ffffff; padding: 3px; border-radius: 5px" >${i + 1}</p><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
	<rect width="256" height="256" fill="none" />
	<path fill="#000" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></svg></p></div>`
        } else{
            itemCount.innerHTML = `<div style="position:relative"><p style="position:absolute; right:4px; top:-13px;  z-index:-10px; font-size:12px; background-color: #0f172a; color: #ffffff; padding: 3px; border-radius: 5px" >${i + 1}</p><p><svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 256 256">
	<rect width="256" height="256" fill="none" />
	<path fill="#000" d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></svg></p></div>`
        }
        if(emptySection==''){
            itemCount.innerHTML += `0 Items`
        }
        emptySection.innerHTML += `<p> ${allItems[i]} <button onclick="deleteItem(${i})">Delete</button> <button onclick="editItem()">Edit</button></p>
        `
    }
}
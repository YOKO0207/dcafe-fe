const getSavedItems = () => {
    const getMenuItems = new Promise((resolve, reject) => { 
        let data = localStorage.getItem('menuItems') 
        let menuItems = JSON.parse(data);
        if (menuItems) {
            resolve(menuItems) 
            } else {
            reject('Failed') 
            }
        })
        getMenuItems.then((message) => { 
            message.map(i=>console.log(i))
        }).catch((message) => { 
            console.log(message)
        })
}

export default getSavedItems;
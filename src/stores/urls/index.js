//for example
const AppUrl=process.env.REACT_APP_API_URL

export const getMenuItems = `${AppUrl}/menuitem/getmenuitems`
export const getCategories = `${AppUrl}/category/getcategories`
export const getMenuItemsByCategory = (categoryId) =>
  `${AppUrl}/menuitem/getmenuitemsbycategory/${categoryId}`
export const getMenuItem = (menuItemId) =>
    `${AppUrl}/menuitem/getmenuitem/${menuItemId}`
export const saveOrder = `${AppUrl}/orders/saveorder`
export const sendEmail = `${AppUrl}/orders/sendEmail`
export const getPosts = `${AppUrl}/posts/getposts`
export const saveMenuItem = `${AppUrl}/menuitem/savemenuitem`
export const savePosts = `${AppUrl}/posts/saveposts`
export const saveShopAdmin = `${AppUrl}/shopadmin/saveshopadmin`
export const saveShopUser = `${AppUrl}/shopuser/saveshopuser`
export const findShopAdmin = (shopAdminId) =>
    `${AppUrl}/shopadmin/findshopadmin/${shopAdminId}`
export const findShopUser = (shopUserId) =>
    `${AppUrl}/shopuser/findshopuser/${shopUserId}`




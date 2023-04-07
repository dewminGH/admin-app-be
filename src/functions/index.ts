/*auth*/
export { default as register } from './auth/register';
export { default as confirmRegister } from './auth/confirmRegister';
export { default as login } from './auth/login';
export { default as getNewTokens } from './auth/getNewTokens';
export { default as getUser } from './auth/getUser';
export { default as deleteUser } from './auth/deleteUser';

/*shop inventory management*/
export { default as getShop } from './shop/getShop';
export { default as removeItem } from './shop/removeItem';
export { default as saveItem } from './shop/saveItem';

/*customer management*/
export { default as getUserInventory } from './customer/getCustomerInventory';

import { Menu } from './menu.model';

export const verticalMenuItems = [  
   
    new Menu (1, 'HOME', '/home', null, 'Home', null, false, 0),
    new Menu(2, 'OUT HISTORY', '/aboutus', null, null, null, false, 0),
    new Menu(3, 'KIBSONS CARES', '/kibsonscares', null, null, null, false, 0),
    new Menu(4, 'PRODUCTS', '/shopping', null,null, null, false, 0),
    new Menu(5, 'FEATURED PRODUCTS', '/shopping', null, null, null, false, 0), 
    new Menu(6, 'MY KIBSONS', null, null, null, null, true, 0), 
    new Menu(61, 'MY BASKETS', null, null, null, null, true, 6),     
    new Menu(611, 'My Favourites', '/mywishlist', null, null, null, false, 61), 
    new Menu(612, 'My Shopping Cart', '/myshopcart', null, null, null, false, 61), 
    new Menu(613, 'My Vouchers', '/myvouchers', null, null, null, false, 61), 

    new Menu(62, 'ORDER INFO', null, null, null, null, true, 6),
    new Menu(621, 'My Wallet', '/mywallet', null, null, null, false, 62),
    new Menu(622, 'My Statement', '/mystatement', null, null, null, false, 62),
    new Menu(623, 'Pay Bills Online', '/paybillsonline', null, null, null, false, 62),
    new Menu(624, 'Track Shipment', '/trackshipment', null, null, null, false, 62),
    new Menu(625, 'My Order History', '/orderhistoru', null, null, null, false, 62),
    
    new Menu(63, 'MY PRIVILEGES', null, null, null, null, true, 6),    
    new Menu(631, 'Account Points', '/myaccountpoints', null, null, null, false, 63),
    new Menu(632, 'Reward Points', '/myrewardpoints', null, null, null, false, 63),
    new Menu(633, 'Refer to Friends', '/refertofriends', null, null, null, false, 63),
    new Menu(634, 'Return Boxes / Bottles', '/returnboxes', null, null, null, false, 63),
    
    new Menu(64, 'USER PROFILE', null, null, null, null, true, 6),    
    new Menu(641, 'My Addresses', '/address', null, null, null, false, 64),    
    new Menu(642, 'Set Delivery Location', '/deliverylocaiton', null, null, null, false, 64),    
    new Menu(643, 'Reset Password', '/resetpassword', null, null, null, false, 64)
    // new Menu (1, 'USER MENU', null, null, 'User', null, true, 0),
    // new Menu(11, 'Login Page', '/login', null, 'Login', null, false, 1),
    // new Menu(12, 'Register Page', '/register', null, 'Register', null, false, 1),
    // new Menu(2, 'Blank MENU', '/blank', null, 'Blank', null, false, 0),
    // new Menu(3, 'Test MENU', '/test', null, 'Test', null, false, 0),   
];

export const horizontalMenuItems = [

    new Menu (1, 'HOME', '/home', null,'Home' , null, false, 0),
    new Menu(2, 'OUT HISTORY', '/aboutus', null, null, null, false, 0),
    new Menu(3, 'KIBSONS CARES', '/kibsonscares', null, null, null, false, 0),
    new Menu(4, 'PRODUCTS', '/shopping', null, null, null, false, 0),
    new Menu(5, 'FEATURED PRODUCTS', '/shopping', null, null, null, false, 0),  
    new Menu(6, 'MY KIBSONS', null, null, null, null, true, 0), 
    new Menu(61, 'MY BASKETS', null, null, null, null, true, 6),     
    new Menu(611, 'My Favourites', '/mywishlist', null, null, null, false, 61), 
    new Menu(612, 'My Shopping Cart', '/myshopcart', null, null, null, false, 61), 
    new Menu(613, 'My Vouchers', '/myvouchers', null, null, null, false, 61), 

    new Menu(62, 'ORDER INFO', null, null, null, null, true, 6),
    new Menu(621, 'My Wallet', '/mywallet', null, null, null, false, 62),
    new Menu(622, 'My Statement', '/mystatement', null, null, null, false, 62),
    new Menu(623, 'Pay Bills Online', '/paybillsonline', null, null, null, false, 62),
    new Menu(624, 'Track Shipment', '/trackshipment', null, null, null, false, 62),
    new Menu(625, 'My Order History', '/orderhistoru', null, null, null, false, 62),
    
    new Menu(63, 'MY PRIVILEGES', null, null, null, null, true, 6),    
    new Menu(631, 'Account Points', '/myaccountpoints', null, null, null, false, 63),
    new Menu(632, 'Reward Points', '/myrewardpoints', null, null, null, false, 63),
    new Menu(633, 'Refer to Friends', '/refertofriends', null, null, null, false, 63),
    new Menu(634, 'Return Boxes / Bottles', '/returnboxes', null, null, null, false, 63),
    
    new Menu(64, 'USER PROFILE', null, null, null, null, true, 6),    
    new Menu(641, 'My Addresses', '/address', null, null, null, false, 64),    
    new Menu(642, 'Set Delivery Location', '/deliverylocaiton', null, null, null, false, 64),    
    new Menu(643, 'Reset Password', '/resetpassword', null, null, null, false, 64)

    // new Menu (1, 'USER MENU', null, null, 'User', null, true, 0),
    // new Menu(11, 'Login Page', '/login', null, 'Login', null, false, 1),
    // new Menu(12, 'Register Page', '/register', null, 'Register', null, false, 1),
    // new Menu(2, 'Blank MENU', '/blank', null, 'Blank', null, false, 0),
    // new Menu(3, 'Test MENU', '/test', null, 'Test', null, false, 0),  

];

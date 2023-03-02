// import { newsMenuItem, authorsMenuItem, photosMenuItem, formatsMenuItem, aboutUsMenuItem, contactMenuItem, imprintMenuItem, dsvgoMenuItem, instagramMenuItem, facebookMenuItem, newsletterMenuItem } from '../Navigation/MenuItems';
// import { transformMenuItemToSlug } from '../Navigation/MenuItems';
// import { transformMenuItemToApiSlug } from '../Navigation/MenuItems';

export const home = 'Kabeljau&Dorsch';
export const newsMenuItem = 'Aktuelles';
export const newsMenuItemSlug = 'aktuelles';
export const newsMenuItemApiSlug = 'aktuelles';
export const authorsMenuItem = 'Autor*innen';
export const authorsMenuItemSlug = 'autorinnen';
export const authorsMenuItemApiSlug = 'autor-innens';
export const photosMenuItem = 'Fotos';
export const photosMenuItemSlug = 'fotos';
export const photosMenuItemApiSlug = 'fotos';
export const formatsMenuItem = 'Formate';
export const formatsMenuItemSlug = 'formate';
export const formatsMenuItemApiSlug = 'formates';
export const aboutUsMenuItem = 'Über uns';
export const aboutUsMenuItemSlug = 'ueberuns';
export const aboutUsMenuItemApiSlug = 'ueber-uns';
export const contactMenuItem = 'Kontakt';
export const contactMenuItemSlug = 'kontakt';
export const contactMenuItemApiSlug = 'kontakt';
export const imprintMenuItem = 'Impressum';
export const imprintMenuItemSlug = 'impressum';
export const imprintMenuItemApiSlug = 'impressum';
export const dsvgoMenuItem = 'Datenschutz';
export const dsvgoMenuItemSlug = 'datenschutz';
export const dsvgoMenuItemApiSlug = 'dsvgo';
export const instagramMenuItem = 'Instagram';
export const instagramUrl = 'https://www.instagram.com/kabeljauunddorsch';
export const facebookMenuItem = 'Facebook';
export const facebookUrl = 'https://www.facebook.com/KabeljauundDorsch';
export const newsletterMenuItem = 'Newsletter';
export const newsletterUrl = 'http://eepurl.com/hlg8IL';
export const blogPostSlug = 'blog';
export const blogPostApiSlug = 'blogs';

export const transformMenuItemToSlug = (menuItem) => {
    switch (menuItem){
        case newsMenuItem:
            return newsMenuItemSlug;
        case authorsMenuItem:
            return authorsMenuItemSlug;
        case photosMenuItem:
            return photosMenuItemSlug;
        case formatsMenuItem:
            return formatsMenuItemSlug;
        case aboutUsMenuItem:
            return aboutUsMenuItemSlug;
        case contactMenuItem:
            return contactMenuItemSlug;
        case imprintMenuItem:
            return imprintMenuItemSlug;
        case dsvgoMenuItem:
            return dsvgoMenuItemSlug;
        default: 
            return '';
    }
}

export const transformMenuItemToApiSlug = (menuItem) => {
    switch (menuItem){
        case newsMenuItem:
            return newsMenuItemApiSlug;
        case authorsMenuItem:
            return authorsMenuItemApiSlug;
        case photosMenuItem:
            return photosMenuItemApiSlug;
        case formatsMenuItem:
            return formatsMenuItemApiSlug;
        case aboutUsMenuItem:
            return aboutUsMenuItemApiSlug;
        case contactMenuItem:
            return contactMenuItemApiSlug;
        case imprintMenuItem:
            return imprintMenuItemApiSlug;
        case dsvgoMenuItem:
            return dsvgoMenuItemApiSlug;
        default: 
            return '';
    }
}


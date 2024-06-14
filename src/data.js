//Menu IMG
import bobaIMG from "./assets/menuPics/boba.jpg";
import BentoIMG from "./assets/menuPics/bento.jpg";
import MatchaIMG from "./assets/menuPics/matchaPudding.jpg";
import smoothieIMG from "./assets/menuPics/smoothie.jpg";
import matchaBobaIMG from "./assets/menuPics/matchaBoba.jpg";
import popcornChickIMG from "./assets/menuPics/popcornChicken.jpg";
import GyozaIMG from "./assets/menuPics/gyoza.jpg";
import SesamePuddingIMG from "./assets/menuPics/whitePudding.jpg";
import TaroPuddingIMG from "./assets/menuPics/taroPudding.jpg";

// Locations IMGs
import LPIMG from "./assets/locationPics/lincolnpark.jpg";
import LSIMG from "./assets/locationPics/lincolnsquare.jpg";
import chinatown from "./assets/locationPics/chinatown.jpg";

// News IMGs
import cookingIMG from "./assets/newsPics/womanCooking.jpg"
import cntownIMG from "./assets/newsPics/chinatown.jpg";
import bentoNewsIMG from "./assets/newsPics/bentoNEWS.jpg";
import riceFarmerIMG from "./assets/newsPics/farmersNEWS.jpg";
import renoIMG from "./assets/newsPics/renovations.jpg";


// All image alts contain the sources of the images. 
//All writing done by me


export const MENU_ITEMS = [

    // Drinks
    {
        menuImg: bobaIMG,
        altText: "https://www.pexels.com/photo/clear-plastic-cup-with-brown-liquid-and-ice-4071422/",
        name: "Brown Sugar Boba Milk Tea",
        price: "8",
        description: "Our famous brown sugar boba milk tea, this delicious classic has been around since our inception!"
    },

    {
        menuImg: matchaBobaIMG,
        altText: "https://www.pexels.com/photo/a-person-holding-a-bubble-tea-6413659/",
        name: "Matcha Boba Milk Tea",
        price: "10",
        description: "Our incredible milk tea with the fan favorite matcha flavor."
    },

    {
        menuImg: smoothieIMG,
        altText: "https://www.pexels.com/photo/food-cold-summer-cocktail-6413609/",
        name: "Strawberry Smoothie",
        price: "7",
        description: "Feeling too hot? Get a delicious strawberry smoothie today!"
    },

    //Foods 
    {
        menuImg: BentoIMG,
        altText: "https://www.pexels.com/photo/japanese-food-in-a-lunch-box-8165347/",
        name: "Bento Box Lunch",
        price: "15",
        description: "Hungry? Our bento box is perfect for anyone who wants a full lunch!"
    },

    {
        menuImg: popcornChickIMG,
        altText: "https://www.pexels.com/photo/fried-food-in-brown-carton-2833499/",
        name: "Popcorn Chicken",
        price: "13",
        description: "A delicious snack for the whole family! Our perfect popcorn chicken is made fresh to order."
    },

    {
        menuImg: GyozaIMG,
        altText: "https://www.pexels.com/photo/fried-round-dumplings-on-black-ceramic-bowl-5409009/",
        name: "Fried Gyoza",
        price: "15",
        description: "Hand-made, perfectly fried, delicious. You need to try our Gyoza."
    },

    // Desserts
    {
        menuImg: MatchaIMG,
        altText: "https://www.pexels.com/photo/clear-glass-jar-with-green-and-red-liquid-topped-with-strawberry-8134134/",
        name: "Matcha Pudding",
        price: "10",
        description: "Our World Famous Matcha Pudding served with strawberries. This pudding will have you begging for seconds!"
    },

    {
        menuImg: SesamePuddingIMG,
        altText: "https://www.pexels.com/photo/two-jars-fruit-shake-3547176/",
        name: "Sesame Pudding",
        price: "9",
        description: "Our special sesame pudding recipe has been passed down for generations."
    },
    
    {
        menuImg: TaroPuddingIMG,
        altText: "https://www.pexels.com/photo/chia-seed-pudding-topped-with-almond-flakes-and-blueberries-in-a-jar-4397286/",
        name: "Taro Pudding",
        price: "12",
        description: "Our delicious Taro Pudding, made fresh daily!"
    },
];

export const LOCATION_ITEMS = [
    {
        neighborhood: "Lincoln Park",
        address: ["953 W. Webster Ave,","Chicago, IL, 60614"],
        phone: "Phone: +1(123)456-7890",
        locationIMG: LPIMG,
        locationAlt: "https://www.pexels.com/photo/cull-pistol-establishment-during-nighttime-2260824/",
    },
    {
        neighborhood: "Chinatown",
        address: ["2026 S. Clark Unit C,", "Chicago, IL, 60616"],
        phone: "Phone: +1(123)456-7890",
        locationIMG: chinatown,
        locationAlt: "https://www.pexels.com/photo/terrace-of-cafe-with-green-plants-5531018/",

    },
    {
        neighborhood: "Lincoln Square",
        address: ["4705 N Lincoln Ave,", "Chicago, IL, 60625"],
        phone: "Phone: +1(123)456-7890",
        locationIMG: LSIMG,
        locationAlt: "https://www.pexels.com/photo/people-in-cafe-on-street-in-city-3888048/",
    },
]

export const REVIEW_DATA = [
    {
        username: "bobaluv3r",
        stars: "4.5/5",
        review: "I tried the brown sugar and it was good, the service was nice and it was moderately priced. Will be returning.",
    },
    {
        username: "bobjoe",
        stars: "5/5",
        review: "I love this place! Been going here for years! The chinatown location is my favorite!",
    },
    {
        username: "TheMiyazaki",
        stars: "3.5/5",
        review: "Good boba but the food is a little bit overpriced",
    },
    {
        username: "luvchicago",
        stars: "4/5",
        review: "The store is always clean and the food is always yummy. I wish they had a bathroom though",
    },
    {
        username: "jasminez",
        stars: "5/5",
        review: "This place is delicious! I have brought all my family members to try it!",
    },
    {
        username: "imigo",
        stars: "4/5",
        review: "This place is amazing but they need more boba types!",
    },
    {
        username: "MarikaTE",
        stars: "5/5",
        review: "Hello Boba has excellent service, food, and boba! I will absoluetly be returning.",
    },


]

export const COUPON_DETAILS = [
    {
        title: "Birthday Boba!",
        description: "Buy one boba get one free for our 5 year anniversary!",
        code: "HappyHB5",
    },
    {
        title: "Lunch Special",
        description: "30% off a boba and dessert with purchase of a lunch.",
        code: "LUNCH30",
    },
    {
        title: "Friends with Boba",
        description: "Buy two boba get one free! Perfect for sharing with your",
        code: "FRIENDS",
    },
    {
        title: "Monthly Special",
        description: "10% off all food items for the month of June!",
        code: "JUNE4YOU",
    },
]

export const NEWS_ITEMS = [
    {
        img: cookingIMG,
        alt: "https://www.pexels.com/photo/a-woman-cooking-octopus-balls-4980097/",
        date: "5/22/24",
        title: "Hello Boba | How our family recipes shaped our restaurants.",
        preview: "We at Hello Boba have tons of delicious menu items. It's no surpsise then that we have family recipes to thank. My family was from...",
    },
    {
        img: cntownIMG,
        alt: "https://www.pexels.com/photo/drone-shot-of-buildings-in-chinatown-9666111/",
        date: "4/16/24",
        title: "Hello Boba | Chinatown location now open!",
        preview: "We are happy to announce the opening of our new Chinatown Location! Check the promotions page for any special chinatown specific deals...",
    },
    {
        img: bentoNewsIMG,
        alt: "https://www.pexels.com/photo/ebi-tempura-bento-on-brown-wooden-table-884596/",
        date: "3/20/24",
        title: "Hello Boba | Saying goodbye to one of our favorite dishes, why we did it.",
        preview: "We at Hello Boba love all of the dishes we prepare for you. That's why it is with a heavy heart that we announce the removal of one of our dishes from the Hello Boba menu... ",
    },
    {
        img: riceFarmerIMG,
        alt: "https://www.pexels.com/photo/people-working-and-manually-drying-rice-5648206/",
        date: "2/10/24",
        title: "Hello Boba | How we work with farmers to provide the best.",
        preview: "We at Hello Boba pride ourselves on our amazing food quality. We have direct ties to farmers worldwide to provide us with the best quality ingredients...",
    },
    {
        img: renoIMG,
        alt: "https://www.pexels.com/photo/photo-of-cafe-interior-1307698/",
        date: "1/15/24",
        title: "Hello Boba | Lincoln Park Renovations Complete - Stop by Today!",
        preview: "After 3 months, our Lincoln Park location has finally finished renovations! Check out our promotions page to see special Lincoln Park Promotions...",
    },

]
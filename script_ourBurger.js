//navbar buttons
const btnContainer = document.getElementById('navbar');
const btns = btnContainer.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active');
        this.className += ' active';
    })
}

//menù filter

const menu = [
    {
        id: 1,
        title: "\'Ari Gold\' Cheeseburger",
        category: "Burgers",
        price: 10.95,
        img: "./img/Ari_Gold_Cheeseburger.png",
        desc: "Beef Patty, Cheese, Lettuce, Tomato, Pickled Onions, Ketchup, Smokey P&B Mayo, Brioche",
    },
    {
        id: 2,
        title: "\'Smokey Robinson\'",
        category: "Burgers",
        price: 11.95,
        img: "./img/Smokey_Robinson.png",
        desc: "Beef Patty, Cheese, Tomato, Lettuce, Mounds Of Caramelised Onions, Bacon, Ketchup, Smokey P&B Mayo, Brioche",
    },
    {
        id: 3,
        title: "\''Jose Jose\' Chilli Burger",
        category: "Burgers",
        price: 11.95,
        img: "./img/Jose_Jose_Chilli_Burger.png",
        desc: "Beef Patty, Cheese, Tomato, Lettuce, Chilli Sobrassada Relish, Pickled Onions, Ketchup, Smokey P&B Mayo, Brioche",
    },
    {
        id: 4,
        title: "\'Hot Chic\' Chicken BURGER",
        category: "Burgers",
        price: 10.95,
        img: "./img/Hot_Chic_Chicken_BURGER.png",
        desc: "Marinated Buttermilk Fried Chicken, Coleslaw, Pickled Cucumbers, Lettuce, Smoked Garlic Aioli, Brioche",
    },
    {
        id: 5,
        title: "\'Lambshank Redemption\' Burger",
        category: "Burgers",
        price: 11.95,
        img: "./img/Lambshank_Redemption_Burger.png",
        desc: "Lamb Patty With Coriander & Chilli, Lettuce, Buttermilk Baby Courgettes, Pickled Aubergine, Cumin Aioli, Feta, Brioche",
    },
    {
        id: 6,
        title: "Portobello \'Dig It\' Mushroom Burger (Veg)",
        category: "Burgers",
        price: 10.95,
        img: "./img/Portobello_Dig_It_Mushroom_Burger_(Veg).png",
        desc: "Braised Field Mushroom Fritter - Garlic Parsley Butter, Cheese Sauce - Coleslaw, Lettuce, Tarragon Mayo, Brioche",
    },
    {
        id: 7,
        title: "\'Ari Gold\' Cheeseburger (Vegan)",
        category: "Vegetal",
        price: 10.95,
        img: "./img/Ari_Gold_Cheeseburger_(Vegan).png",
        desc: "Plant Based Patty, Cheddar, Lettuce, Tomato, Pickled Onions, Ketchup, Smokey P&B Mayo, Bun",
    },
    {
        id: 8,
        title: "\'Hot Chic\' Chicken Burger (Vegan)",
        category: "Vegetal",
        price: 10.95,
        img: "./img/Hot_Chic_Chicken_Burger_(Vegan).png",
        desc: "Beef Patty, Cheese, Lettuce, Tomato, Pickled Onions, Ketchup, Smokey P&B Mayo, Brioche",
    },
    {
        id: 9,
        title: "Hand Cut Chips",
        category: "Sides",
        price: 4.50,
        img: "./img/Hand_Cut_Chips.png",
        desc: "With Roast Chicken Mayo & Chicken Skin Salt",
    },
    {
        id: 10,
        title: "\'Winger Winger Chicken Dinner\'",
        category: "Sides",
        price: 6.95,
        img: "./img/Winger_Winger_Chicken_Dinner'.png",
        desc: "Smoked Confit Wings w/ BBQ Sauce & Spring Onions",
    },
    {
        id: 11,
        title: "\'PFC\'",
        category: "Sides",
        price: 6.95,
        img: "./img/PFC.png",
        desc: "Boneless Fried Chicken Thighs w/ Chilli Butter & Pickled Red Chillies",
    },
    {
        id: 12,
        title: "Hand Cut Chips (Vegan)",
        category: "Sides",
        price: 3.50,
        img: "./img/Hand_Cut_Chips_(Vegan).png",
        desc: "With Rosemary Salt",
    },
    {
        id: 13,
        title: "Brisket Loaded Chips (Vegan)",
        category: "Sides",
        price: 7.50,
        img: "./img/Brisket_Loaded_Chips_(Vegan).png",
        desc: "With Spicy Mayo",
    },
    {
        id: 14,
        title: "Impossible™️ “Chicken” Nuggets (Vegan)",
        category: "Sides",
        price: 6.5,
        img: "./img/Impossible_Chicken_Nuggets_(Vegan).png",
        desc: "6 for £6.50 or 9 for £9 with BBQ sauce or ketchup",
    },
];

const menuField = document.querySelector('.menu-field');
const menuContainer = document.querySelector('.menu-filter-container');

//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        return `<div class="menu-product">
                    <img src="${item.img}" alt="${item.title}" id="image">
                    <div class="menu-content">
                        <h1>${item.title}</h1>
                        <p id="item-text">${item.desc}</p>
                        <p id="price">€${item.price}</p>
                    </div>
                </div>`;
       });
       displayMenu = displayMenu.join('');
       menuField.innerHTML = displayMenu;
};

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const categoryBtns = categories.map(function(category){
        return `<h4 class="menu-filter" data-id=${category}>${category}</h4>`;
    }).join("");
    menuContainer.innerHTML = categoryBtns;
    const menuFilter = menuContainer.querySelectorAll('.menu-filter');
    //filter items
    menuFilter.forEach(function(btn) {
        btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
        });
    });
};

//video

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function() {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
    } else {
        btn.classList.remove('slide');
    }
})
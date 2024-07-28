// sidebar
const menuitems = document.querySelectorA11('.menu-item');

// messages
const messagesnotificaton = document.querySelector
('#messages-notifications');
const messages = document.querySelector('.message');

// ***********sidebar*************

// remove active class from all menu items
const changeActiveItem = () => {
    menuitems.forEach(item => {
        item.classList.remove('active');
        
    })
}

menuitems.forEach(item => {
    item.addeventlistener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').
            style.disply = 'none';
        }
        else{
            document.querySelector('notification-popup').
            style.disply = 'block';
            document.querySelector('#notification .notification-count')
            .style.disply = 'none';
        }
    })
})

// ***********messages*************
messagesnotificaton.addEventListener('click', () => {
    messages.style.boxshadow = '0 0 1rem var(--color-primary)';
})





document.addEventListener('DOMContentLoaded', function () {
    const cardWrapper = document.querySelector('.card-wrapper');
    const cardWrapperChildren = Array.from(cardWrapper.children);
    const widthToScroll = cardWrapperChildren[0].offsetWidth;
    const cardBounding = cardWrapper.getBoundingClientRect();
    const column = Math.floor(cardWrapper.offsetWidth / (widthToScroll + 24));
    let currScroll = 0;
    let initPos = 0;
    let clicked = false;

    cardWrapperChildren.slice(-column).reverse().forEach(item => {
        cardWrapper.insertAdjacentHTML('afterbegin', item.outerHTML);
    });

    cardWrapperChildren.slice(0, column).forEach(item => {
        cardWrapper.insertAdjacentHTML('beforeend', item.outerHTML);
    });

    const cardImageAndLink = cardWrapper.querySelectorAll('.card-item, .card');
    cardImageAndLink.forEach(item => {
        item.setAttribute('draggable', true);
    });

    cardWrapper.classList.add('no-smooth');
    cardWrapper.scrollLeft = cardWrapper.offsetWidth;
    cardWrapper.classList.remove('no-smooth');


    cardWrapper.onmousedown = function (e) {
        cardWrapper.classList.add('grab');
        initPos = e.clientX - cardBounding.left;
        currScroll = cardWrapper.scrollLeft;
        clicked = true;
    };

    cardWrapper.onmousemove = function (e) {
        if (clicked) {
            const xPos = e.clientX - cardBounding.left;
            cardWrapper.scrollLeft = currScroll + -(xPos - initPos);
        }
    };

    cardWrapper.onmouseup = mouseUpAndLeave;
    cardWrapper.onmouseleave = mouseUpAndLeave;

    function mouseUpAndLeave() {
        cardWrapper.classList.remove('grab');
        clicked = false;
    }

    let autoScroll;

    cardWrapper.onscroll = function () {
        if (cardWrapper.scrollLeft === 0) {
            cardWrapper.classList.add('no-smooth');
            cardWrapper.scrollLeft = cardWrapper.scrollWidth - (2 * cardWrapper.offsetWidth);
            cardWrapper.classList.remove('no-smooth');
        } else if (cardWrapper.scrollLeft === cardWrapper.scrollWidth - cardWrapper.offsetWidth) {
            cardWrapper.classList.add('no-smooth');
            cardWrapper.scrollLeft = cardWrapper.offsetWidth;
            cardWrapper.classList.remove('no-smooth');
        }

        if (autoScroll) {
            clearTimeout(autoScroll);
        }

        autoScroll = setTimeout(() => {
            cardWrapper.classList.remove('no-smooth');
            cardWrapper.scrollLeft += widthToScroll;
        }, 4000);
    };
    function addNewCard(cardData) {
        const newCard = document.createElement('div');
        newCard.className = 'card-item';
        newCard.innerHTML = `
      <div class="card">
        <div class="card-image">
          <img src="${cardData.imageUrl}" />
        </div>
        <div class="card-text">
          <span class="date">${cardData.date}</span>
          <h2>${cardData.title}</h2>
          <p>${cardData.description}</p>
          <button class="create-account">MORE INFO</button>
        </div>
      </div>
    `;
        cardWrapper.appendChild(newCard);
    }

    // Automatically add new cards from SQL database
    const dataSource = document.getElementById('<%= Repeater2.ClientID %>');

    if (dataSource) {
        const cardData = Array.from(dataSource.querySelectorAll('.card-item')).map(cardItem => {
            const imageUrl = cardItem.querySelector('.card-image img').getAttribute('src');
            const date = cardItem.querySelector('.date').textContent;
            const title = cardItem.querySelector('h2').textContent;
            const description = cardItem.querySelector('p').textContent;

            return { imageUrl, date, title, description };
        });

        cardData.forEach(card => {
            addNewCard(card);
        });
    }
});

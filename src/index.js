/* import some from './some.js';  */  /* импорт из своих файлов через путь */
import './css/style.css'
import './sass/main.sass'

window.onload = function () {

    /* мой слайдер */
    class Slider {
        constructor(config) {
            this.i = 0;
            this.images = document.querySelectorAll(config.images);;
            this.next = document.querySelector(config.next);
            this.prev = document.querySelector(config.prev);
            this.auto = config.auto;
            this.speed = config.speed;

            this.next.onclick = () => {
                this.show_next();
            }
            this.prev.onclick = () => {
                this.show_prev();
            }

            if (this.auto) {
                this.interval = setInterval(() => {
                    this.images[this.i].classList.remove('active');
                    this.i++;

                    if (this.i >= this.images.length) {
                        this.i = 0;
                    }

                    this.images[this.i].classList.add('active');
                }, this.speed);
            }
        }

        show_next() {
            this.images[this.i].classList.remove('active');
            this.i++;

            if (this.i >= this.images.length) {
                this.i = 0;
            }

            this.images[this.i].classList.add('active');
        }
        show_prev() {
            this.images[this.i].classList.remove('active');
            this.i--;

            if (this.i < 0) {
                this.i = this.images.length - 1;
            }
            this.images[this.i].classList.add('active');
        }
    }


    let books = [];
    let hidden_id_book = document.querySelector('#hidden_id');
    let name_book = document.querySelector('#name');
    let autor_book = document.querySelector('#autor');
    let date_book = document.querySelector('#date');
    let publishName_book = document.querySelector('#publishName');
    let publishPhone_book = document.querySelector('#publishPhone');
    let heading_book = document.querySelector('#heading');
    let homebutton = document.querySelector('.home');
    let new_page_img = document.querySelector('.page_book__img');
    let add_book = document.querySelector('.add_book');

    /* переход на главную страницу */
    if (homebutton){
        homebutton.onclick = function () {
            new Promise((resolve, reject) => {
                resolve(localStorage.removeItem('active_book'));
            }).then(() => {
                window.location = '/';
            });
        }

        save_book.onclick = function(event){
            event.preventDefault();
            if (hidden_id_book.value != 0){

                for(let key of books){
                    if (key.id == hidden_id_book.value ){
                        key.name = name_book.value;
                        key.autor = autor_book.value;
                        key.date = date_book.value;
                        key.heading = heading_book.value;
                        key.publishName = publishName_book.value;
                        key.publishPhone = publishPhone_book.value;
                    }
                }

                localStorage.removeItem('books');
                localStorage.removeItem('active_book');
                localStorage.setItem('books', JSON.stringify(books));
                window.location = '/';
            }else{
                /* добавление новой книги */
                let new_book_id = books[books.length - 1].id + 1;
                let new_book_obj = {};
                new_book_obj.id = new_book_id;
                new_book_obj.name = name_book.value;
                new_book_obj.autor = autor_book.value;
                new_book_obj.date = date_book.value;
                new_book_obj.heading = heading_book.value;
                new_book_obj.publishName = publishName_book.value;
                new_book_obj.publishPhone = publishPhone_book.value;
                new_book_obj.img_src = [
                                            '1.png',
                                            '1.png',
                                            '1.png'
                                        ];
                books.push(new_book_obj);
                localStorage.removeItem('books');
                localStorage.setItem('books', JSON.stringify(books));
                window.location = '/';

            }
            
        }
    }
   
    /* Заполнение полей формы при редактировании */
    if (localStorage.getItem('active_book')){
        let item = JSON.parse(localStorage.getItem('active_book'));
        new_page_img.innerHTML = '';
        name_book.value = item[0].name;
        autor_book.value = item[0].autor;
        date_book.value = item[0].date;
        publishName_book.value = item[0].publishName;
        publishPhone_book.value = item[0].publishPhone;
        heading_book.value = item[0].heading;
        hidden_id_book.value = item[0].id;
        let main_img = document.createElement('img');
        main_img.src = 'dist/img/' + item[0].img_src[0];
        main_img.alt = 'картинка';
        new_page_img.appendChild(main_img);   
    }
    
    /* первоначальная запись массива книг в т.н БД  - для примера */
    if(!localStorage.getItem('books')){
        books = [
            {
                id: 1,
                img_src: [
                            '1.png',
                            'mask2.jpg',
                            'mask3.jpg'
                         ],
                name: 'Илон Маск',
                autor: 'Ashley Wens',
                date: '2018',
                publishName: 'Space book',
                publishPhone: '+12678000403',
                heading: 'Наука'
            }, 
            {
                id: 2,
                img_src: [
                            '1.jpg',
                            'nike2.jpg'
                         ],
                name: 'Продавец обуви',
                autor: 'Phil Night',
                date: '2016',
                publishName: 'Nike book',
                publishPhone: '+12678800800',
                heading: 'Бизнес'
            }, 
            {
                id: 3,
                img_src: [
                            '2.jpg',
                            'potter2.jpg',
                            'potter3.jpg',
                            'potter4.jpg',
                            'potter5.jpg'
                         ],
                name: 'Harry Potter',
                autor: 'Joan Rowling',
                date: '2015',
                publishName: 'Roll book',
                publishPhone: '+12678000477',
                heading: 'Фентези'
            }, 
            {
                id: 4,
                img_src: [
                    '1a.jpg',
                    'mind2.jpg'
                ],
                name: 'Включите свой МОЗГ',
                autor: 'Caroline Lif',
                date: '2019',
                publishName: 'Carol book',
                publishPhone: '+12678800877',
                heading: 'Бизнес'
            },
            {
                id: 5,
                img_src: [
                    '1b.jpg',
                    'mater2.jpg'
                ],
                name: 'Материя',
                autor: 'I. Banks',
                date: '2016',
                publishName: 'Ban book',
                publishPhone: '+12678000433',
                heading: 'Фентези'
            },
            {
                id: 6,
                img_src: [
                    '1.png',
                    'mask2.jpg',
                    'mask3.jpg'
                ],
                name: 'Илон Маск',
                autor: 'Ashley Wens',
                date: '2018',
                publishName: 'Space book',
          
                publishPhone: '+12678000403',
          
                heading: 'Наука'
          
            }
          
        ];

        localStorage.setItem('books', JSON.stringify(books));
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }

    /* поле поиска */
    const search_input = document.querySelector('.find__inp');
    const book_list = document.querySelector('.books');
   
    let filtered_arr = books;

    /* отрисовка списка книг */
    function renderList(list){
        list.map( (item) => {
            /* элементы */
            let list_item = document.createElement('div');
            let img_item = document.createElement('div');
            let name_item = document.createElement('div');
            let autor_item = document.createElement('div');
            let date_item = document.createElement('div');
            let publishName_item = document.createElement('div');
            let publishPhone_item = document.createElement('div');
            let heading_item = document.createElement('div');
            let book_href = document.createElement('a');
            let book_edit_href = document.createElement('div');
            let book_remove_href = document.createElement('div');
            let edit_img = document.createElement('i');
            edit_img.setAttribute('aria-hidden', 'true');
            edit_img.classList.add('fa');
            edit_img.classList.add('fa-pencil');
            book_edit_href.appendChild(edit_img);
            let remove_img = document.createElement('i');
            remove_img.setAttribute('aria-hidden', 'true');
            remove_img.classList.add('fa');
            remove_img.classList.add('fa-times');

            /* edit and delete */
            book_edit_href.setAttribute('id', item.id);
            book_edit_href.classList.add('edit');
            book_edit_href.appendChild(edit_img);

            book_remove_href.setAttribute('id', item.id);
            book_remove_href.classList.add('remove');
            book_remove_href.appendChild(remove_img);

            list_item.classList.add('bookItem');
            img_item.classList.add('bookItem__img');
            name_item.classList.add('bookItem__name');
            autor_item.classList.add('bookItem__autor');
            date_item.classList.add('bookItem__date');
            publishName_item.classList.add('bookItem__publishName');
            publishPhone_item.classList.add('bookItem__publishPhone');
            heading_item.classList.add('bookItem__heading');
            book_href.href = '#'+ item.id;

            /* картинки */
            let img;
            for (let i = 0; i < item.img_src.length; i++){
                    img = document.createElement('img');
                    img.src = 'dist/img/' + item.img_src[i];
                    img.alt = 'картинка книги';
                    if (i == 0) {
                        img.classList.add('active');
                    }
                    img_item.appendChild(img);

            }

            let slider_class = 'slide'+item.id;
            img_item.classList.add(slider_class);

            let button_group = document.createElement('div');
            button_group.classList.add('buttons');
            let button_left = document.createElement('input');
            
            let button_right = document.createElement('input');
            button_left.type = 'button';
            button_left.value = '<<';
            let slider_class_left = 'prev' + item.id;
            button_left.classList.add(slider_class_left);
            button_right.type = 'button';
            button_right.value = '>>';
            let slider_class_right = 'next' + item.id;
            button_right.classList.add(slider_class_right);
            button_group.appendChild(button_left);
            button_group.appendChild(button_right);

            img_item.appendChild(button_group);


            /* название книги */
            name_item.innerHTML = '" ' + item.name + ' "';
            book_href.appendChild(name_item);
            /* автор книги */
            autor_item.innerHTML = item.autor;
            /* дата книги */
            date_item.innerHTML = item.date;
            /* дата книги */
            publishName_item.innerHTML = item.publishName;
            /* телефон издат */
            publishPhone_item.innerHTML = item.publishPhone;
            /* категория */
            heading_item.innerHTML = item.heading;

            img_item.appendChild(book_edit_href);
            img_item.appendChild(book_remove_href);
            list_item.appendChild(img_item);
            list_item.appendChild(book_href);
            list_item.appendChild(autor_item);
            list_item.appendChild(date_item);
            list_item.appendChild(publishName_item);
            list_item.appendChild(publishPhone_item);
            list_item.appendChild(heading_item);
            if (book_list){
                book_list.appendChild(list_item);
            }
            
            /* редактирование книги */
            if (book_edit_href){
                book_edit_href.onclick = function () {
                    makeActive(book_remove_href.id).then((result) => {
                        localStorage.setItem('active_book', JSON.stringify(result));
                    }).then(() => {
                        /* var xhr = new XMLHttpRequest();
                        xhr.open("get", "/add.html?id=777", true);
                        xhr.send(); */
                        window.location = '/add.html';
                    });
                }
                /* удаление книги */
                book_remove_href.onclick = function () {
                    removeBook(book_remove_href.id);
                }
            }
        });
    }

    /* книга которую редактируем становится активной */
    function makeActive(id){
        return new Promise( (resolve, reject) => {
            let result =  searchFilterID(id);
            resolve(result);
        })
    }

    /* Поиск по книгам */
    function searchFilter(query){
        return books.filter( (book) => {
            return book.name.toLowerCase().search(query.toLowerCase()) != -1 ;
        });
    }

    /* Поиск книги по id */   
    function searchFilterID(id){
        return books.filter( (book) => {
            return book.id == id ;
        });
    }

    /* фильтр по названию книги */
    if (search_input){
        search_input.oninput = function () {
            book_list.innerHTML = '';
            let query = search_input.value;
            filtered_arr = searchFilter(query);
            renderList(filtered_arr);
            initSliders();
        }
    }

    /* Удаление книги */
    function removeBook(id){
        let new_books =  books.filter( (elem) => {
            return elem.id != id;
        });
        books = new_books;
        book_list.innerHTML = '';
        localStorage.clear();
        localStorage.setItem('books', JSON.stringify(new_books));
        renderList(new_books);
    }

    renderList(filtered_arr);


/* инициализация слайдеров для каждой книги */
function initSliders(){
    for (let i = 0; i < books.length; i++) {

        new Slider({
            images: `.bookItem .bookItem__img.slide${books[i].id} img`,
            next: `.next${books[i].id}`,
            prev: `.prev${books[i].id}`,
            auto: false,
            speed: 2000
        });
    }
}

initSliders();
  

};




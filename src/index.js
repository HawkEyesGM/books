/* import some from './some.js';  */  /* импорт из своих файлов через путь */
import './css/style.css'

window.onload = function () {

    let books = [];

    if(!localStorage.getItem('books')){
        books = [
            {
                id: 1,
                img_src: [
                            '1.png',
                            '1.png',
                            '1.png'
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
                            '1.jpg',
                            '1.jpg'
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
                            '2.jpg',
                            '2.jpg'
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
                    '1a.jpg',
                    '1a.jpg'
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
                    '1b.jpg',
                    '1b.jpg'
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
                    '1.png',
                    '1.png'
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


    const search_input = document.querySelector('.find__inp');
    const book_list = document.querySelector('.books');
   
    let filtered_arr = books;

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
            let book_edit_href_a = document.createElement('a');
            let book_edit_href = document.createElement('div');
            let book_remove_href = document.createElement('div');
            let edit_img = document.createElement('i');
            book_edit_href_a.href= '/add.html?id='+item.id;
            edit_img.setAttribute('aria-hidden', 'true');
            edit_img.classList.add('fa');
            edit_img.classList.add('fa-pencil');
            book_edit_href_a.appendChild(edit_img);
            let remove_img = document.createElement('i');
            remove_img.setAttribute('aria-hidden', 'true');
            remove_img.classList.add('fa');
            remove_img.classList.add('fa-times');


            /* edit and delete */
            book_edit_href_a.setAttribute('id', item.id);
            book_edit_href_a.classList.add('edit');
            book_edit_href_a.appendChild(edit_img);

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
            let img = document.createElement('img');
            img.src = 'dist/img/' + item.img_src[0];
            img.alt = 'картинка книги';
            img_item.appendChild(img);
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

            img_item.appendChild(book_edit_href_a);
            img_item.appendChild(book_remove_href);
            list_item.appendChild(img_item);
            list_item.appendChild(book_href);
            list_item.appendChild(autor_item);
            list_item.appendChild(date_item);
            list_item.appendChild(publishName_item);
            list_item.appendChild(publishPhone_item);
            list_item.appendChild(heading_item);
            book_list.appendChild(list_item);

            book_remove_href.onclick = function(){
               /*  console.log(book_remove_href.id) */
                removeBook(book_remove_href.id);
            }

        });
    }

    /* Поиск по книгам */
    function serachFilter(query){
        return books.filter( (book) => {
            return book.name.toLowerCase().search(query.toLowerCase()) != -1 ;
        });
    }

    search_input.oninput = function(){
        book_list.innerHTML = '';
        let query = search_input.value;
        filtered_arr = serachFilter(query);
        renderList(filtered_arr);

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

















};




const readingOrderDiv = document.querySelector("#readingOrderDiv");
readingOrderDiv.style.gridRow = "2";
readingOrderDiv.style.display = "";
const paragr = readingOrderDiv.querySelector("#readingOrder");
paragr.style.padding = "20px";
paragr.style.color = "white";
const body = document.getElementsByTagName("body");
body[0].style.backgroundColor = "rgba(6, 1, 75, 0.689)";
body[0].querySelector(".books-grid").style.backgroundColor = "rgba(255, 255, 255, 0)";
let buttonsDiv = document.querySelector("#buttonsDiv");
buttonsDiv.classList.add("books-grid"); 
let addBookDiv;
readingOrderDiv.style.gridRow = "1";
        addBookDiv = document.createElement("div");
        addBookDiv.id = "createBookDiv";
        addBookDiv.style.color = "white";
        addBookDiv.style.gridColumn = "2";

        const newParagr = document.createElement("p");
        newParagr.innerHTML = "Not all books are here! <br><br> Add your own";
        newParagr.style.padding = "20px";

        const addBookBtn = document.createElement("a");
        addBookBtn.textContent = "Add book";
        addBookBtn.id = "selectCoverBtn";
        addBookBtn.classList.add("button");
        addBookBtn.style.marginLeft = "20px";
        addBookBtn.addEventListener('click', addBook);

        addBookDiv.appendChild(newParagr);
        addBookDiv.appendChild(addBookBtn);        
        buttonsDiv.appendChild(addBookDiv);



const shuffleBooks = () =>{
    const booksContainer = document.querySelector('#booksGrid');
    const books = document.querySelectorAll('.book');
    
    const booksArray = Array.from(books);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledBooks = shuffleArray(booksArray);
    booksContainer.innerHTML = '';

    shuffledBooks.forEach((book) => {
        booksContainer.appendChild(book);
    });   
}

function addBook() {    
    const modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
    const modalContent = modal.firstElementChild;
    if(!document.getElementById("imageInput")){

    var imageInput = document.createElement("input");
    imageInput.type = "text";
    imageInput.id = "imageInput";
    imageInput.placeholder = "Enter Image URL";
    
    var titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "titleInput";
    titleInput.placeholder = "Enter Title";
    
    var bookUrlInput = document.createElement("input");
    bookUrlInput.type = "text";
    bookUrlInput.id = "bookUrlInput";
    bookUrlInput.placeholder = "Enter Book URL";
    
    var addImageButton = document.createElement("a");
    addImageButton.classList.add("button");
    addImageButton.textContent = "Add Image";
    addImageButton.id = "addImageBtn";
    
    var addBookToList = document.createElement("a");
    addBookToList.classList.add("button");
    addBookToList.textContent = "Add book";
    addBookToList.id = "addBookToListBtn";
    
    var imageContainer = document.createElement("div");
    imageContainer.id = "imageContainer";
    
    modalContent.appendChild(imageInput);
    modalContent.appendChild(addImageButton);
    modalContent.appendChild(titleInput);
    modalContent.appendChild(bookUrlInput);
    modalContent.appendChild(addBookToList);
    
    
    modalContent.appendChild(imageContainer);
      
    document.getElementsByClassName("close")[0].onclick = function() {
      modal.style.display = "none";
    }
    addImageButton.onclick = function() {
      var imageUrl = imageInput.value;
      let imageElement = document.createElement("img");
      imageElement.id = "newBookImage";
      imageElement.src = imageUrl;
      imageContainer.appendChild(imageElement);      
    }
    
    addBookToList.onclick = function() {
      var bookUrl = bookUrlInput.value;
      var booksGrid = document.getElementById("booksGrid");
      
      var newBookDiv = document.createElement("div");
      newBookDiv.classList.add("book");
      var imageElement = document.getElementById("newBookImage");
      imageElement.style.maxWidth = "198px";
      imageElement.style.height = "auto";
      imageElement.classList.add("book-cover");
      var newBookTitle = document.createElement("h3");
      newBookTitle.textContent = titleInput.value;
      newBookTitle.classList.add("title");
      var newBookUrl = document.createElement("a");
      newBookUrl.classList.add("button");
      newBookUrl.style.alignSelf = "bottom";
      newBookUrl.textContent = "Read more";
      newBookUrl.setAttribute("href", bookUrl);
      newBookDiv.appendChild(imageElement);
      newBookDiv.appendChild(newBookTitle);
      newBookDiv.appendChild(newBookUrl);  

      //booksGrid.appendChild(newBookDiv);
      booksGrid.insertBefore(newBookDiv, booksGrid.firstChild);
      modal.style.display = "none";
    }
    }};    

function findImage(){
    window.open('https://www.google.com/search?q=discworld+cover+from+discworld.com&sca_esv=8d81eb85e01b5592&sca_upv=1&udm=2&biw=1366&bih=633&sxsrf=ACQVn09u5__k5sjSZIUDmJSBcmbZ4YuHeA%3A1713875196656&ei=_KgnZvnRJ96L9u8P2_2dgAw&ved=0ahUKEwj5v6TSqtiFAxXehf0HHdt-B8AQ4dUDCBA&uact=5&oq=discworld+cover+from+discworld.com&gs_lp=Egxnd3Mtd2l6LXNlcnAiImRpc2N3b3JsZCBjb3ZlciBmcm9tIGRpc2N3b3JsZC5jb21I_SNQ-gJY7iJwAngAkAEAmAFXoAGUCqoBAjIwuAEDyAEA-AEBmAICoAI8wgIKEAAYgAQYQxiKBcICBRAAGIAEwgIGEAAYBxgewgIGEAAYBRgewgIGEAAYCBgewgIEEAAYHsICBxAAGIAEGBiYAwCIBgGSBwEyoAehCg&sclient=gws-wiz-serp', '_blank');
}


const shuffleBtn = document.querySelector("#shuffleBtn");
shuffleBtn.style.marginLeft = "20px";
shuffleBtn.addEventListener("click", shuffleBooks);
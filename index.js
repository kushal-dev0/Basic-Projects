const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkName = document.getElementById("bookmark-name");
const bookmarksUrl = document.getElementById("bookmark-url");
const bookmarkList = document.getElementById("bookmark-list");

document.addEventListener("DOMContentLoaded", loadBookMarks);

addBookmarkBtn.addEventListener("click", function () {
  const name = bookmarkName.value.trim();
  const url = bookmarksUrl.value.trim();

  if (!name || !url) {
    alert("Please enter both values");
    return;
  }
  else{

    if(!url.startsWith("http://") &&  !url.startsWith("https://")){
        alert("Please enter valid url which starts with http or https")
        return
    }
    addBookmark(name,url)
    saveBookmark(name,url)
    bookmarkName.value=""
    bookmarksUrl.value=""
  }
});
    function addBookmark(name,url){
        const li=document.createElement("li")
        const link=document.createElement("a")
        link.href=url
        link.textContent =name
        link.target="_blank"

        const removeButton = document.createElement("button")
        removeButton.textContent="Remove"
        removeButton.addEventListener("click",function(){
            bookmarkList.removeChild(li)
            removeBookmarkfromStorage(name,url);
        })

        li.appendChild(link)
        li.appendChild(removeButton)
        bookmarkList.appendChild(li)
    }

    function getBookmarksFromStorage(){
        const bookmarks=localStorage.getItem("bookmarks")
        return bookmarks ? JSON.parse(bookmarks) : []
    }

    function saveBookmark(name,url){
        const bookmarks=getBookmarksFromStorage()
        bookmarks.push({name,url})
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } 


    function loadBookMarks(){
        const bookmarks=getBookmarksFromStorage()
        bookmarks.forEach(bookmark => {
            addBookmark(bookmark.name,bookmark.url )
        });
    }

    function removeBookmarkfromStorage(name,url){
        let bookmarks=getBookmarksFromStorage()
        bookmarks=bookmarks.filter((bookmark)=>bookmark.name !==name || bookmark.url !==url)
        localStorage.setItem("boomarks",JSON.stringify(bookmarks))
    }
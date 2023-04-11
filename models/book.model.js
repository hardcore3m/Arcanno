const references = require('../functions/readReferences')
const groupItems = require('../functions/groupItemsByReference');
const capitalize = require('../functions/capitalizeText');


class Book {
  constructor(jsonObject,index) {
    this.id=index;
    this.chapters=[];
    for (let i = 0; i < jsonObject.length; i++) {
      if (jsonObject[i].item == 'title') {
        this.title = jsonObject[i].reference
      } else if (jsonObject[i].item === 'author') {
        this.author = jsonObject[i].reference
      } else if (jsonObject[i].item === 'publisher') {
        this.publisher = jsonObject[i].reference
      } else if (jsonObject[i].item === 'edition') {
        this.edition = jsonObject[i].reference
      }else if (jsonObject[i].item === 'ISBN') {
        this.ISBN = jsonObject[i].reference
      }else if (jsonObject[i].item === 'year') {
        this.year = jsonObject[i].reference
      }else if (jsonObject[i].item === 'link') {
        this.link = jsonObject[i].reference
      }else {
        this.chapters.push(jsonObject[i]);
      }
    }
   
  }

  addChapter(chapter) {
    this.chapters.push(chapter);
  }

  removeChapter(chapterIndex) {
    if (chapterIndex >= 0 && chapterIndex < this.chapters.length) {
      this.chapters.splice(chapterIndex, 1);
    }
  }

  getChapter(chapterIndex) {
    if (chapterIndex >= 0 && chapterIndex < this.chapters.length) {
      return this.chapters[chapterIndex];
    }

    return null;
  }

  getChapters() {
    return this.chapters;
  }

  getChapterCount() {
    return this.chapters.length;
  }

  getGroupedItems(){
    let items = groupItems(this.getChapters())
    return items;
  }
}

exports.books = references.map((el,index)=>{
  return new Book(el.data,index);
})

exports.grouped = references.map((el,index)=>{
   let book =new Book(el.data,index);
   return book.getChapters();
})
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private books: any = [
    {
      author: "Chinua Achebe",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: "209",
      title: "Things Fall Apart",
      year: "1958"
    },
    {
      author: "Hans Christian Andersen",
      link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      pages: "784",
      title: "Fairy tales",
      year: "1836"
    },
    {
      author: "Dante Alighieri",
      link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      pages: "928",
      title: "The Divine Comedy",
      year: "1315"
    },
  ]

  getBooks() {
    return this.books;
  }

  addBook(book: any) {
    this.books.unshift(book);
  }

  removeBook(index: number) {
    this.books.splice(index, 1);
  }

  updateBook(data: any) {
    this.books.splice(data.index, 1, data.book);
  }
}

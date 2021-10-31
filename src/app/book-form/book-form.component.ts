import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})

export class BookFormComponent {
  @Input() isAdd = false;
  @Input() isUpdate = false;
  @Input() index = 0;
  @Input() book: any = {};

  @Output() onAddBook = new EventEmitter<any>()
  @Output() onUpdateBook = new EventEmitter<any>()

  addBook() {
    this.onAddBook.emit({ book: this.book, isAdd: false, isBookForm: false });
  }

  updateBook() {
    this.onUpdateBook.emit({ book: this.book, index: this.index, isUpdate: false, isBookForm: false });
  }
}

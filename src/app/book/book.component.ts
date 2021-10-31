import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() index: number = 0;
  @Input() book: any = {};
  @Output() onRemoveBook = new EventEmitter<number>()
  @Output() onShowBookForm = new EventEmitter<any>()

  showBookForm(book: any, index: any) {
    this.onShowBookForm.emit({ book: book, index: index, isUpdate: true, isBookForm: true });
  }

  removeBook(index: number) {
    this.onRemoveBook.emit(index)
  }
}

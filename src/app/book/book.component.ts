import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
import { Book } from "../book";
import { Router } from '@angular/router';

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
})
export class BookComponent implements OnInit {
  myAllBooks: Book[] = [];
  constructor(private _BookService: BookService, private _router:Router) {}

  ngOnInit(): void {
    this.getAllMyBooks();
  }

  getAllMyBooks() {
    this._BookService.getBooks().subscribe(res =>this.myAllBooks=res);
  };


}

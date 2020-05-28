import { Injectable } from "@angular/core";
import { Book } from "./book";
import { Observable, observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class BookService {
  
  private BOOKS: Book[] = [
    { id: 101, name: "angular", price: 1000, description: "angular9 book" },
    { id: 102, name: "reactjs", price: 2000, description: "reactjs book" },
    {
      id: 103,
      name: "javascript",
      price: 3000,
      description: "javascript book",
    },
    {
      id: 104,
      name: "advance javascript",
      price: 4000,
      description: "advance javascript book",
    },
    { id: 105, name: "es6", price: 5000, description: "es6 book" }
  ];

  constructor() {}

  getBooks(): Observable<Book[]> {
    debugger;
    return Observable.of(this.BOOKS);
  }

  getBook(id:number): Observable<Book> {
    debugger;
    return this.getBooks().map(books=>books.find(books=>books.id==id));
  }
}

import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/book";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "src/app/book.service";

@Component({
  selector: "app-bookdetails",
  templateUrl: "./bookdetails.component.html",
  styleUrls: ["./bookdetails.component.css"],
})
export class BookdetailsComponent implements OnInit {
  bookdetails: Book;
  myAllBooks: Book[] = [];
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _bookservice: BookService
  ) {}

  ngOnInit(): void {
    this. getAllMyBooks();
    // 1 route.snapshot.param
    // this._ActivatedRoute.snapshot.params.id;
    // this._ActivatedRoute.snapshot.params.price;
    // alert(this._ActivatedRoute.snapshot.params.id );
    // alert(this._ActivatedRoute.snapshot.params.price);
    // this._bookservice.getBook(this._ActivatedRoute.snapshot.params.id).subscribe(res=>this.bookdetails=res);
    // this._bookservice.getBook(this._ActivatedRoute.snapshot.params['id']).subscribe(res=>this.bookdetails=res);

    // 2 route.snapshot.paramMap
    // alert(this._ActivatedRoute.snapshot.paramMap.get('id'));
    // alert(this._ActivatedRoute.snapshot.paramMap.get('price'));
    // this._bookservice.getBook(parseInt(this._ActivatedRoute.snapshot.paramMap.get('id'))).subscribe(res=>this.bookdetails=res);

    // 3 route.param.subscribe
    // alert(this._ActivatedRoute.snapshot.params.id );
    // alert(this._ActivatedRoute.snapshot.params.price);
    this._ActivatedRoute.params.subscribe((res) => {
      alert(res.id);
      alert(res.price);
      this._bookservice.getBook(res.id).subscribe(res=> this.bookdetails=res);
    });

    // 4 route.paramMap.subscribe

    // this._ActivatedRoute.paramMap.subscribe((res) => {
    //   // debugger;
    //   // alert(res.get('id'));
    //   // alert(res.get('price'));
    //   this._bookservice.getBook(parseInt(res.get('id'))).subscribe(res=> this.bookdetails=res);
    // });
  }

  gotoBack() {
    window.history.back();
  }

  getAllMyBooks() {
    this._bookservice.getBooks().subscribe(res =>this.myAllBooks=res);
  };
}

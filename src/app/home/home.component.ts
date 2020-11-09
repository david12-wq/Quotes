import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Maya Angelou', 'You will face many defeats in life, but never let yourself be defeated.', 'David Kamau', new Date(2020, 9, 6)),
    new Quote(2, 'Nelson Mandela', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Aron', new Date(2015, 8, 3)),
    new Quote(1, 'Nelson Mandela', 'In the end, it is not the years in your life that count.', 'Jane', new Date(2020, 7, 11)),
    new Quote(1, 'Abraham Lincon', 'Never let the fear of striking out keep you from playing the game.', 'B.Odelo', new Date(2020, 8, 1)),
    new Quote(1, 'Babe Ruth', 'Life is either a daring adventure or nothing at all.', 'Olive', new Date(2020, 4, 6)),
    new Quote(1, 'Obama', 'Yes we can.', 'Carol', new Date(2019, 7, 2)),
  ];

  upVote(index) {
    this.quotes[index].upVote++;
  }
  downVote(index) {
    this.quotes[index].downVote++;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].id}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.day = new Date(quote.day)
    this.quotes.push(quote)
  }
  liked: number;
  unliked: number;
  message: string;
  user: string;
  post: Date;
  author:string;


  fabQuote() {
    this.liked = 0;
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.liked = this.quotes[i].upVote){
        this.unliked = this.quotes[i].downVote;
        this.message = this.quotes[i].message;
        this.user = this.quotes[i].user;
        this.author = this.quotes[i].author;
        this.post = this.quotes[i].day;
      }
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}

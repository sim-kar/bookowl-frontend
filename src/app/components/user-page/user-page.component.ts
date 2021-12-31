import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { StatusService } from '../../services/status.service';
import { Book } from '../../interfaces/book';
import { Status } from '../../interfaces/status';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css', '../../../assets/styles/page-width.css'],
})
export class UserPageComponent implements OnInit {
  wantToRead: Book[] = [];
  reading: Book[] = [];
  read: Book[] = [];
  age: number = 0;
  joined: string = '';
  user: User = {
    email: '',
    joined: '',
    username: '',
    birthdate: '',
    gender: '',
  };

  constructor(
    private userService: UserService,
    private statusService: StatusService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userService.getUser(params['username']).subscribe((user) => {
        this.user = user;
        this.age = this.getAge(user.birthdate);
        this.joined = user.joined.slice(0, 9); // only get yyyy-mm-dd
        this.getBooksWithStatus(0).subscribe((books) => { this.wantToRead = books; });
        this.getBooksWithStatus(1).subscribe((books) => { this.reading = books; });
        this.getBooksWithStatus(2).subscribe((books) => { this.read = books; });
      });
    });
  }

  getBooksWithStatus(statusCode: number): Observable<Book[]> {
    const output: Subject<Book[]> = new Subject<Book[]>();
    this.statusService.getUserStatuses(this.user.username, statusCode)
      .subscribe((statuses: Status[] | null) => {
        const books: Book[] = [];
        if (statuses) {
          statuses.forEach((status) => books.push(status.book));
        }
        output.next(books);
      });

    return output.asObservable();
  }

  getAge(date: string) {
    const birthday = new Date(date);
    const today = new Date();
    let thisYear = 0;

    if (today.getMonth() > birthday.getMonth()) {
      thisYear = 1;
    } else if ((today.getMonth() === birthday.getMonth()) && today.getDate() > birthday.getDate()) {
      thisYear = 1;
    }

    return today.getFullYear() - birthday.getFullYear() + thisYear;
  }
}

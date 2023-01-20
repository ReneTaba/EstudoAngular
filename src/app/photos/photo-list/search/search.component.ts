import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>()
  @Input() value: string = ''
  debounce: Subject<string> = new Subject<string>()


  ngOnInit(): void {
              this.debounce
              .pipe(debounceTime(600))
              .subscribe(oquepesquisei => this.onTyping.emit(oquepesquisei))
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }


}

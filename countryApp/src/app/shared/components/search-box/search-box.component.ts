import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  public subs: SubSink = new SubSink();
  public debouncer: Subject<string> = new Subject<string>();
  @Input() public placeholder: string = '';
  @Output() public onValue = new EventEmitter<string>();
  @Output() public onDebounce = new EventEmitter<string>();

  @Input() public initialValue: string = '';

  ngOnInit(): void {
    this.subs.add(
      this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
        this.onDebounce.emit(value);
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  public emitValue(value: string) {
    this.onValue.emit(value);
  }
  public onKeyPress(keyPress: string) {
    this.debouncer.next(keyPress);
  }
}

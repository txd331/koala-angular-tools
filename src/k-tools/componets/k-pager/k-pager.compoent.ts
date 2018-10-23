/**
 * Created by xdtian on 2017/4/27.
 */
import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'k-pager',
  templateUrl: './k-pager.html',
})
export class KPagerCompoent {


  @Input() total: number = 0;
  @Input() limit: number = 10;
  @Input() offset: number = 0;
  @Input() showNumber: number = 5;
  @Output() toPage = new EventEmitter();

  paginate(page: number): boolean {
    this.offset = (page - 1) * this.limit;
    this.toPage.emit(this.offset);
    return true;
  }

  getPages(): Array<any> {
    const retArray: Array<any> = [];
    let index = 1;
    if (this.getPage() > index) {
      index = (this.getPage() - 1);
    }
    const maxPage = index + this.showNumber;
    while (index < maxPage) {
      if (index <= this.getLast()) {
        retArray.push(index);
      }
      index++;
    }
    return retArray;
  }

  getPage(): number {
    return Math.ceil((1 + this.offset) / this.limit);
  }

  shouldShow(): boolean {
    if (this.total > 0) {
      return true;
    } else {
      return false;
    }
  }

  getLast(): number {
    return Math.ceil(this.total / this.limit);
  }

}




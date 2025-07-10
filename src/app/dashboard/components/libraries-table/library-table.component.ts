import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {DashboardService} from "../../services/dashboard.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GetPropertyPipe} from "../../pipes/object.pipe";
import {DialogService} from "primeng/dynamicdialog";
import {ItemDetailComponent} from "../item-detail/item-detail.component";

@Component({
  selector: 'app-library-table',
  templateUrl: './library-table.component.html',
  styleUrls: ['./library-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryTableComponent {
  searchText: string = '';
  form = new FormGroup({
    library: new FormControl(null, [Validators.required]),
  });
  onDestroy$: Subject<boolean> = new Subject();
  data: any[] = []; // test commit

  constructor(
    public getPropertyPipe: GetPropertyPipe,
    private persistanceService: DashboardService,
    private dialogService: DialogService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {this.onDestroy$.next(true);}

  public fetchLibraries(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {return;}
    this.searchText = this.form.get('library')?.getRawValue();

    this.persistanceService.fetchLibrariesFromBackend(this.form.get('library')?.value).pipe(
      takeUntil(this.onDestroy$),
    ).subscribe((response: any) => {
      if (response) {
        this.form.reset();
        this.data = response.map((item: any) => Object.assign({}, item.Cells));
      }
      this.cdr.detectChanges();
    });
  }

  public openRow(item: any): void { //TODO типизировать item
    this.dialogService.open(ItemDetailComponent, {
      header: 'Карточка объекта',
      width: 'auto',
      data: item,
    });
  }


}

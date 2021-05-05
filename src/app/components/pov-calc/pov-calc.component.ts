import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pov-calc',
  templateUrl: './pov-calc.component.html',
  styleUrls: ['./pov-calc.component.scss'],
})
export class PovCalcComponent implements OnInit {
  keys: Array<number> = [];
  cols: Array<number> = [];

  form = this.fb.group({
    rows: ['', [Validators.required, Validators.min(1)]],
    cols: ['', [Validators.required, Validators.min(1)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((form) => {
      if (form.cols < 1 || form.rows < 1) {
        return;
      }
      this.keys = this.generateKeys(form.rows);
      this.cols = Array(form.cols).fill(0);
    });

    this.form.patchValue({ rows: 5, cols: 5 });
  }

  logicalAnd(a, b): boolean {
    // tslint:disable-next-line: no-bitwise
    return (a & b) === b;
  }

  onClick(i: number, k: number): void {
    this.cols[i] += this.logicalAnd(this.cols[i], k) ? -k : k;
  }

  private generateKeys(length: number): Array<number> {
    return Array(length)
      .fill(1)
      .map((x, i) => Math.pow(2, i));
  }
}

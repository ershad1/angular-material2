import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {StepperDialogComponent} from '../stepper-dialog/stepper-dialog.component';



@Component({
  selector: 'app-my-stepper',
  templateUrl: './my-stepper.component.html',
  styleUrls: ['./my-stepper.component.css']
})
export class MyStepperComponent implements OnInit {
  dialogResult = '';

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(StepperDialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

  ngOnInit() {
  }

}

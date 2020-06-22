import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var Editor: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularMatrix';

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  showSecond = true;

  private ctx: CanvasRenderingContext2D;
  private matrixText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
  private matrix;
  private fontSize = 10;
  private columns;
  private drops;
  private height;
  private width;
  private textColor = '#0F0';


  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.init();
    setInterval(() => {
      this.draw(this.ctx);
    }, 35);
  }

  init() {
    this.matrix = this.matrixText.split('');
    // Setting up the columns
    this.fontSize = 10;
    const c = this.canvas.nativeElement;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    c.height = this.height;
    c.width = this.width;
    this.columns = this.width / this.fontSize;
    this.drops = [];
    for (let x = 0; x < this.columns; x++) {
      this.drops[x] = 1;
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = this.textColor;
    ctx.font = this.fontSize + 'px arial';
    for (let i = 0; i < this.drops.length; i++) {
      var text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
      ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
      if (this.drops[i] * this.fontSize > this.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }
}

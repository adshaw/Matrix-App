import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

declare const Messenger: any;

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.scss']
})
export class TextAnimationComponent implements OnInit {
  messenger;
  @Input() message: string;

  @ViewChild('messenger', {static: true})
  textMessenger: ElementRef<HTMLElement>;

  constructor() {
  }

  ngOnInit(): void {
    this.messenger = new Messenger(this.textMessenger.nativeElement, this.message);
  }

}

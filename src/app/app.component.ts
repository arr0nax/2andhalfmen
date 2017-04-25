import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sanitzer: DomSanitizer) {};

  public safeEmojis: SafeHtml[] = [];
  public emojiCount: number = 0;
  emojis = ['🍆', 'suffering', 'help me', 'kill me', 'god watching', 'im go to hell', 'ashton no no touch', 'where charlie?', '*laughter intensifies*', 'FUCK'];
  public score: number = 0;

   ngOnInit() {
     var self = this;
     setInterval(function() {
       self.addEmojis();
     }, 500);
   }

  addEmojis() {


    var randomRepeat = Math.floor(Math.random()*50)+1;
    for (var i=0; i<randomRepeat; i++) {
      var randomWidth = Math.random()*110-5;
      var randomEmoji = Math.floor(Math.random()*10);
      var randomSpeed = Math.floor(Math.random()*10)+20;
      var randomR = Math.floor(Math.random()*255);
      var randomG = Math.floor(Math.random()*255);
      var randomB = Math.floor(Math.random()*255);
      var addEmojis = '<div class="emoji emojioverlay" id="emoji'+this.emojiCount+'" style="position:absolute;top:-100px;left:'+randomWidth+'vw;  animation: movedown '+randomSpeed+'s;"><h1 style="color:rgba('+randomR+','+randomG+','+randomB+',0.5);">'+this.emojis[randomEmoji]+'</h1></div>';
      this.safeEmojis.push(this.sanitzer.bypassSecurityTrustHtml(addEmojis));
      this.emojiCount += 1;
    }
    if (this.safeEmojis.length > 500) {
      this.safeEmojis.splice(0,50);
    }
  }
}

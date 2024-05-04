import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  @ViewChild('listMenu') listMenu!: ElementRef;

  selectItemMenu(event: MouseEvent) {
    const items = this.listMenu.nativeElement.children;
    //console.log(items);
    const target = event.target as HTMLElement;
    target.classList.add('menu-selected');
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('menu-selected') && items[i] !== target ){
          this.listMenu.nativeElement.children[i].classList.remove('menu-selected');
        }
      }

  }


}

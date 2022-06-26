import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, TopComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, TopComponent],
})
export class NavModule {}

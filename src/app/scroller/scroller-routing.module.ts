import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGridComponent } from './components/image-grid/image-grid.component';

const routes: Routes = [
    {
        path: '', component: ImageGridComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScrollerRoutingModule { }

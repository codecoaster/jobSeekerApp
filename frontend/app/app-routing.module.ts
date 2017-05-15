import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';

const routes: Routes = [ //routes is a type of variable
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'proposals', component: ProposalListComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'proposals/new', component: ProposalNewComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
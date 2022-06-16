import { Routes, RouterModule } from '@angular/router';

// Identification
import { IdentificationComponent } from './identification/identification.component';

// Transaction
import { TransactionsComponent } from './transactions/transactions.component';
import { FriendComponent } from './friend/friend.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'identification',
        pathMatch: 'prefix'
    },
    {
        path: 'identification',
        component: IdentificationComponent
    },
    {
        path: 'transaction',
        component: TransactionsComponent
    },
    {
        path: 'friends',
        component: FriendComponent
    },
    {
        path: 'userprofile',
        component: UserprofileComponent
    }

];

export const routing = RouterModule.forRoot(appRoutes);

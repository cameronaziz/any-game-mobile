import * as LoadingActions from './loading';
import * as NavigationActions from './navigation';
import * as TeamActions from './teams';
import * as SportActions from './sports';
import * as LoginActions from './login';
import * as TicketActions from './tickets';

export const ActionCreators = Object.assign({},
    LoadingActions,
    NavigationActions,
    TeamActions,
    SportActions,
    LoginActions,
    TicketActions
);

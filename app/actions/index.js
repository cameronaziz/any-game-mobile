import * as LoadingActions from './loading';
import * as TeamActions from './teams';
import * as NavigationActions from './navigation';
import * as SportActions from './sports';
import * as LoginActions from './login';

export const ActionCreators = Object.assign({},
    LoadingActions,
    TeamActions,
    NavigationActions,
    SportActions,
    LoginActions
);

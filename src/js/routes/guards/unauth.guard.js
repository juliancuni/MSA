import { f7 } from 'framework7-svelte';

import { checkAuthentication } from '../../stores/user.store';
import { getLoggedInUser } from '../../services/parse/auth.services';
export const unAuthGuard = async (resolve, reject, component) => {
    await checkAuthentication();
    let user = await getLoggedInUser();
    if (user) {
        f7.views.main.router.navigate("/app/dashboard");
        return reject();
    } else {
        return resolve({ component });
    }
}
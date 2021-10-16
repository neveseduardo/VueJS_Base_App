import NProgress from 'nprogress';
import { logged } from '@/services/authentication'

const delay = 100;
let resolved = false;

function tryInitProgress() {
    resolved = false;
    setTimeout(() => {
        if (!resolved) {
            NProgress.start();
        }
    }, delay);
}
export default function initProgress(router) {
    router.beforeEach(async (to, from, next) => {
        tryInitProgress();

        const isLogged = await logged()

        if (to.meta.auth && !isLogged) {
            resolved = true;
            return next({ name: 'Login' })
        } else {
            if (to.name === "Login" && isLogged) {
                return next({ name: 'Dashboard' })
            }
            resolved = true;
            return next()
        }
    });

    router.afterEach(() => {
        resolved = true;
        NProgress.done();
    });
}

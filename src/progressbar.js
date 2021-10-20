import NProgress from 'nprogress';
import { logged } from '@/services/authentication'

export default function initProgress(router) {
    router.beforeEach(async (to, from, next) => {
        NProgress.start()

        setTimeout(async () => {
            const isLogged = await logged()

            if (to.meta.auth && !isLogged) {
                resolved = true;
                return next({ name: 'Login' })
            } else {
                if (to.name === "Login" && isLogged) {
                    return next({ name: 'Dashboard' })
                }
                return next()
            }
        }, 100)
    });

    router.afterEach(() => {
        NProgress.done();
    });
}

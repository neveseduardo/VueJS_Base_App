import NProgress from 'nprogress';

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
    router.beforeEach((to, from, next) => {
        tryInitProgress();
        // para verificar dentro da rota se ela é uma rota que necesita de autenticação
        // to.meta.auth
        // Para redirecionar para o login caso não esteja autenticado
        // return next({ name: 'Login'})
        // Para redirecionar para o dashpoard caso esteja autenticado
        // return next({ name: 'Admin'})
        // para seguir o fluxo
        return next()

    });

    router.afterEach(() => {
        resolved = true;
        NProgress.done();
    });
}

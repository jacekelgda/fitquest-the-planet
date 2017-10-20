export default const composeApplyToRouter = ({ method, path }) => function(router) {
    router[method](path, this)
}

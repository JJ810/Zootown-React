const getActionType = (prefix) => (type) => `${prefix}.${type}`;
const createAction = (type, payload = {}, error = false) => ({
    type,
    payload,
    error,
});

export {
    getActionType,
    createAction
}
export const homeAction = (type) => {
    return {
        type: type,
        value: "Right"
    }
};
export const changeAction = (type, payload) => {
    return {
        type: type,
        value: payload
    }
};

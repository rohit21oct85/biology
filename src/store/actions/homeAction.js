// import { getCarousel } from "../../api/homeApi.js";

export const homeAction = (type) => {
    // return async(dispatch) => {
    //     // const data = await getCarousel();
    //     const data = "left"
    //     dispatch({ type: type, value: data });
    // };
    return {
        type: type,
        value: "left"
    }
};
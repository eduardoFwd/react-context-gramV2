export default (state, action) => {
  const { payload, type } = action;
  console.log("payload",payload,"=> type",type);
  switch (type) {
    case "like":
      return {...state,likes:payload};
    case "dislike":
      return {...state,likes:payload};
    default:
      throw new Error();
  }
};

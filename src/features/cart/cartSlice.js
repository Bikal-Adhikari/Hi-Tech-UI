import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "./cartAction";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  quantity: i.quantity + 1,
                  totalPrice: (i.quantity + 1) * i.price,
                }
              : i
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { ...item, quantity: 1, totalPrice: item.price },
        ],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case UPDATE_CART_ITEM: {
      const item = action.payload;
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: item.quantity,
                totalPrice: item.price * item.quantity,
              }
            : i
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;

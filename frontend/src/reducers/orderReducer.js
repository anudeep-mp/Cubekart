import {
  MY_ORDERS_LIST_FAILED,
  MY_ORDERS_LIST_REQUEST,
  MY_ORDERS_LIST_SUCCESS,
  MY_ORDERS_LIST_RESET,
  ORDER_CREATE_FAILED,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAILED,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
  ORDERS_LIST_BA_REQUEST,
  ORDERS_LIST_BA_SUCCESS,
  ORDERS_LIST_BA_FAILED,
  ORDERS_LIST_BA_RESET,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAILED,
  ORDER_DELIVER_RESET,
} from '../constants/allConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true }

    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload }

    case ORDER_CREATE_FAILED:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true }

    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload }

    case ORDER_DETAILS_FAILED:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true }

    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true }

    case ORDER_PAY_FAILED:
      return { loading: false, error: action.payload }

    case ORDER_PAY_RESET:
      return {}

    default:
      return state
  }
}

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return { loading: true }

    case ORDER_DELIVER_SUCCESS:
      return { loading: false, success: true }

    case ORDER_DELIVER_FAILED:
      return { loading: false, error: action.payload }

    case ORDER_DELIVER_RESET:
      return {}

    default:
      return state
  }
}

export const myOrdersListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_ORDERS_LIST_REQUEST:
      return { loading: true }

    case MY_ORDERS_LIST_SUCCESS:
      return { loading: false, orders: action.payload }

    case MY_ORDERS_LIST_FAILED:
      return { loading: false, error: action.payload }

    case MY_ORDERS_LIST_RESET:
      return { orders: [] }

    default:
      return state
  }
}

export const allOrdersListByAdminReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDERS_LIST_BA_REQUEST:
      return { loading: true }

    case ORDERS_LIST_BA_SUCCESS:
      return { loading: false, orders: action.payload }

    case ORDERS_LIST_BA_FAILED:
      return { loading: false, error: action.payload }

    case ORDERS_LIST_BA_RESET:
      return { orders: [] }

    default:
      return state
  }
}

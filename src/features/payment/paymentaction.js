import { getPaymentKey, postPaymentIntent } from "./paymentaxios";

export const getPublishableKey = async () => {
  const { publishableKey } = await getPaymentKey();
  return publishableKey;
};
export const postPaymentIntentAction = async (orderObj) => {
  const { clientSecret, orderId } = await postPaymentIntent(orderObj);
  return clientSecret;
};

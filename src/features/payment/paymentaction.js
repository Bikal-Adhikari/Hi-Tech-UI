import { getPaymentKey, postPaymentIntent } from "./paymentaxios";

export const getPublishableKey = async () => {
  const { publishableKey } = await getPaymentKey();
  return publishableKey;
};
export const postPaymentIntentAction = async (amount) => {
  const { clientSecret } = await postPaymentIntent(amount);
  return clientSecret;
};

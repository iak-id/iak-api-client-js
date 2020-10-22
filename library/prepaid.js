import { endpoint } from "../config/config";
import { isEmptyString } from "./Helpers/Helper";
import { sendRequest } from "./Helpers/RequestHelper";

const headerRequest = {
  "Content-Type": "application/json"
};

function getBaseUrl(env) {
  return env.toLowerCase() === "prod"
    ? endpoint.PREPAID_PROD_ENDPOINT
    : endpoint.PREPAID_SANDBOX_ENDPOINT;
}

export const checkBalance = async (env, username, key) => {
  try {
    const url = getBaseUrl(env) + "check-balance";

    const payload = {
      username,
      secret_key: key
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const pricelist = async (
  env,
  username,
  key,
  status,
  type = null,
  operator = null
) => {
  try {
    let url = getBaseUrl(env) + "pricelist";

    url += !isEmptyString(type) ? "/" + type : "";
    url +=
      !isEmptyString(type) && !isEmptyString(operator) ? "/" + operator : "";

    const payload = {
      username,
      secret_key: key,
      status
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const inquiryPln = async (env, username, key, customerId) => {
  try {
    const url = getBaseUrl(env) + "inquiry-pln";

    const payload = {
      username,
      customer_id: customerId,
      secret_key: key
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const inquiryGame = async (env, username, key, customerId, gameCode) => {
  try {
    const url = getBaseUrl(env) + "inquiry-game";

    const payload = {
      username,
      customer_id: customerId,
      game_code: gameCode,
      secret_key: key
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const inquiryGameServer = async (env, username, key, gameCode) => {
  try {
    const url = getBaseUrl(env) + "inquiry-game-server";

    const payload = {
      username,
      game_code: gameCode,
      secret_key: key
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const checkStatus = async (env, username, key, refId) => {
  try {
    const url = getBaseUrl(env) + "check-status";

    const payload = {
      username,
      ref_id: refId,
      secret_key: key
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const topUp = async (
  env,
  username,
  key,
  refId,
  customerId,
  productCode
) => {
  try {
    const url = getBaseUrl(env) + "top-up";

    const payload = {
      username,
      ref_id: refId,
      customer_id: customerId,
      product_code: productCode,
      secret_key: key
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

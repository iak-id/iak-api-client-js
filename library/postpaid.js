import { endpoint } from "../config/config";
import { hashSign } from "./Helpers/SignHelper";
import { isEmptyString } from "./Helpers/Helper";
import { sendRequest } from "./Helpers/RequestHelper";

const headerRequest = {
  "Content-Type": "application/json"
};

function getBaseUrl(env) {
  return env.toLowerCase() === "prod"
    ? endpoint.POSTPAID_PROD_ENDPOINT
    : endpoint.POSTPAID_SANDBOX_ENDPOINT;
}

function getMainUrl(env) {
  return getBaseUrl(env) + "api/v1/bill/check";
}

function getReceiptUrl(env, tr_id) {
  return getBaseUrl(env) + "api/v1/download/" + tr_id + "/1";
}

export const pricelist = async (env, username, key, status, type = null, province = null) => {
  try {
    const commands = "pricelist-pasca";

    let url = getMainUrl(env);

    url += !isEmptyString(type) ? "/" + type : "";

    let payload = {
      commands,
      username,
      sign: hashSign(username, key, "pl"),
      status
    };

    if (type === 'pdam' && !isEmptyString(province)) {
      payload['province'] = province;
    }

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const inquiry = async (env, username, key, code, hp, ref_id) => {
  try {
    const url = getMainUrl(env);

    const commands = "inq-pasca";

    const payload = {
      commands,
      username,
      sign: hashSign(username, key, ref_id),
      code,
      hp,
      ref_id
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const payment = async (env, username, key, tr_id) => {
  try {
    const url = getMainUrl(env);

    const commands = "pay-pasca";

    const payload = {
      commands,
      username,
      sign: hashSign(username, key, tr_id),
      tr_id
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const checkStatus = async (env, username, key, ref_id) => {
  try {
    const url = getMainUrl(env);

    const commands = "checkstatus";

    const payload = {
      commands,
      username,
      sign: hashSign(username, key, "cs"),
      ref_id
    };

    return await sendRequest("POST", headerRequest, url, payload);
  } catch (error) {
    console.error(error);
  }
};

export const receipt = async (env, tr_id) => {
  try {
    const url = getReceiptUrl(env, tr_id);

    return await sendRequest("GET", null, url);
  } catch (error) {
    console.error(error);
  }
};

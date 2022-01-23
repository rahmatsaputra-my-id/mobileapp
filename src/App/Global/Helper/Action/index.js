
import Axios from "axios";
import { base, apiKey } from "../../Configuration/Constants";

export const postLogin = async (email, password) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      "email": email,
      "password": password
    };

    const url = `${base.url}/v0/login`;

    return await Axios.post(url, body, config);
  } catch (error) {
    let errorResponse = {
      isError: true
    };
    // console.log("ActionGlobal@postLogin >>>", error.response);

    return error.response;
  }
};

export const postLogout = async (accessToken) => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    };

    const url = `${base.url}/v0/logout`;

    return await Axios.post(url, false, config);
  } catch (error) {
    let errorResponse = {
      isError: true
    };
    // console.log("ActionGlobal@postLogout >>>", error.response);

    return error.response;
  }
};

export const postRegister = async (username, email, phone, password, password_confirmation) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      "username": username,
      "email": email,
      "phone": phone,
      "account_type": "MEM00",
      "password": password,
      "password_confirmation": password_confirmation
    };

    const url = `${base.url}/v0/register`;

    return await Axios.post(url, body, config);
  } catch (error) {
    let errorResponse = {
      isError: true
    };
    // console.log("ActionGlobal@postRegister >>>", error.response);

    return error.response;
  }
};

export const postCodeVerification = async (email, otpCode) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      "email": email,
      "verify_code": otpCode,
    };

    const url = `${base.url}/v0/verify-email`;

    return await Axios.post(url, body, config);
  } catch (error) {
    let errorResponse = {
      isError: true
    };
    // console.log("ActionGlobal@postCodeVerification >>>", error.response);

    return error.response;
  }
};

export const postResendCodeVerification = async (email) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = {
      "email": email
    };

    const url = `${base.url}/v0/verify-email/resend-code`;

    return await Axios.post(url, body, config);
  } catch (error) {
    let errorResponse = {
      isError: true
    };
    // console.log("ActionGlobal@postCodeVerification >>>", error.response);

    return error.response;
  }
};

export const getNews = async () => {
  try {
    const url = `${base.news}/top-headlines?country=id&category=business&apiKey=${apiKey.news}`;

    return await Axios.get(url);
  } catch (error) {
    let errorResponse = {
      isError: true
    };
    // console.log("ActionGlobal@getNews >>>", error.response);

    return error.response;
  }
};


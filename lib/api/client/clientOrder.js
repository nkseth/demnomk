import axiosClient from "../axios";
import moment from "moment";
export const client_getAddresses = async () => {
  const axios = axiosClient.getAxios();
  const result = await axios.get(`/UserActivity/Address`);
  return result.data;
};

export const client_deleteAddress = async (addressId) => {
  const axios = axiosClient.getAxios();
  const result = await axios.delete(`/UserActivity/Address/${addressId}`);
  return result.data;
};

export const client_addAddress = async ({
  transfereeMobile,
  postalCode,
  address,
  locationX,
  locationY,
  transfereeName,
  transfereeFamily,
}) => {
  const axios = axiosClient.getAxios();
  const result = await axios.post(`/UserActivity/AddressCard`, {
    transfereeMobile,
    postalCode,
    address,
    locationX,
    locationY,
    transfereeName,
    transfereeFamily,
    MobileVerifed: false,
  });
  return result.data;
};

export const client_updateAddress = async ({
  addressId,
  transfereeMobile,
  postalCode,
  address,
  locationX,
  locationY,
  transfereeName,
  transfereeFamily,
}) => {
  const axios = axiosClient.getAxios();
  const result = await axios.put(`/UserActivity/AddressOrder`, {
    addressId,
    transfereeMobile,
    postalCode,
    address,
    locationX,
    locationY,
    transfereeName,
    transfereeFamily,
    MobileVerifed: false,
  });
  return result.data;
};

export const client_changeDestination = async (addressId) => {
  const axios = axiosClient.getAxios();
  const result = await axios.put(`/UserOrder/ChangeDestination/${addressId}`);
  return result.data
};

export const client_getOrder = async (code="") => {
  const axios = axiosClient.getAxios();
  const result = await axios.get("/UserOrder/OrderDetail?code="+code);
  return result.data;
};

export const client_getActivePayment = async () => {
  const axios = axiosClient.getAxios();
  const result = await axios.get(`/form/ActivePaymentMethod`);
  return result.data;
};

export const client_getPaymentPageUrl = async (type, cardName , cardNumber , cardMonth , cardYear , cardSecurity , cardZip ,coupon) => {
  const axios = axiosClient.getAxios();
  const result = await axios.post(`/UserOrder/InitOrderPayment`, {
    paymentType: type,
    cardName: cardName,
    cardNumber: cardNumber,
    cardMonth: cardMonth,
    cardYear: cardYear,
    securityCode: cardSecurity,
    cardZip: cardZip,
    code: coupon
  });
  return result.data;
};

export const client_getPaymentResult = async ({
  paymentId,
  PayerID,
  token,
}) => {
  const axios = axiosClient.getAxios();
  const result = await axios.post(`/UserOrder/PayOrder`, {
    PaymentId: paymentId,
    PayerID: PayerID,
    Token: token,
  });
  return result.data;
};


export const client_getAllShipMethod = async() => {
  const axios = axiosClient.getAxios();
  const result = await axios.get(`/Shipping/ShipingMethod`)
  return result
};

export const client_getDHLShipMethod = async() => {
  const axios = axiosClient.getAxios();
  const result = await axios.post(`/Shipping/dhlCalculater`,
    {
      "customerDetails":{
      "shipperDetails":{},
      "receiverDetails":{}
      },
      "productCode":"N",
      "accounts":[{}],
      "plannedShippingDateAndTime":moment().add(1,'d'),
      "monetaryAmount":[{}],
      "packages":[
      {
      "weight":1.1,
      "dimensions": {
      "length":1,
      "width":1,
      "height":1
      }
      }
      ]
      }
  )
  return result
};

export const client_getubexShipMethod = async() => {
  const axios = axiosClient.getAxios();
  const result = await axios.post(`/Shipping/ubexCalculater`,
  {
    "parcel_value": 239.0,
    "declared_value": 239.0,
    "pieces": [{
    "weight": 1.0,
     "qty": 1.0,
     "length": 1.0,
     "width": 1.0,
     "height": 1.0,
     "content": "",
     "value": 239.0
    }]
    }
  )
  return result
};

export const client_shipingUIupdate = async() => {
  const axios = axiosClient.getAxios();
  const result = await axios.get(`UserOrder/CartDetailUpdated`)
  return result
};

export const client_getaramexShipMethod = async() => {
  const axios = axiosClient.getAxios();
  const result = await axios.post(`/Shipping/aramexCalculater`,
  {
    "actualweight":1,
    "chargableweight":1
    }
  )
  return result
};
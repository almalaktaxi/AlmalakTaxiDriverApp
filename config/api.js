import axios from "axios";

const BASE_URL = __DEV__ ? 'http://192.168.1.157:8000/api/android/driver' : 'http://95.111.248.235/api/android/driver';
//const BASE_URL = 'http://admin-panel.almalaktaxi.com/api/android/driver';
const GOOGLE_API_KEY ='AIzaSyBVUHBx4sNKYrOdxGiDsh9ee7i5qq5tQSs';
const SOCKET_IO_URL ='http://95.111.248.235:3030/';
const SMS_API_URL = "http://www.btssms.com/smsapi";
const SMS_API_KEY = "C20000856085c9ce5b4456.32333811";
const SMS_SENDER_ID = "AlmalakTaxi";
const pusher_app_key = 'YOUR PUSHER APP KEY';
const pusher_app_cluster = 'YOUR PUSHER APP CLUSTER';

 
module.exports = {
    BASE_URL,
    GOOGLE_API_KEY,
    SOCKET_IO_URL,
    SMS_API_URL,
	SMS_API_KEY,
    SMS_SENDER_ID,
	pusher_app_key,
    pusher_app_cluster
};
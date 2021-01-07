import { isLocal } from '@/utils/constant';
import { Request } from 'pc-admin-common';
const { createClient, responseInterceptors, requestInterceptors } = Request;

const request = createClient();
request.interceptors.request.use(requestInterceptors, { global: false });
request.interceptors.response.use(responseInterceptors, { global: false });

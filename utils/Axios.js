import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
const devMode = process.env.NODE_ENV === 'development'

const config = {
  baseURL:"https://we-skill.vercel.app/api/v1/",

  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)
// const token = localStorage?.getItem("token")
// _axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
_axios.interceptors.request.use(
  
    function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    console.log(error)
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (devMode)
      console.log(response)

    return response
  },

  /* if error */
  function ({ response }) {
    if (devMode)
      console.log(response)

    return Promise.reject(response)
  }
)

export default _axios
import axios from 'axios'


export const getApi = async (url, data, token) => {
  console.log("url", url)
  try {
    let response = await axios.get(url + data, {
      headers: {
        "Accept": "application/json",
        'Authorization': `Bearer ${token}`, 
      }
    })
    console.log("url getApi", response)
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    console.log("url getApi error", e)
    return Promise.reject(e)
  }
}

export const postApi = async (url, data, auth) => {
  try {
    let response = await axios.post(url, data, {
      headers: {
       'Content-Type': 'application/json',
        "Accept": "application/json",
        'Authorization': `Bearer ${auth}`, 
      }
    })
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}


export const patchApi = async (url, data, auth) => {
  try {
    let response = await axios.patch(url, data, {
      headers: {
       'Content-Type': 'application/json',
        "Accept": "application/json",
        'Authorization': `Bearer ${auth}`, 
      }
    })
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}

module.exports = {
  postApi,
  getApi,
  patchApi
}
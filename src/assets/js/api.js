let api = function (url,params={}) {
    return new Promise((resolve,reject) => {
        this.axios.get(url,{
            params:params
        })
        .then(res => {
          resolve(res.data.data);
        })
        .catch(err => {
          reject(err)
        })
      })
}

export default api
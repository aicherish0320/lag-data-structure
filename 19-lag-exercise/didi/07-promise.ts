import axios from 'axios'

Promise.race([
  axios('https://api.github.com/users/aicherish0320'),
  axios('https://api.github.com/users/kongjun1201212')
])
  .then((res) => {
    console.log('res >>> ', res.data.login)
  })
  .catch((err) => {
    console.log('err >>> ', err)
  })

export {}

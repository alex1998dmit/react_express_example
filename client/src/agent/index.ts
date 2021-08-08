import to from 'await-to-js'
import superagent from 'superagent'

const respBody = (resp: any) => resp.body

const requests = {
  get: async (url: string, id: number) => {
    const [err, res] = await to(
      superagent.get(`${process.env.REACT_APP_URL}${url}/${id}`)
    )
    if (err) throw err
    return respBody(res)
  },
  post: async (url: string, data: any) => {
    const [err, res] = await to(
      superagent.post(
        `${process.env.REACT_APP_URL}${url}`,
        data
      )
    )
    if (err) throw err
    return respBody(res)
  },
  patch: async (url: string, data: any, id: number) => {
    const [err, res] = await to(
      superagent.patch(
        `${process.env.REACT_APP_URL}${url}/${id}`,
        data
      )
    )
    if (err) throw err
    return respBody(res)
  },
}

export default requests
